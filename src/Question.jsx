import React from "react";
import SingleQuestion from "./SingleQuestion";

const Question = ({ question }) => {
  //   console.log(question);
  return (
    <section className="container">
      <h1>Questions</h1>
      {question.map((item) => {
        // console.log(item);
        return <SingleQuestion key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Question;
