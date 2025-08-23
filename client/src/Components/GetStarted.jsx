import { apiData } from "../Constants/constants";
import {Copy} from "lucide-react";
import toast from "react-hot-toast"

function GetStarted() {

  const copyToClipboard = (i) => {
    navigator.clipboard.writeText(apiData.apiEndpoints[i].endpoint);
    toast.success("Copied!");
  }

  return (
    <div>
      {apiData.apiEndpoints.map((api, index) => (
        <div
          key={index}
          className="mb-6 p-4 rounded-lg border border-[rgb(var(--secondary))] bg-[rgb(var(--bg))]"
        >
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-[rgb(var(--primary))]">
              {api.endpoint}
            </h3>
            <button className="p-1 bg-[rgb(var(--bg-secondary))] rounded hover:opacity-90 transition hover:cursor-pointer" onClick={()=>copyToClipboard(index)}>
              <Copy className="h-4 w-4 text-[rgb(var(--text))]"/>
            </button>
          </div>
          <p className="mt-1 text-sm">{api.description}</p>
          <p className="mt-2 text-sm">
            <span className="font-bold">Method:</span> {api.method}
          </p>

          <div className="mt-2">
            <p className="font-semibold">Body:</p>
            <pre className="bg-[rgb(var(--bg-secondary))] p-2 rounded text-xs overflow-x-auto">
              {JSON.stringify(api.body, null, 2)}
            </pre>
          </div>

          <div className="mt-2">
            <p className="font-semibold">Returns:</p>
            <pre className="bg-[rgb(var(--bg-secondary))] p-2 rounded text-xs overflow-x-auto">
              {JSON.stringify(api.returns, null, 2)}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetStarted;