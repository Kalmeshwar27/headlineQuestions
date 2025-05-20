import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) {
  const [form, setForm] = useState({
    sentence: "",
    image: null,
    options: ["", "", "", ""],
    correctAnswer: "",
    info: "",
    readMore: ""
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setForm({ ...form, image: reader.result });
    if (file) reader.readAsDataURL(file);
  };

  const handleOptionChange = (i, value) => {
    const newOptions = [...form.options];
    newOptions[i] = value;
    setForm({ ...form, options: newOptions });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!form.sentence.includes('_')) {
    alert('Question must include a blank space like "____" for the missing word.');
    return;
  }

  

    onAddQuestion({ ...form, attempted: false, correct: false });
    setForm({
      sentence: "",
      image: null,
      options: ["", "", "", ""],
      correctAnswer: "",
      info: "",
      readMore: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="question-form">
      <label>Headline Sentence:</label>
      <textarea
        required
        placeholder=''
        value={form.sentence}
        onChange={(e) => setForm({ ...form, sentence: e.target.value })}
      />

      {/* <label>Upload Image:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} /> */}

      <label>Options:</label>
      {form.options.map((opt, i) => (
        <input
          key={i}
          placeholder={`Option ${i + 1}`}
          value={opt}
          required
          onChange={(e) => handleOptionChange(i, e.target.value)}
        />
      ))}

      <label>Correct Answer:</label>
      <select
        value={form.correctAnswer}
        onChange={(e) => setForm({ ...form, correctAnswer: e.target.value })}
        required
      >
        <option value="">Select correct option</option>
        {form.options.map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>

      <label>More Info:</label>
      <textarea
        value={form.info}
        onChange={(e) => setForm({ ...form, info: e.target.value })}
      />

      <label>Read More Link:</label>
      <input
        type="url"
        placeholder="https://example.com"
        value={form.readMore}
        onChange={(e) => setForm({ ...form, readMore: e.target.value })}
      />

      <button type="submit">➕ Add Question</button>
    </form>
  );
}

export default QuestionForm;
