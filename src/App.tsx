import React from "react";
import ChatArea, { Opp } from "./ChatArea";
import "./styles.css";
import { Analytics } from "@vercel/analytics/react";
export default function App() {
  return (
    <div className="App">
      <div className="overlay">
        <div style={{ color: "white", fontSize: 20 }}>
          Simple Chat Layout Demo
        </div>
        <Analytics />
        <span style={{ color: "aqua" }}>Powered by React js</span>
      </div>

      <Opp />
      <ChatArea />
    </div>
  );
}
