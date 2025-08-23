import React, { useState } from "react";
import { Send } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {conf} from "../config/config.js";
import Markdown from "react-markdown";

const Qna = () => {

  const params = useParams();
  const qnaCode = params.id;
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "chatbot", text: "Hello! How can I help you today?" },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    axios.post(`${conf.serverBaseURL}/api/v1/bot/ask`, { question: input, qnaCode: qnaCode })
    .then((res) => { 
        if (res.data.statusCode >= 400) throw new Error(data.message);
        const botResponse = res.data.data;
        setMessages([...newMessages, { sender: "chatbot", text: botResponse }]);
    })
    .catch((err) => {
        console.error("Error:", err);
        setMessages([...newMessages, { sender: "chatbot", text: "Sorry, something went wrong. Please try again later." }]);
    });
  };

  return (
    <div className="flex flex-col h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl shadow ${
                msg.sender === "user"
                  ? "bg-[rgb(var(--primary))] text-white rounded-br-none"
                  : "bg-[rgb(var(--secondary))] text-white rounded-bl-none"
              }`}
            >
              <Markdown>{msg.text}</Markdown>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 border-t border-gray-300 dark:border-gray-700 flex items-center gap-2">
        <input
          type="text"
          className="flex-1 p-2 rounded-xl border border-gray-400 dark:border-gray-600 bg-transparent outline-none"
          placeholder="Type your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="p-2 bg-[rgb(var(--primary))] text-white rounded-xl hover:opacity-90"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Qna;