"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, MessageCircle, Settings, Download, Mail, Phone, Brain, Cpu } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type: "text" | "quick-reply" | "human-handoff";
}

interface QuickReply {
  id: string;
  text: string;
  category: string;
}

const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI business assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      type: "text"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [brandColor, setBrandColor] = useState("#8b5cf6");
  const [companyName, setCompanyName] = useState("Your Company");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample FAQ data - businesses can customize this
  const faqData = {
    "pricing": [
      "What are your pricing plans?",
      "Do you offer discounts for annual subscriptions?",
      "Is there a free trial available?",
      "What's included in the enterprise plan?"
    ],
    "support": [
      "How do I contact customer support?",
      "What are your support hours?",
      "Do you offer 24/7 support?",
      "How quickly do you respond to support tickets?"
    ],
    "features": [
      "What features are included?",
      "Can I customize the dashboard?",
      "Do you offer API access?",
      "Is there mobile app support?"
    ],
    "onboarding": [
      "How long does setup take?",
      "Do you provide training?",
      "Can you help with data migration?",
      "What documentation is available?"
    ]
  };

  // Quick reply suggestions
  const quickReplies: QuickReply[] = [
    { id: "1", text: "Pricing Information", category: "pricing" },
    { id: "2", text: "Customer Support", category: "support" },
    { id: "3", text: "Product Features", category: "features" },
    { id: "4", text: "Getting Started", category: "onboarding" },
    { id: "5", text: "Speak to Human", category: "human" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate AI response with FAQ matching
  const generateAIResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for FAQ matches
    if (lowerMessage.includes("pricing") || lowerMessage.includes("cost") || lowerMessage.includes("price")) {
      return "Our pricing starts at $29/month for the Starter plan, $79/month for Professional, and $199/month for Enterprise. We offer a 14-day free trial and annual discounts up to 20%. Would you like me to send you our detailed pricing guide?";
    }
    
    if (lowerMessage.includes("support") || lowerMessage.includes("help") || lowerMessage.includes("contact")) {
      return "We provide support through multiple channels: Live chat (9 AM - 6 PM EST), email support@company.com, and phone at +1-800-COMPANY. Premium customers get priority support with 2-hour response times.";
    }
    
    if (lowerMessage.includes("feature") || lowerMessage.includes("what can") || lowerMessage.includes("capabilities")) {
      return "Our platform includes advanced analytics, customizable dashboards, API access, mobile apps, automated reporting, and integrations with popular tools like Slack, Zapier, and Salesforce. Would you like a demo of any specific feature?";
    }
    
    if (lowerMessage.includes("start") || lowerMessage.includes("setup") || lowerMessage.includes("onboard")) {
      return "Getting started is easy! Setup typically takes 15-30 minutes. We provide step-by-step guides, video tutorials, and our team can help with initial configuration. We also offer free onboarding sessions for new customers.";
    }
    
    // Default response for unmatched queries
    const defaultResponses = [
      "That's a great question! Let me connect you with our human support team who can provide more detailed assistance.",
      "I understand you're asking about that. While I can help with general information, our human experts would be better suited to assist you with this specific query.",
      "Thanks for your question! I'd be happy to have one of our specialists reach out to you with a personalized response."
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Generate AI response
    const aiResponse = await generateAIResponse(inputText);
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      sender: "bot",
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleQuickReply = async (quickReply: QuickReply) => {
    if (quickReply.category === "human") {
      const humanHandoffMessage: Message = {
        id: Date.now().toString(),
        text: "I'm connecting you with our human support team. They'll be with you shortly. In the meantime, you can also reach us directly at support@company.com or call +1-800-COMPANY.",
        sender: "bot",
        timestamp: new Date(),
        type: "human-handoff"
      };
      setMessages(prev => [...prev, humanHandoffMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: quickReply.text,
      sender: "user",
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Generate AI response for the quick reply
    const aiResponse = await generateAIResponse(quickReply.text);
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      sender: "bot",
      timestamp: new Date(),
      type: "text"
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const exportChat = () => {
    const chatText = messages.map(msg => 
      `${msg.sender === 'user' ? 'You' : 'Bot'}: ${msg.text}`
    ).join('\n\n');
    
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">{companyName} AI Assistant</h1>
                <p className="text-sm text-gray-400">Powered by Advanced AI</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Customize Chatbot"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={exportChat}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Export Chat"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 h-[600px] flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user" 
                          ? "bg-gradient-to-br from-blue-500 to-purple-500" 
                          : "bg-gradient-to-br from-purple-500 to-cyan-500"
                      }`}>
                        {message.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>
                      
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-gray-700/50 text-gray-100"
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-gray-700/50 rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Reply Buttons */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply.id}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200 hover:scale-105"
                    >
                      {reply.text}
                    </button>
                  ))}
                </div>

                {/* Input Area */}
                <div className="flex space-x-3">
                  <div className="flex-1 relative">
                    <textarea
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 resize-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                      rows={1}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all duration-200 hover:scale-105 flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Business Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Business Information</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>support@company.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>+1-800-COMPANY</span>
                </div>
                <div className="text-sm text-gray-400">
                  <p>Support Hours:</p>
                  <p>Monday - Friday: 9 AM - 6 PM EST</p>
                  <p>Weekend: 10 AM - 4 PM EST</p>
                </div>
              </div>
            </div>

            {/* FAQ Categories */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Topics</h3>
              <div className="space-y-2">
                {Object.entries(faqData).map(([category, questions]) => (
                  <div key={category} className="text-sm">
                    <h4 className="font-medium text-gray-300 capitalize mb-2">{category}</h4>
                    <ul className="space-y-1 text-gray-400">
                      {questions.slice(0, 2).map((question, index) => (
                        <li key={index} className="text-xs">• {question}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Chatbot Stats */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4">Chatbot Stats</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">{messages.length}</div>
                  <div className="text-xs text-gray-400">Messages</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-xs text-gray-400">Availability</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">95%</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">&lt;2s</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Customize Your Chatbot</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Brand Color
                  </label>
                  <input
                    type="color"
                    value={brandColor}
                    onChange={(e) => setBrandColor(e.target.value)}
                    className="w-full h-12 rounded-lg cursor-pointer"
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-lg transition-all duration-200"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer - Created by Eran Haim */}
        <div className="text-center py-8 border-t border-indigo-500/20">
          <div className="flex items-center justify-center space-x-3 text-indigo-300">
            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Brain className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium">
              Created by{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Eran Haim
              </span>
            </span>
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Cpu className="w-3 h-3 text-white" />
            </div>
          </div>
          <p className="text-xs text-indigo-400/70 mt-2">
            AI Integration & Full-Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;
