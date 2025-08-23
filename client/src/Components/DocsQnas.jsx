import QnaDocCard from "./QnaDocCard";
import { qnas } from "../Constants/constants.js";

function DocsQnas() {

  return (
    <div className="grid gap-4">
      {qnas.map((qna, idx) => (
        <QnaDocCard key={idx} question={qna.question} answer={qna.answer} />
      ))}
    </div>
  );
}

export default DocsQnas;
