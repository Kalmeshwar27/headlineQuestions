import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import { downloadQuestionsFile } from "./utils/downloadFile";
import "./App.css";

function App() {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (q) => {
    setQuestions([...questions, q]);
  };

  return (
    <div className="app-container">
      <h1>📰 Headline Question Generator</h1>
      <QuestionForm onAddQuestion={addQuestion} />
      <hr />
      <h2>Added Questions: {questions.length}</h2>
      <pre className="question-preview">{JSON.stringify(questions, null, 2)}</pre>
      <button onClick={() => downloadQuestionsFile(questions)}>📥 Generate JS File</button>
    </div>
  );
}

export default App;
