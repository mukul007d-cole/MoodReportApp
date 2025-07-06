import React, { useContext, useEffect, useState } from "react";
import QuizContext from "./context/QuizContext";

function Results() {
  const { questions } = useContext(QuizContext);
  const [conclusion, setConclusion] = useState("Generating your report...");
  const [loading, setLoading] = useState(true);

  const API_KEY = "";
  useEffect(() => {
    const generateReport = async () => {
      const prompt = formatPrompt(questions);

      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content:
                  "You are a compassionate and professional mental health assistant. Generate personalized wellness reports based on self-assessment responses.",
              },
              {
                role: "user",
                content: prompt,
              },
            ],
            temperature: 0.7,
          }),
        });

        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content;

        setConclusion(reply || "No response received.");
      } catch (error) {
        console.error("OpenAI error:", error);
        setConclusion("Something went wrong while generating your report.");
      } finally {
        setLoading(false);
      }
    };

    generateReport();
  }, [questions]);

  const formatPrompt = (questions) => {
    let prompt = "Here are the mental health self-assessment responses:\n\n";
    questions.forEach((q, i) => {
      prompt += `${i + 1}. ${q.question} — "${q.answer}"\n`;
    });
    prompt +=
      "\nBased on these responses, provide a friendly, empathetic, personalized mental health report. Include patterns, emotional cues, and gentle suggestions. Avoid sounding clinical or robotic.";
    return prompt;
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-10">Your Report</h1>
      {loading ? (
        <p className="text-gray-500 italic">Analyzing responses...</p>
      ) : (
        <p className="whitespace-pre-wrap text-2xl text-amber-300 font-bold bg-gray-100 p-4 rounded">{conclusion}</p>
      )}
    </div>
  );
}

export default Results;
