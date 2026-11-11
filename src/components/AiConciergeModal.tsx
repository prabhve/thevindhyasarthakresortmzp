import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, X, Send, Bot, User, Mic, MicOff, MessageCircle, Phone, RefreshCw } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface AiConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookRoom: () => void;
}

export const AiConciergeModal: React.FC<AiConciergeModalProps> = ({ isOpen, onClose, onBookRoom }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm-init',
      role: 'assistant',
      content: `Namaste! 🙏 I am Sarthak, your 24/7 AI Concierge at The Vindhyasarthak Resort & Banquet, Mirzapur.\n\nHow can I help you today? Ask me anything about our Deluxe rooms (from ₹2,499), 1,500+ guest wedding lawns, swimming pool, authentic Desi & Awadhi dining, or cabs to Vindhyachal Temple & Wyndham Falls!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const quickQuestions = [
    "What are the room tariffs?",
    "Tell me about wedding lawn capacity",
    "How to reach Vindhyachal temple?",
    "Do you have a swimming pool & gym?",
    "What dishes are in the Desi restaurant?"
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      id: 'usr-' + Date.now(),
      role: 'user',
      content: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const historyForApi = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyForApi })
      });

      const data = await res.json();
      const replyText = data.reply || "Namaste! For immediate assistance, our front desk is live 24/7 at +91 7753001160.";

      setMessages((prev) => [
        ...prev,
        {
          id: 'ast-' + Date.now(),
          role: 'assistant',
          content: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: 'ast-' + Date.now(),
          role: 'assistant',
          content: "Namaste! Our reception line is available 24/7 at +91 7753001160. Deluxe rooms start at ₹2,499 with complimentary breakfast. You can also chat directly with our manager on WhatsApp!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Web Speech recognition for voice input
  const handleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please type your query.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInput(transcript);
        }
      };

      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl h-[85vh] max-h-[750px] bg-white border border-neutral-200 rounded-2xl flex flex-col shadow-2xl overflow-hidden text-neutral-900">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-neutral-950 text-white border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-neutral-950 flex items-center justify-center font-bold shadow-md">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Sarthak AI Concierge</h3>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded-full">
                  Online 24/7
                </span>
              </div>
              <p className="text-xs text-neutral-300">
                The Vindhyasarthak Resort & Banquet Virtual Host
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setMessages([
                  {
                    id: 'm-reset',
                    role: 'assistant',
                    content: "Namaste! Conversation refreshed. How can I assist you with your stay or event?",
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }
                ]);
              }}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close concierge"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Thread Messages in Clean Neutral Grey */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-neutral-50">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.role === 'assistant' && (
                <div className="w-8 h-8 rounded-lg bg-neutral-900 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-neutral-950 text-white font-medium rounded-tr-none shadow-sm'
                    : 'bg-white border border-neutral-200 text-neutral-800 rounded-tl-none space-y-2 shadow-xs'
                }`}
              >
                <div className="whitespace-pre-line">{m.content}</div>
                <div
                  className={`text-[10px] pt-1 ${
                    m.role === 'user' ? 'text-neutral-400 text-right' : 'text-neutral-400'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>

              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-lg bg-neutral-200 text-neutral-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 text-amber-400 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-neutral-200 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-2 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-neutral-950 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-neutral-950 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-neutral-950 animate-bounce [animation-delay:0.4s]" />
                <span className="text-xs text-neutral-500 ml-1">Sarthak is reviewing details...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-white border-t border-neutral-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] text-neutral-500 whitespace-nowrap font-medium">Suggested:</span>
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-xs whitespace-nowrap px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-950 border border-neutral-200 rounded-full transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-neutral-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            {/* Voice Input Button */}
            <button
              type="button"
              onClick={handleVoiceInput}
              className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                isListening
                  ? 'bg-rose-600 text-white border-rose-500 animate-pulse'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950 border-neutral-200 hover:bg-neutral-200'
              }`}
              title={isListening ? 'Listening... click to stop' : 'Click to speak your question'}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isListening ? 'Listening to your voice...' : 'Ask about rooms, banquets, temples, food...'}
              className="flex-1 bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:border-neutral-950 placeholder:text-neutral-400"
            />

            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 bg-neutral-950 hover:bg-neutral-800 active:bg-black disabled:opacity-40 text-white font-bold rounded-lg transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-amber-400" />
            </button>
          </form>

          {/* Bottom Escalation to Real Humans: Responsive on mobile */}
          <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] text-neutral-500 pt-2 border-t border-neutral-100">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${RESORT_INFO.phones[0]}`}
                className="hover:text-neutral-950 flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-amber-600" />
                <span>Call: {RESORT_INFO.phones[0]}</span>
              </a>
              <a
                href={`https://wa.me/${RESORT_INFO.whatsapp}?text=${encodeURIComponent(RESORT_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3 text-emerald-600" />
                <span>Manager WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookRoom();
              }}
              className="text-neutral-900 hover:underline font-bold cursor-pointer text-left sm:text-right"
            >
              Open Booking Engine →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
