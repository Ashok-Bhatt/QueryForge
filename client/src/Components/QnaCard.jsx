import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, Copy } from "lucide-react";
import { toast } from "react-hot-toast";

function QnaCard({ name, description, uniquecode }) {

  const navigate = useNavigate();
  const [showQnaCode, setShowQnaCode] = useState(false);

  const copyToClipboard = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(uniquecode);
    toast.success("QnA code copied to clipboard!");
  }

  const toggleVisibility = (e) => {
    e.stopPropagation();
    setShowQnaCode((prev)=>!prev);
  }

  return (
    <div className="p-4 rounded-xl shadow-md bg-[rgb(var(--bg))] text-[rgb(var(--text))] border border-[rgb(var(--secondary))] hover:shadow-lg transition" onClick={()=>navigate(`/qna/${uniquecode}`)}>
      <h3 className="text-xl font-semibold text-[rgb(var(--primary))]">{name}</h3>
      <p className="mt-2 text-sm text-[rgb(var(--secondary))]">{description}</p>
      <div className="w-full flex gap-x-1">
        <p className="mt-3 font-mono text-sm">
          <span className="font-bold">Code:</span> {showQnaCode ? uniquecode : "*".repeat(uniquecode.length)} 
        </p>
        <button className="ml-auto p-1 bg-[rgb(var(--bg-secondary))] rounded hover:opacity-90 transition hover:cursor-pointer" onClick={toggleVisibility}>
          {showQnaCode ? <EyeOff className="h-4 w-4 text-[rgb(var(--text))]"/> : <Eye className="h-4 w-4 text-[rgb(var(--text))]"/>}
        </button>
        <button className="p-1 bg-[rgb(var(--bg-secondary))] rounded hover:opacity-90 transition hover:cursor-pointer" onClick={copyToClipboard}>
          <Copy className="h-4 w-4 text-[rgb(var(--text))]"/>
        </button>
      </div>
    </div>
  );
}

export default QnaCard;