import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

function App() {

  const [dashboard,
    setDashboard] =
    useState({

      totalCost:
        "Loading...",

      highestService:
        "Loading...",

      estimatedSavings:
        "Loading...",
    });

  const [message,
    setMessage] =
    useState("");

  const [chat,
    setChat] =
    useState([
      {
        type: "bot",
        text:
          "Welcome to AWS FinOps Copilot 🚀",
      },
    ]);

  /* =====================================
     LOAD DASHBOARD
  ===================================== */

  useEffect(() => {

    async function loadDashboard() {

      try {
        const response =
          await axios.get(
            "http://localhost:3000/dashboard"
          );

        setDashboard(
          response.data?.insights || {
            totalCost: "N/A",
            highestService: "N/A",
            estimatedSavings: "N/A",
          }
        );
      } catch (error) {
        console.error("Dashboard fetch failed:", error);
      }
    }

    loadDashboard();

  }, []);

  /* =====================================
     CHATBOT
  ===================================== */

  async function sendMessage() {

    if (!message) return;

    const userMessage = {

      type: "user",

      text: message,
    };

    setChat((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentMessage =
      message;

    setMessage("");

    const response =
      await axios.post(
        "http://localhost:3000/chat",
        {
          message:
            currentMessage,
        }
      );

    const botMessage = {

      type: "bot",

      text:
        response.data.response,
    };

    setChat((prev) => [
      ...prev,
      botMessage,
    ]);
  }

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      {/* SIDEBAR */}

      <div
        style={{
          width: "240px",
          background: "#0b1220",
          padding: "30px",
          borderRight:
            "1px solid #1e293b",
        }}
      >

        <h2>
          FinOps AI
        </h2>

        <div
          style={{
            marginTop: "40px",
          }}
        >

          {[
            "Dashboard",
            "Cost Explorer",
            "Forecast",
            "Budgets",
            "Alerts",
            "Recommendations",
          ].map((item) => (

            <div
              key={item}

              style={{
                padding: "14px",
                marginBottom:
                  "14px",
                borderRadius:
                  "12px",
                background:
                  item ===
                  "Dashboard"
                    ? "#2563eb"
                    : "#111827",
                cursor:
                  "pointer",
              }}
            >

              {item}

            </div>
          ))}

        </div>

      </div>

      {/* MAIN */}

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >

        {/* HEADER */}

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
          }}
        >

          <div>

            <h1>
              AWS Cost Dashboard
            </h1>

            <p
              style={{
                color:
                  "#94a3b8",
              }}
            >
              Enterprise Cloud Intelligence
            </p>

          </div>

          <div
            style={{
              color:
                "#10b981",
              fontWeight:
                "bold",
            }}
          >
            ● AWS Connected
          </div>

        </div>

        {/* CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3,1fr)",
            gap: "20px",
            marginTop: "30px",
          }}
        >

          <Card
            title="Total AWS Spend"
            value={
              `$${dashboard.totalCost}`
            }
          />

          <Card
            title="Highest Cost Service"
            value={
              dashboard.highestService
            }
          />

          <Card
            title="Potential Savings"
            value={
              `$${dashboard.estimatedSavings}`
            }
          />

        </div>

        {/* CHATBOT */}

        <div
          style={{
            background: "#111827",
            marginTop: "30px",
            borderRadius: "20px",
            height: "500px",
            display: "flex",
            flexDirection:
              "column",
          }}
        >

          {/* CHAT HEADER */}

          <div
            style={{
              padding: "20px",
              borderBottom:
                "1px solid #1e293b",
              fontWeight:
                "bold",
            }}
          >

            AWS FinOps Copilot

          </div>

          {/* CHAT BODY */}

          <div
            style={{
              flex: 1,
              padding: "20px",
              overflowY:
                "auto",
            }}
          >

            {chat.map(
              (msg, index) => (

                <div
                  key={index}

                  style={{
                    display: "flex",
                    justifyContent:
                      msg.type ===
                      "user"
                        ? "flex-end"
                        : "flex-start",

                    marginBottom:
                      "16px",
                  }}
                >

                  <div
                    style={{
                      background:
                        msg.type ===
                        "user"
                          ? "#2563eb"
                          : "#1e293b",

                      padding:
                        "14px",

                      borderRadius:
                        "14px",

                      maxWidth:
                        "70%",

                      lineHeight:
                        "1.8",

                      whiteSpace:
                        "pre-wrap",
                    }}
                  >

                    {msg.text}

                  </div>

                </div>
              )
            )}

          </div>

          {/* CHAT INPUT */}

          <div
            style={{
              padding: "20px",
              borderTop:
                "1px solid #1e293b",
              display: "flex",
              gap: "10px",
            }}
          >

            <input
              value={message}

              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }

              placeholder="Ask AWS cost questions..."

              style={{
                flex: 1,
                padding: "16px",
                borderRadius:
                  "12px",
                border: "none",
                background:
                  "#0f172a",
                color:
                  "white",
              }}
            />

            <button
              onClick={
                sendMessage
              }

              style={{
                background:
                  "#2563eb",
                border:
                  "none",
                color:
                  "white",
                padding:
                  "16px 24px",
                borderRadius:
                  "12px",
                cursor:
                  "pointer",
              }}
            >

              Send

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =====================================
   CARD
===================================== */

function Card({
  title,
  value,
}) {

  return (

    <div
      style={{
        background: "#111827",
        padding: "24px",
        borderRadius: "20px",
      }}
    >

      <div
        style={{
          color: "#94a3b8",
          marginBottom:
            "10px",
        }}
      >

        {title}

      </div>

      <div
        style={{
          fontSize: "20px",
          fontWeight:
            "bold",
          lineHeight:
            "1.8",
        }}
      >

        {value}

      </div>

    </div>
  );
}

export default App;