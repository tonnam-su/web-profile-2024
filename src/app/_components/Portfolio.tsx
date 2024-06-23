import React from "react";
import Card from "./common/Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title="Portfolio">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/tonnamkab/FoodAndCalories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Wed Food And Calories
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tonnam-su/web-profile-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Web-profile-2024 - Personal Website
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
