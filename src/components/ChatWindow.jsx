import React, { useState } from "react";
import {Send,MoreVertical,Phone,Paperclip,} from "lucide-react";
import {conversations,chatMessages,} from "../data/messages";

 function ChatWindow() {
  const [selected, setSelected] = useState(conversations[0]);
  const [messages, setMessages] = useState(chatMessages);
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;

    setMessages([
      ...messages,
      {
        from: "me",
        text,
        time: "Now",
      },
    ]);

    setText("");
  };

  return (
    <div className="grid overflow-hidden rounded-2xl border border-green-100 bg-white shadow-card md:grid-cols-[300px_1fr] md:min-h-[620px]">
      {/* Conversations */}
      <div className="border-b border-slate-100 md:border-b-0 md:border-r">
        <div className="border-b p-4">
          <h2 className="font-display font-extrabold">
            Messages
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Your conversations
          </p>
        </div>

        <div>
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c)}
              className={`flex w-full items-center gap-3 border-b border-slate-50 p-4 text-left ${
                selected.id === c.id ? "bg-green-50" : ""
              }`}
            >
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                {c.avatar}

                <span
                  className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white ${
                    c.online ? "bg-green-500" : "bg-slate-300"
                  }`}
                />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold text-slate-800">
                  {c.name}
                </span>

                <span className="block truncate text-xs text-slate-500">
                  {c.last}
                </span>
              </span>

              <span className="text-[10px] text-slate-400">
                {c.time}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex min-h-[520px] flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b p-4">
          <div>
            <p className="font-bold text-slate-900">
              {selected.name}
            </p>

            <p className="text-xs text-green-600">
              {selected.online ? "Online" : "Offline"} ·{" "}
              {selected.role}
            </p>
          </div>

          <div className="flex gap-1">
            <button className="rounded-lg p-2 hover:bg-slate-100">
              <Phone size={17} />
            </button>

            <button className="rounded-lg p-2 hover:bg-slate-100">
              <MoreVertical size={17} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto bg-[#fbfdfb] p-5">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.from === "me"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm ${
                  m.from === "me"
                    ? "rounded-br-md bg-green-800 text-white"
                    : "rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm"
                }`}
              >
                <p>{m.text}</p>

                <span
                  className={`mt-1 block text-[10px] ${
                    m.from === "me"
                      ? "text-green-200"
                      : "text-slate-400"
                  }`}
                >
                  {m.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="border-t bg-white p-3">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button className="rounded-lg p-2 text-slate-400">
              <Paperclip size={18} />
            </button>

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && send()
              }
              className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none"
              placeholder="Write a message..."
            />

            <button
              onClick={send}
              className="rounded-lg bg-green-800 p-2.5 text-white hover:bg-green-900"
            >
              <Send size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ChatWindow;