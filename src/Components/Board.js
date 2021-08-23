import { Button, Modal, Grid } from "semantic-ui-react";
import { useState, useEffect } from "react";
import Block from "./Block";

function Board(props) {
  const [xoSelector, setxoSelector] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [xOroSelector, setxOroSelector] = useState(true);
  const [count, setcount] = useState(0);
  const [open, setOpen] = useState(false);
  const playerOneName = props.playerOneName;
  const playerTwoName = props.playerTwoName;
  const [Winner, setWinner] = useState("");
  const [reset, setreset] = useState(false);
  const [playerOneWinning, setplayerOneWinning] = useState(0);
  const [playerTwoWinning, setplayerTwoWinning] = useState(0);
  const [allSteps, setallSteps] = useState([
    ["", "", "", "", "", "", "", "", ""],
  ]);

  useEffect(() => {
    findDraw();
  }, [count]);

  useEffect(() => {
    if (playerOneWinning + 1 > props.winningScore) {
      resetGame();
      setplayerOneWinning(0);
      setplayerTwoWinning(0);
      setOpen(true);
      setWinner(playerOneName);
    } else if (playerTwoWinning + 1 > props.winningScore) {
      resetGame();
      setplayerOneWinning(0);
      setplayerTwoWinning(0);
      setOpen(true);
      setWinner(playerOneName);
    }
  }, [playerOneWinning, playerTwoWinning, props.winningScore]);

  const xOroSendtoBlock = (prop) => {
    if (xOroSelector) {
      xoSelector.splice(prop, 1, "X"); //player one
      setcount((prev) => prev + 1);
      setallSteps((oldArray) => [...oldArray, [...xoSelector]]);
    } else {
      xoSelector.splice(prop, 1, "0"); //player two
      setcount((prev) => prev + 1);
      setallSteps((oldArray) => [...oldArray, [...xoSelector]]);
    }
    setxOroSelector(!xOroSelector); //change players
  };

  const findWinner = () => {
    setTimeout(() => {
      winningComb.map((arr, index) => {
        let one = arr[0];
        let two = arr[1];
        let three = arr[2];
        if (
          xoSelector[one] === xoSelector[two] &&
          xoSelector[two] === xoSelector[three] &&
          xoSelector[one] !== "" &&
          xoSelector[two] !== "" &&
          xoSelector[three] !== ""
        ) {
          if (xoSelector[one] === "X") {
            alert(`winner is ${playerOneName}`);
            setplayerOneWinning((prev) => prev + 1);
            resetGame();
          } else {
            alert(`winner is ${playerTwoName}`);
            setplayerTwoWinning((prev) => prev + 1);
            resetGame();
          }
        }
      });
    }, 500);
  };
  const resetGame = () => {
    setxoSelector(["", "", "", "", "", "", "", "", ""]);
    setreset(!reset);
    setxOroSelector(true);
    setcount(Number(0));
    setallSteps([["", "", "", "", "", "", "", "", ""]]);
  };
  const findDraw = () => {
    setTimeout(() => {
      const draw = xoSelector.every((arr) => arr !== "");
      if (draw === true) {
        resetGame();
      }
    }, 500);
  };

  const undo = () => {
    if (allSteps.length !== 1) {
      setxoSelector([...allSteps[count - 1]]);
      allSteps.pop();
      setcount((prev) => prev - 1);
      setxOroSelector(!xOroSelector);
    }
  };
  return (
    <div className="center">
      <header className="heading">
        <h1>TIC TAC TOE</h1>
      </header>
      <div className="App">
        <Block
          xo={xoSelector[0]}
          xOroSend={xOroSendtoBlock}
          id={0}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
        <Block
          xo={xoSelector[1]}
          xOroSend={xOroSendtoBlock}
          id={1}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
        <Block
          xo={xoSelector[2]}
          xOroSend={xOroSendtoBlock}
          id={2}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
        <Block
          xo={xoSelector[3]}
          xOroSend={xOroSendtoBlock}
          id={3}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
        <Block
          xo={xoSelector[4]}
          xOroSend={xOroSendtoBlock}
          id={4}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
        <Block
          xo={xoSelector[5]}
          xOroSend={xOroSendtoBlock}
          id={5}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
        <Block
          xo={xoSelector[6]}
          xOroSend={xOroSendtoBlock}
          id={6}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
        <Block
          xo={xoSelector[7]}
          xOroSend={xOroSendtoBlock}
          id={7}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
        <Block
          xo={xoSelector[8]}
          xOroSend={xOroSendtoBlock}
          id={8}
          winner={findWinner}
          reset={reset}
          xOroSelector={xOroSelector}
        />
      </div>
      <div className="buttonStyles">
        <Button positive onClick={resetGame}>
          Reset
        </Button>
        <Button negative onClick={() => props.backButton()}>
          Exit
        </Button>
        <Button negative onClick={undo}>
          Undo
        </Button>
      </div>
      <Modal
        size={"tiny"} //winning modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Modal.Content>
          <h2>winner is {Winner}</h2>
        </Modal.Content>
      </Modal>
      <div className="bottomScoreCard">
        <Grid columns={2} celled>
          <Grid.Row>
            <Grid.Column>
              <h2>{playerOneName}</h2>
            </Grid.Column>
            <Grid.Column>
              <h2>{playerTwoName}</h2>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <h2>{playerOneWinning}</h2>
            </Grid.Column>
            <Grid.Column>
              <h2>{playerTwoWinning}</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="bottomHeading">
        <h3>Player who reach first score {props.winningScore} is winner</h3>
      </div>
    </div>
  );
}

export default Board;
