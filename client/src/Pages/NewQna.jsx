import { useRef, useState } from "react";
import {toast} from 'react-hot-toast';
import axios from "axios";
import { conf } from "../config/config.js";
import { Paperclip } from "lucide-react";

function NewQna() {
  const [qnaName, setQnaName] = useState("");
  const [qnaDescription, setQnaDescription] = useState("");
  const [attachments, setAttachments] = useState([]);
  const fileRef = useRef(null);

  const handleFileChange = (e) => {
    setAttachments(Array.from(e.target.files));
  };

  const chooseFiles = () => {
    fileRef.current.click();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!qnaName || !qnaDescription) {
        toast.error("Please fill in all required fields.");
        return;
    }

    const formData = new FormData();
    formData.append("name", qnaName);
    formData.append("description", qnaDescription);
    attachments.forEach(file => {
      formData.append("attachments", file);
    });

    axios.post(`${conf.serverBaseURL}/api/v1/qna/`, formData)
    .then((res) => {
        if (res.data.statusCode >= 400) throw new Error(data.message);
        const userQnas = JSON.parse(localStorage.getItem("userQnas")) || [];
        localStorage.setItem("userQnas", JSON.stringify([...userQnas, res.data.data]));
        toast.success("QnA created successfully!");
    })
    .catch((err) => {
        console.error("Error creating QnA:", err);
        toast.error("Failed to create QnA. Please try again.");
    })
    .finally(() => {
        // setQnaName("");
        // setQnaDescription("");
        // setAttachments([]);
    });
  };

  return (
    <div className="flex-grow bg-[rgb(var(--bg))] text-[rgb(var(--text))] px-6 py-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Create New QnA</h1>

      <form
        onSubmit={handleSubmit}
        className="flex-grow max-w-lg mx-auto p-6 rounded-xl shadow-md bg-[rgb(var(--bg))] border border-[rgb(var(--secondary))] overflow-y-auto text-left"
      >
        {/* QnA Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="qnaName">
            QnA Name
          </label>
          <input
            id="qnaName"
            type="text"
            value={qnaName}
            onChange={(e) => setQnaName(e.target.value)}
            className="w-full p-2 border border-[rgb(var(--secondary))] rounded"
            required
          />
        </div>

        {/* QnA Description */}
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="qnaDescription">
            QnA Description
          </label>
          <textarea
            id="qnaDescription"
            value={qnaDescription}
            onChange={(e) => setQnaDescription(e.target.value)}
            className="w-full p-2 border border-[rgb(var(--secondary))] rounded"
            rows={4}
            required
          />
        </div>

        {/* File Attachments and send button */}
        <div className="mt-10">
          <div className="flex gap-2">
            <button
              onClick={chooseFiles}
              type="button"
              className="p-2 text-[rgb(var(--text))] bg-[rgb(var(--bg-secondary))] rounded-xl hover:opacity-90 hover:cursor-pointer">
                <Paperclip />
            </button>
            <input
              id="attachments"
              type="file"
              accept=".pdf"
              ref={fileRef}
              multiple
              onChange={handleFileChange}
              className="hidden w-full"
            />
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg bg-[rgb(var(--primary))] text-[rgb(var(--bg))] font-semibold hover:opacity-90 transition hover:cursor-pointer"
            >
              Create QnA
            </button>
          </div>
          <div className="">
            {attachments.length > 0 && (
              <ul className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-[rgb(var(--secondary))]">
                {attachments.map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewQna;