import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Advocate (INFJ-T)</p>
        <p className="pb-2">
        Supporters are quiet but often inspirational dreamers and tireless adherents of their ideals.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>VISION</Badge>
          <Badge>FEELING</Badge>
          <Badge>PLANNER</Badge>
          <Badge>AWAKE</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
