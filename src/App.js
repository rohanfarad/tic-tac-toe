import { useState } from "react";
import Board from "./Components/Board";
import Setting from "./Components/Setting";
import {
  Menu,
  Modal,
  Header,
  Segment,
  Input,
  Button,
  Icon,
} from "semantic-ui-react";

function App() {
  const [active, setactive] = useState("");
  const [openChangeName, setOpenChangeName] = useState(false);
  const [playerOneName, setplayerOneName] = useState("Player One");
  const [playerTwoName, setplayerTwoName] = useState("Player Two");
  const [winningScorefromSetting, setwinningScorefromSetting] = useState(5);

  const changeWinnignScore = (props) => {
    setwinningScorefromSetting(props);
  };
  return (
    <>
      {active === "" && (
        <div className="middleApp">
          <Menu size="massive" vertical>
            <Menu.Item name="New Game" onClick={() => setactive("newGame")} />
            <Menu.Item name="settings" onClick={() => setactive("setting")} />
          </Menu>
        </div>
      )}
      {active === "newGame" && (
        <Board
          winningScore={winningScorefromSetting}
          playerOneName={playerOneName}
          playerTwoName={playerTwoName}
          backButton={() => setactive("")}
        />
      )}
      {active === "setting" && (
        <Setting
          getWinningScore={winningScorefromSetting}
          changeWinnignScore={changeWinnignScore}
          changeName={() => setOpenChangeName(true)}
          backButton={() => setactive("")}
        />
      )}
      <Modal
        size={"tiny"} // name change modal
        closeIcon
        open={openChangeName}
        onClose={() => setOpenChangeName(false)}
        onOpen={() => setOpenChangeName(true)}
      >
        <Header content="Change Player Names" />
        <Modal.Content>
          <Segment.Group horizontal>
            <Segment>
              <Input
                value={playerOneName}
                onChange={(e) => setplayerOneName(e.target.value)}
              />
            </Segment>
            <Segment>
              <Input
                value={playerTwoName}
                onChange={(e) => setplayerTwoName(e.target.value)}
              />
            </Segment>
          </Segment.Group>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={() => setOpenChangeName(false)}>
            <Icon name="checkmark" /> Submit
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default App;
