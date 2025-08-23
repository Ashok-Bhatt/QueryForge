import QnaDocCard from "./QnaDocCard";

function DocsQnas() {
  const sampleQnas = [
    {
      question: "What is QnA Generator?",
      answer: "QnA Generator lets you create QnA bots using text or PDF files."
    },
    {
      question: "How do I get a unique code?",
      answer: "When you create a QnA bot, the API returns a unique code for it."
    },
    {
      question: "Can I upload multiple files?",
      answer: "Yes, the `attachments` field supports multiple files."
    }
  ];

  return (
    <div className="grid gap-4">
      {sampleQnas.map((qna, idx) => (
        <QnaDocCard key={idx} question={qna.question} answer={qna.answer} />
      ))}
    </div>
  );
}

export default DocsQnas;
