export function downloadQuestionsFile(questions) {
  const fileData = `export const questionsData = ${JSON.stringify(questions, null, 2)};`;
  const blob = new Blob([fileData], { type: "application/javascript" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "questionsData.js";
  link.click();

  setTimeout(() => URL.revokeObjectURL(link.href), 100);
}
