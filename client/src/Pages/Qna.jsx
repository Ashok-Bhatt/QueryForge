import React, { useEffect, useState } from "react";
import { Send, Copy } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {conf} from "../config/config.js";
import Markdown from "react-markdown";
import toast from "react-hot-toast";

const Qna = () => {

  const params = useParams();
  const qnaCode = params.id;
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalDots, setTotalDots] = useState(0);
  const [messages, setMessages] = useState([
    { sender: "chatbot", text: "Hello! How can I help you today?" },
  ]);

  useEffect(()=>{
    if (loading){
      let loader = setInterval(()=>{
        setTotalDots((prev)=> (prev + 1) % 4);
      }, [250]);

      return ()=> clearInterval(loader);
    }
  }, [loading])

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    axios.post(`${conf.serverBaseURL}/api/v1/bot/ask`, { question: input, qnaCode: qnaCode })
      .then((res) => { 
        if (res.data.statusCode >= 400) throw new Error(res.data.message);
        const botResponse = res.data.data;
        setMessages([...newMessages, { sender: "chatbot", text: botResponse }]);
      })
      .catch((err) => {
        console.error("Error:", err);
        setMessages([...newMessages, { sender: "chatbot", text: "Sorry, something went wrong. Please try again later." }]);
      })
      .finally(() => setLoading(false));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(qnaCode);
    toast.success("QnA code copied to clipboard!");
  }

  return (
    <div className="flex flex-col h-full min-h-0 bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
      
      <div className="relative self-center text-center w-full">
        <h2 className="font-bold text-4xl text-[rgb(var(--primary))]">Try your chatbot</h2>
        <button className="flex gap-2 items-center absolute top-2 right-10 p-1 bg-[rgb(var(--bg-secondary))] rounded hover:opacity-90 transition hover:cursor-pointer" onClick={copyToClipboard}>
          <Copy className="h-4 w-4 text-[rgb(var(--text))]"/> Copy QnACode
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 mt-5 min-h-0 overflow-y-auto overflow-x-hidden p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-3/4 px-4 py-2 rounded-2xl shadow bg-[rgb(var(--primary))] text-black ${msg.sender === "user" ? " rounded-br-none" : " rounded-bl-none"}`}
            >
              <Markdown>{msg.text}</Markdown>
            </div>
          </div>
        ))}

        {loading && (
          <div className="max-w-3/4 w-max px-4 py-2 rounded-2xl shadow bg-[rgb(var(--primary))] text-black rounded-bl-none"
            >Loading {".".repeat(totalDots)}</div>
          )
        }
      </div>
      {/* Input Box */}
      <div className="p-3 border-t border-gray-300 dark:border-gray-700 flex items-center gap-2 sticky bottom-0 bg-[rgb(var(--bg))] z-10">
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
          className="p-2 bg-[rgb(var(--primary))] text-black rounded-xl hover:opacity-90 hover:cursor-pointer"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default Qna;