import { useState } from "react";

function Chatbot() {

  const [input, setInput] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        role: "assistant",
        content:
          "Hello 👋 Ask me about AWS costs, EC2 usage, savings, or recommendations.",
      },
    ]);

  const [loading, setLoading] =
    useState(false);

  async function sendMessage() {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {

      const response = await fetch(
        "https://v6otqa5d5i.execute-api.us-east-1.amazonaws.com/prod/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: input,
          }),
        }
      );

      const result =
        await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            result.response ||
            "No AI response received.",
        },
      ]);

    } catch (error) {

      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Failed to fetch AI response.",
        },
      ]);

    } finally {

      setLoading(false);

      setInput("");
    }
  }

  return (

    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">

      <h3 className="text-xl font-semibold mb-6">
        AWS FinOps AI Copilot
      </h3>

      <div className="space-y-4 h-[320px] overflow-y-auto mb-6">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`p-4 rounded-xl ${
              msg.role === "assistant"
                ? "bg-slate-800"
                : "bg-blue-600"
            }`}
          >
            {msg.content}
          </div>

        ))}

        {loading && (

          <div className="bg-slate-800 p-4 rounded-xl">
            Thinking...
          </div>

        )}

      </div>

      <div className="flex gap-4">

        <input
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Ask AWS FinOps questions..."
          className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl font-semibold"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default Chatbot;