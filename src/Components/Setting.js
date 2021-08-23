import React, { useState } from "react";
import { Button, Input, Label, Segment } from "semantic-ui-react";

const Setting = (props) => {
  const [winningScore, setwinningScore] = useState(props.getWinningScore);
  return (
    <div className="setting">
      <h1>SETTING</h1>
      <Segment>
        <Button color="instagram" onClick={() => props.changeName()}>
          Change Player Names
        </Button>
      </Segment>

      <Segment>
        <Label color="grey" size="large">
          winning score :
        </Label>
        <Input
          type="number"
          value={winningScore}
          onChange={(e) => setwinningScore(e.target.value)}
        ></Input>
      </Segment>
      <Segment>
        <Button
          positive
          onClick={() => props.changeWinnignScore(Number(winningScore))}
        >
          Save
        </Button>
        <Button negative onClick={() => props.backButton()}>
          exit
        </Button>
      </Segment>
    </div>
  );
};
export default Setting;
