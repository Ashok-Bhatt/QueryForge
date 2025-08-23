import { useEffect, useState } from "react";
import {GetStarted, DocsQnas} from "../Components/export.js";

function Documentation() {
  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeDocTab") || "getStarted");

  useEffect(()=>{
    localStorage.setItem("activeDocTab", activeTab);
  }, [activeTab]);

  return (
    <div className="flex-grow bg-[rgb(var(--bg))] text-[rgb(var(--text))] px-6 py-8 overflow-y-auto">
      {/* Tabs */}
      <div className="flex gap-6 border-b border-[rgb(var(--secondary))] mb-6">
        <button
          onClick={() => setActiveTab("getStarted")}
          className={`pb-2 ${
            activeTab === "getStarted"
              ? "border-b-2 border-[rgb(var(--primary))] font-semibold"
              : "text-[rgb(var(--secondary))]"
          }`}
        >
          Get Started
        </button>
        <button
          onClick={() => setActiveTab("qnas")}
          className={`pb-2 ${
            activeTab === "qnas"
              ? "border-b-2 border-[rgb(var(--primary))] font-semibold"
              : "text-[rgb(var(--secondary))]"
          }`}
        >
          QnAs
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "getStarted" ? <GetStarted /> : <DocsQnas />}
    </div>
  );
}

export default Documentation;