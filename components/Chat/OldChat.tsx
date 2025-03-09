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

function checkInput(input: string) {
  if (input.includes("greentech corp")) {
    return "Sure, Markus. Here’s a quick summary: GreenTech Corp focuses on renewable energy solutions. Recently, they shared updates about expanding into solar storage systems and posted sustainability goals that align with our product portfolio. Additionally, in your last email exchange, the customer mentioned challenges with inventory management and cost optimization. Should I pull up potential solutions we’ve discussed with similar clients?";
  } else if (input.includes("recent wins")) {
    return "Brilliant idea. I’ll incorporate recent wins into my standard briefing for you in the future. Just recently, our colleague Sarah closed a deal with a company similar to GreenTech. Should I schedule a quick exchange with her? I’ll also incorporate insights from her engagement into my briefing for you. Additionally, I’ve prepared a tailored list of questions to probe further into their challenges. Would you like me to brief you verbally now or summarize the briefing in a written format?";
  } else if (input.includes("60")) {
    return `Sure. Here’s your 60-second briefing: 
    - You’re meeting Alex, CEO. He’s a fitness enthusiast with a startup mentality and values bold, forward-thinking ideas that can disrupt the market. He’ll likely appreciate solutions emphasizing growth, scalability, and competitive edge. Speak to big-picture strategies that align with GreenTech’s vision for innovation and sustainability.
    - Lucas, COO, is also attending. He’s recently developed an interest in triathlons and is process-driven and detail-oriented. Lucas is passionate about optimizing operations and ensuring efficiency. Focus on operational benefits – how we streamline processes, reduce inefficiencies, and support long-term scalability. Be prepared to address technical and logistical questions.
    - GreenTech’s biggest challenges, based on your latest email interactions and data from similar companies, are working capital and cash flow management. Highlight how our AI solutions can drive growth while ensuring financial stability.
   `;
  } else if (input.includes("focus on")) {
    return "You had one meeting with Lucas 5 months ago and stated a positive sentiment after it. However, there was no detailed opportunity identified back than due to re-organizations.";
  } else if (input.includes("please summarize")) {
    return `Of course. Here’s what I captured: 
    -	They’re looking to integrate a solar storage system into their existing infrastructure. 
    -	Their main concern is the upfront cost and implementation timeline. 
    -	They’re also interested in how our software integrates with their current system landscape and delivers fast time-to-value while considering cash flow limitations. Should I draft an initial proposal?`;
  } else if (input.includes("absolutely")) {
    // TODO: Add PDF 1
    return "Based on their interest in solar storage, I recommend highlighting our SolarFlex+ solution. It aligns with their goals and offers a competitive implementation timeline. For pricing, should we include flexible payment options to accommodate their cash flow concerns? Additionally, referencing a deal from Sarah and similar cases, applying a 10% discount increases the likelihood of closing the deal by 26%. Would you like me to apply this discount?";
  } else if (input.includes("sounds good")) {
    // TODO: Diagramm 1
    return "Here’s a bar chart showing your sales this quarter at 70% achievement.";
  } else if (input.includes("deal forecast")) {
    // TODO: Diagramm 2
    return "Done. With a 10% discount, your achievement rate rises to 102%. Without it, the rate is 95% due to a lower likelihood of closing.";
  } else if (input.includes("10 percent")) {
    // TODO: Add PDF 2
    return "Done. look at it.";
  } else if (input.includes("my calend")) {
    return `Email with the offer has been sent to GreenTech Corp. The email includes the proposal document along with a personalized message highlighting the key benefits of SolarFlex+. Additionally, I have suggested three possible follow-up meeting times: 
    -	February 7th at 10:00 AM 
    -	February 9th at 2:00 PM 
    -	February 12th at 4:30 PM 
  These options are now added to your Microsoft calendar.
`;
  }
  return "";
}

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

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    console.log(input);

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

    if (textareaRef.current) {
      textareaRef.current.style.height = "40px";
    }

    const typingMessage: Message = {
      role: "assistant",
      content: "Jarvis is typing...",
      name: "Jarvis",
      time: timestamp,
      isTyping: true,
    };

    setMessages((prevMessages) => [...prevMessages, typingMessage]);

    let botMessage: Message;

    if (checkInput(input.toLowerCase())) {
      botMessage = {
        role: "assistant",
        content: checkInput(input.toLowerCase()),
        name: "Jarvis",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };
      setTimeout(() => {
        setMessages((prevMessages: Message[]) =>
          prevMessages.map((msg) =>
            msg.isTyping ? { ...botMessage, role: "assistant" } : msg
          )
        );
      }, 1000);
    } else {
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

        botMessage = {
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
      } catch (error) {
        console.error("Error:", error);
      }
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
                    // <div className=" flex items-center justify-center rounded-full bg-[#FAFAFA] ">
                    <Image className={"h-10 w-10"} alt="Jarvis" src={Robot} />
                    // </div>
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
                      className={`text-sm px-4 py-2 break-words whitespace-pre-wrap ${
                        msg.role === "user"
                          ? "bg-[#222] text-white rounded-xl rounded-tr-none text-left"
                          : "bg-[#F5F5FA] text-gray-900 text-left rounded-xl rounded-tl-none"
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
          <textarea
            spellCheck="false"
            autoCorrect="off"
            value={input}
            ref={textareaRef}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "40px";
              e.target.style.height = `${Math.min(
                e.target.scrollHeight,
                150
              )}px`;
            }}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type to add your message..."
            className="flex-1 flex items-center pt-[12px] text-xs font-bold justify-center align-center text-[#8083A3] bg-transparent focus:outline-none resize-none overflow-y-auto max-h-[150px] min-h-[40px]"
          />
          <button className="p-2 text-gray-500 hover:text-black max-h-[40px]">
            <Microphone size={24} />
          </button>

          <button className="p-2 text-gray-500 hover:text-black max-h-[40px]">
            <Plus size={24} />
          </button>

          {input.trim() ? (
            <button
              onClick={sendMessage}
              className="ml-2 p-2 text-white rounded-lg bg-black transition flex items-center justify-center hover:bg-slate-700 max-h-[40px]"
            >
              <PaperPlane size={24} />
            </button>
          ) : (
            <button className="ml-2 p-2 text-white rounded-lg bg-black transition flex items-center justify-center hover:bg-slate-700 max-h-[40px]">
              <Waveform size={24} />
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
