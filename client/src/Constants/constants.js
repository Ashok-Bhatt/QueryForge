const apiData = {
    apiEndpoints: [
      {
        endpoint: "https://queryforge-8cgm.onrender.com/api/v1/qna",
        method: "POST",
        description: "Create a new QnA bot",
        body: {
          name: "String",
          description: "string",
          attachments: "files (optional, can be multiple files)"
        },
        returns: {
          statusCode: "number",
          data: {
            name: "String",
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

const qnas = [
    {
      question: "What is QueryForge?",
      answer: "QueryForge lets you create QnA bots using text or PDF files."
    },
    {
      question: "How do I get a unique code?",
      answer: "When you create a QnA bot, the API returns a unique code for it."
    },
    {
      question: "Can I upload multiple files?",
      answer: "Yes, the `attachments` field supports multiple files."
    },
    {
        question: "Should I feed sensitive or private data to the chatbot?",
        answer: "Strict No, avoid uploading sensitive or private information as the data is processed by third-party services and anyone with the unique code of the chatbot can ask about your data."
    },
    {
        question: "How can I use the created chatbot in my website?",
        answer: "Use the public API endpoint 'https://queryforge-8cgm.onrender.com/api/v1/bot/ask' with body parameters 'qnaCode' (which you got after creating the chatbot) and 'question' to interact with your bot."
    },
    {
        question: "What file formats are supported for attachments?",
        answer: "Currently, PDF files are supported for creating QnA bots."
    },
    {
        question: "Is there a limit to the size or number of files I can upload?",
        answer: "Yes, you can upload up to 5 files, each with a maximum size of 5MB."
    }, 
    {
        question: "Can we crawl any website?",
        answer: "No, some websites use strong bot detectors. In that case, we wont't br able to fetch the data from provided URL. So, it is recommended to test the qna bot created before using it",
    },
    {
        question: "How many URLs can I fetch at once?",
        answer: "Just like pdfs, we have limited the number of URLs to 5 to prevent the exploitation of the resources."
    },
    {
        question: "How long does it take to create a QnA bot?",
        answer: "The creation process usually takes a few seconds, depending on the size and number of files uploaded."
    },
    {
        question: "Am I supposed to sign up or log in the website to use the API?",
        answer: "No, the API is public and does not require authentication."
    },
    {
        question: "Is there any rate limiting on the API?",
        answer: "Currently, there are no strict rate limits, but please use the API responsibly."
    },
    {
        question: "You can use my chatbot?",
        answer: "Anyone with the unique code of the chatbot can interact with your chatbot using the public API."
    }
];

export {
    apiData,
    qnas,
}