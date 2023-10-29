import { useState } from "react";
import questions from "./data.js";
import SingleQuestion from "./SingleQuestion.jsx";
import Question from "./Question.jsx";

const App = () => {
  const [question, setQuestion] = useState(questions);
  return (
    <main>
      {/* <h2>Questions</h2> */}
      <Question question={question} />
    </main>
  );
};
export default App;
