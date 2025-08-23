import { useNavigate } from "react-router-dom";

function QnaCard({ name, description, uniquecode }) {

  const navigate = useNavigate();

  return (
    <div className="p-4 rounded-xl shadow-md bg-[rgb(var(--bg))] text-[rgb(var(--text))] border border-[rgb(var(--secondary))] hover:shadow-lg transition" onClick={()=>navigate(`/qna/${uniquecode}`)}>
      <h3 className="text-xl font-semibold text-[rgb(var(--primary))]">{name}</h3>
      <p className="mt-2 text-sm text-[rgb(var(--secondary))]">{description}</p>
      <p className="mt-3 font-mono text-sm">
        <span className="font-bold">Code:</span> {uniquecode}
      </p>
    </div>
  );
}

export default QnaCard;