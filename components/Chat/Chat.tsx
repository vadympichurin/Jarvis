"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { PaperPlane, Microphone, Plus } from "phosphor-react";
import { Waveform } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import Image from "next/image";
import Robot from "../../public/robot.svg";
import HelloImage from "../../public/hello.svg";
import Batman from "../../public/batman.svg";

type Message = {
  role: "user" | "assistant";
  content: string;
  name: string;
  time: string;
  isTyping?: boolean;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    console.log(isTyping);
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const userMessage: Message = {
      role: "user",
      content: input,
      name: "Markus",
      time: timestamp,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    const typingMessage: Message = {
      role: "assistant",
      content: "Jarvis is typing...",
      name: "Jarvis",
      time: timestamp,
      isTyping: true,
    };

    setMessages((prevMessages) => [...prevMessages, typingMessage]);
    console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...messages, userMessage],
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        role: "assistant",
        content: response.data.choices[0].message.content,
        name: "Jarvis",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      setMessages((prevMessages: Message[]) =>
        prevMessages.map((msg) =>
          msg.isTyping ? { ...botMessage, role: "assistant" } : msg
        )
      );
      setIsTyping(false);
    } catch (error) {
      console.error("Error:", error);
      setIsTyping(false);
    }
  };

  return (
    <div className="flex w-full justify-center items-center min-h-screen px-32">
      <div className="w-full p-6 flex flex-col h-[95vh] ">
        <div className="flex-1 overflow-y-auto py-4 flex flex-col-reverse">
          {messages.length ? (
            <div>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  } mb-4`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAFAFA] mr-2">
                      <Image className={"h-5 w-5"} alt="Jarvis" src={Robot} />
                    </div>
                  )}

                  <div className={`max-w-[75%] rounded-lg`}>
                    <div
                      className={`flex gap-1 mb-2 ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.role === "user" ? (
                        <>
                          <p className="text-xs text-gray-500">{msg.time}</p>
                          <p className="text-xs font-bold text-black">
                            {msg.name}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-xs font-bold text-black">
                            {msg.name}
                          </p>
                          <p className="text-xs text-gray-500">{msg.time}</p>
                        </>
                      )}
                    </div>
                    <p
                      className={`text-sm px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-[#222] text-white rounded-xl rounded-tr-none text-center"
                          : "bg-[#F5F5FA] text-gray-900 text-center rounded-xl rounded-tl-none"
                      } ${msg.isTyping ? "animate-pulse" : ""}`}
                    >
                      {msg.content}
                    </p>
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 flex items-center justify-center rounded-full ml-2">
                      <Image className={"h-8 w-8"} alt="Jarvis" src={Batman} />
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex-1 flex flex-col items-center justify-center"
            >
              <Image alt="Hello BRO!" src={HelloImage} />
              <h1 className=" text-[#18181B] font-[Albert Sans] text-[40px] font-medium leading-[48px] tracking-[-1.5px]">
                How can I help you?
              </h1>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="sticky bottom-0 bg-[#F6F6F6] p-4 flex rounded-2xl shadow-[0px_2px_8px_rgba(34,34,34,0.2),_0px_4px_12px_rgba(34,34,34,0.1)]"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type to add your message"
            className="flex-1 text-xs font-bold p-3 text-[#8083A3] bg-transparent focus:outline-none"
          />

          <button className="p-2 text-gray-500 hover:text-black">
            <Microphone size={24} />
          </button>

          <button className="p-2 text-gray-500 hover:text-black">
            <Plus size={24} />
          </button>

          {input.trim() ? (
            <button
              onClick={sendMessage}
              className="ml-2 p-2 text-white rounded-lg bg-black transition flex items-center justify-center hover:bg-slate-700"
            >
              <PaperPlane size={24} />
            </button>
          ) : (
            <button className="ml-2 p-2 text-white rounded-lg bg-black transition flex items-center justify-center hover:bg-slate-700">
              <Waveform size={24} />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
