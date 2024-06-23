import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Learn a new skill</li>
          <li>Read 100 books</li>
          <li>Develop skills in using various equipment</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
