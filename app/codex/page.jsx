"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const Codex = () => {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        type: "text",
        content: input,
      },
      {
        role: "assistant",
        type: "text",
        content: "هي مثال على كود، اضغط عليه للتعديل 👇",
      },
      {
        role: "assistant",
        type: "code",
        content: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Codex Demo</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #0f172a, #020617);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .card {
      background: #020617;
      border-radius: 16px;
      padding: 30px;
      width: 320px;
      text-align: center;
      box-shadow: 0 0 30px rgba(56, 189, 248, 0.25);
    }

    h1 {
      margin-bottom: 10px;
      color: #38bdf8;
    }

    p {
      font-size: 14px;
      opacity: 0.8;
    }

    button {
      margin-top: 20px;
      padding: 10px 18px;
      border-radius: 999px;
      border: none;
      background: #38bdf8;
      color: black;
      font-weight: bold;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 15px #38bdf8;
    }
  </style>
</head>
<body>

  <div class="card">
    <h1>Codex</h1>
    <p>Click the button to change the text</p>
    <button onclick="changeText()">Click Me</button>
  </div>

  <script>
    function changeText() {
      const title = document.querySelector("h1");
      title.textContent = "Hello Codex 🚀";
    }
  </script>

</body>
</html>

        
        `,
      },
    ]);

    setInput("");
  };

  return (
    <div className="h-screen bg-[#0b0b10] text-white flex flex-col">
  
      <div className="flex-1  overflow-y-auto px-4 pt-25 space-y-4 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.type === "code" ? (
              <pre
                onClick={() =>
                  router.push(
                    `/codex/edit?code=${encodeURIComponent(msg.content)}`
                  )
                }
                className="bg-[#0f172a] text-white p-4 mb-5 rounded-xl text-sm font-mono 
                overflow-x-auto cursor-pointer
                hover:ring-2 hover:ring-sky-500 transition"
              >
                <code>{msg.content}</code>
              </pre>
            ) : (
              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-relaxed
                ${
                  msg.role === "user"
                    ? "bg-[#303030] text-white ml-auto rounded-br-sm"
                    : "bg-white/10 text-white mr-auto rounded-bl-sm"
                }`}
              >
                {msg.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="w-full py-4 border-t border-white/10 flex justify-center">
        <div className="relative max-w-xl flex w-full  mx-5 ">
          <div className="relative w-full flex flex-col">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height =
                  Math.min(e.target.scrollHeight, 5 * 24) + "px";
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              className="w-full min-h-[52px] max-h-30
              overflow-hidden scrollbar-hide
              rounded-xl rounded-b-none
              px-4 py-3
              bg-black
              text-white placeholder:text-white/70
              border-0 outline-none resize-none
              leading-normal"
              placeholder="Ask Codex anything..."
            />

            <div className="h-12 bg-black rounded-b-xl">
              <div className="absolute right-3 bottom-3">
                <button
                  onClick={sendMessage}
                  className="rounded-lg p-2 bg-white/25 hover:bg-white/30 text-white transition-colors"
                >
                  <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="16"
                    width="16"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Codex;
