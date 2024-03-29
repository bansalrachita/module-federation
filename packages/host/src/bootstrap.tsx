import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import "./index.css";

const container: HTMLElement | null = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
