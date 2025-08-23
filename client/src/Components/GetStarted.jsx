function GetStarted() {
  const apiData = {
    message: "Welcome to the QnA Bot API",
    apiEndpoints: [
      {
        endpoint: "https://queryforge-8cgm.onrender.com/api/v1/qna",
        method: "POST",
        description: "Create a new QnA bot",
        body: {
          description: "string",
          attachments: "files (optional, can be multiple files)"
        },
        returns: {
          statusCode: "number",
          data: {
            description: "string",
            uniqueCode: "string"
          },
          message: "string",
          success: "boolean"
        }
      },
      {
        endpoint: "https://queryforge-8cgm.onrender.com/api/v1/bot/ask",
        method: "POST",
        description: "Ask a question to the QnA bot",
        body: {
          qnaCode: "string (unique code of the QnA bot generated during creation)",
          question: "string"
        },
        returns: {
          statusCode: "number",
          data: {
            response: "string (response to the question asked)"
          },
          message: "string",
          success: "boolean"
        }
      }
    ]
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{apiData.message}</h2>
      {apiData.apiEndpoints.map((api, index) => (
        <div
          key={index}
          className="mb-6 p-4 rounded-lg border border-[rgb(var(--secondary))] bg-[rgb(var(--bg))]"
        >
          <h3 className="text-lg font-semibold text-[rgb(var(--primary))]">
            {api.endpoint}
          </h3>
          <p className="mt-1 text-sm">{api.description}</p>
          <p className="mt-2 text-sm">
            <span className="font-bold">Method:</span> {api.method}
          </p>

          <div className="mt-2">
            <p className="font-semibold">Body:</p>
            <pre className="bg-gray-200 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">
              {JSON.stringify(api.body, null, 2)}
            </pre>
          </div>

          <div className="mt-2">
            <p className="font-semibold">Returns:</p>
            <pre className="bg-gray-200 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">
              {JSON.stringify(api.returns, null, 2)}
            </pre>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetStarted;