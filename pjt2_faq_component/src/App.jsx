import { useState } from "react";
import "./App.css";

function App() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Who was the First Female Prime Minister of India?",
      answer: "Indira Gandhi",
      open: false,
    },
    {
      id: 2,
      question: "Who was the First Prime Minister of India?",
      answer: "Jawaharlal Nehru",
      open: false,
    },
    {
      id: 3,
      question: "Who was the Second Prime Minister of India?",
      answer: "Lal Bahadur Shastri",
      open: false,
    },
  ]);

  const [openId, setOpenId] = useState(null);

  function handleOpen(selectedId) {
   setOpenId(selectedId);
  }

  return (
    <>
      <h2>FAQ component</h2>

      <div className="faq_component">
        {faqs.map((i, index) => {
          return (
            <div key={index}>
              <div className="question">
                {i.question}
                <span className="downarrow" onClick={() => handleOpen(i.id)}>
                  ⬇️
                </span>
              </div>

              {openId === i.id && <div className="answer">{i.answer}</div>}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
