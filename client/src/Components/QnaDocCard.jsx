function QnaDocCard({ question, answer }) {
  return (
    <div className="p-4 rounded-lg shadow-md bg-[rgb(var(--bg))] border border-[rgb(var(--secondary))]">
      <h4 className="font-semibold text-[rgb(var(--primary))]">{question}</h4>
      <p className="mt-2 text-sm text-[rgb(var(--text))]">{answer}</p>
    </div>
  );
}

export default QnaDocCard;