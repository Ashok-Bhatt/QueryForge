import { useEffect, useState } from "react";
import {QnaCard} from "../Components/export.js";

function PreviousQnas() {
  const [qnas, setQnas] = useState([]);

  useEffect(() => {
    const storedQnas = JSON.parse(localStorage.getItem("userQnas")) || [];
    setQnas(storedQnas);
  }, []);

  return (
    <div className="flex flex-col flex-grow bg-[rgb(var(--bg))] text-[rgb(var(--text))] px-6 py-8 overflow-y-auto">
      {qnas.length === 0 ? (
        <p className="text-[rgb(var(--secondary))] justify-self-center self-center">No QnAs found. Generate one to see it here.</p>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6">Previous QnAs</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qnas.map((qna, idx) => (
              <QnaCard
                key={idx}
                name={qna.name}
                description={qna.description}
                uniquecode={qna.uniqueCode}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PreviousQnas;