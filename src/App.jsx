
// import { useEffect, useRef, useState } from "react";
// import styled, { keyframes } from "styled-components";
// import clickSoundFile from "./assets/click.mp3";
// import resetSoundFile from "./assets/reset.mp3";
// import loseSoundFile from "./assets/lose.mp3";
// import gameOverSoundFile from "./assets/game-over.mp3";

// const Wrapper = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: #f3f4f6;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   position: relative;
// `;

// const Title = styled.h1`
//   margin-bottom: 20px;
//   color: #1f2937;
// `;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   gap: 15px;
//   margin-bottom: 40px;
// `;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: ${(props) => (props.clicked ? (props.isKiller ? "black" : "green") : "#e5e7eb")};
//   border: 3px solid #374151;
//   border-radius: 12px;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   transition: background-color 0.3s, transform 0.2s;

//   &:hover {
//     transform: ${(props) => (props.disabled ? "none" : "scale(1.05)")};
//   }
// `;

// const ResetButton = styled.button`
//   padding: 12px 30px;
//   font-size: 18px;
//   font-weight: 600;
//   background: linear-gradient(135deg, #667eea, #764ba2);
//   color: #fff;
//   border: none;
//   border-radius: 12px;
//   cursor: pointer;
//   box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 10px 25px rgba(102, 126, 234, 0.5);
//   }

//   &:active {
//     transform: scale(0.97);
//     box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
//   }
// `;

// const fadeInOut = keyframes`
//   0% { opacity: 0; transform: scale(0.9); }
//   20% { opacity: 1; transform: scale(1); }
//   80% { opacity: 1; transform: scale(1); }
//   100% { opacity: 0; transform: scale(1.05); }
// `;

// const Popup = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: #10b981;
//   color: #fff;
//   padding: 20px 30px;
//   border-radius: 12px;
//   font-size: 24px;
//   font-weight: bold;
//   animation: ${fadeInOut} 1s ease-in-out forwards;
//   z-index: 2;
// `;

// const GameOverCard = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: #f87171;
//   color: white;
//   padding: 30px 50px;
//   border-radius: 20px;
//   text-align: center;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
//   z-index: 3;
// `;

// function App() {
//   const [grid, setGrid] = useState(Array(9).fill(false));
//   const [killerBox, setKillerBox] = useState(null);
//   const [clickedBoxes, setClickedBoxes] = useState([]);
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const clickSound = useRef(new Audio(clickSoundFile));
//   const resetSound = useRef(new Audio(resetSoundFile));
//   const loseSound = useRef(new Audio(loseSoundFile));
//   const gameOverSound = useRef(new Audio(gameOverSoundFile));

//   useEffect(() => {
//     setKillerBox(Math.floor(Math.random() * 9));
//   }, []);

//   const handleClick = (index) => {
//     if (grid[index] || gameOver) return;

//     clickSound.current.currentTime = 0;
//     clickSound.current.play();

//     const newGrid = [...grid];
//     newGrid[index] = true;
//     setGrid(newGrid);
//     setClickedBoxes((prev) => [...prev, index]);

//     if (index === killerBox) {
//       loseSound.current.currentTime = 0;
//       loseSound.current.play();

//       setTimeout(() => {
//         gameOverSound.current.currentTime = 0;
//         gameOverSound.current.play();
//       }, 1000);

//       setGameOver(true);
//     } else {
//       setScore((prev) => prev + 5);
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 1000);
//     }
//   };

//   const resetGame = () => {
//     resetSound.current.currentTime = 0;
//     resetSound.current.play();

//     setGrid(Array(9).fill(false));
//     setKillerBox(Math.floor(Math.random() * 9));
//     setClickedBoxes([]);
//     setScore(0);
//     setGameOver(false);
//     setShowPopup(false);
//   };

//   return (
//     <Wrapper>
//       <Title>Safe Box Challenge</Title>
//       <Container>
//         {grid.map((clicked, idx) => (
//           <Box
//             key={idx}
//             clicked={clicked}
//             isKiller={idx === killerBox}
//             onClick={() => handleClick(idx)}
//             disabled={clicked || gameOver}
//           />
//         ))}
//       </Container>
//       <ResetButton onClick={resetGame}>Reset</ResetButton>
//       {showPopup && <Popup>+5 Points!</Popup>}
//       {gameOver && (
//         <GameOverCard>
//           <h2>💀 Game Over</h2>
//           <p>Your Score: {score}</p>
//         </GameOverCard>
//       )}
//     </Wrapper>
//   );
// }

// export default App;






// import { useEffect, useRef, useState } from "react";
// import styled, { keyframes } from "styled-components";
// import clickSoundFile from "./assets/click.mp3";
// import resetSoundFile from "./assets/reset.mp3";
// import loseSoundFile from "./assets/lose.mp3";
// import gameOverSoundFile from "./assets/game-over.mp3";
// import transitionSoundFile from "./assets/transition.mp3";

// const celebration = keyframes`
//   0% { transform: scale(0.8) rotate(0deg); opacity: 0.3; }
//   50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
//   100% { transform: scale(0.8) rotate(360deg); opacity: 0; }
// `;

// const Wrapper = styled.div`
//   min-height: 100vh;
//   background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   padding: 20px;
//   position: relative;
//   color: white;
// `;

// const Title = styled.h1`
//   margin-bottom: 20px;
// `;

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 100px);
//   gap: 15px;
//   margin-bottom: 30px;

//   @media (max-width: 500px) {
//     grid-template-columns: repeat(3, 80px);
//     gap: 10px;
//   }
// `;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: ${(props) =>
//     props.clicked ? (props.isKiller ? "black" : "green") : "#ddd"};
//   border: 3px solid #ccc;
//   border-radius: 12px;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   transition: background-color 0.3s, transform 0.2s;

//   &:hover {
//     transform: ${(props) => (props.disabled ? "none" : "scale(1.05)")};
//   }

//   @media (max-width: 500px) {
//     width: 80px;
//     height: 80px;
//   }
// `;

// const ResetButton = styled.button`
//   padding: 12px 30px;
//   font-size: 16px;
//   background: linear-gradient(to right, #ff416c, #ff4b2b);
//   color: white;
//   border: none;
//   border-radius: 10px;
//   font-weight: bold;
//   margin-top: 20px;
//   cursor: pointer;
//   transition: all 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
//   }
// `;

// const Popup = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: #10b981;
//   color: #fff;
//   padding: 20px 30px;
//   border-radius: 12px;
//   font-size: 24px;
//   font-weight: bold;
//   animation: ${celebration} 1s ease-in-out forwards;
//   z-index: 10;
// `;

// const GameOverCard = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: #dc2626;
//   padding: 30px 50px;
//   border-radius: 20px;
//   color: white;
//   text-align: center;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
//   z-index: 20;
// `;

// const CelebrationOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: rgba(255, 255, 255, 0.15);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   animation: ${celebration} 2s ease-out;
//   z-index: 15;
// `;

// const CelebrationText = styled.div`
//   font-size: 36px;
//   font-weight: bold;
//   color: #facc15;
//   text-shadow: 2px 2px 8px #000;
// `;

// function App() {
//   const [grid, setGrid] = useState(Array(9).fill(false));
//   const [killerBox, setKillerBox] = useState(null);
//   const [clickedBoxes, setClickedBoxes] = useState([]);
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [won, setWon] = useState(false);

//   const clickSound = useRef(new Audio(clickSoundFile));
//   const resetSound = useRef(new Audio(resetSoundFile));
//   const loseSound = useRef(new Audio(loseSoundFile));
//   const gameOverSound = useRef(new Audio(gameOverSoundFile));
//   const transitionSound = useRef(new Audio(transitionSoundFile));

//   useEffect(() => {
//     setKillerBox(Math.floor(Math.random() * 9));
//   }, []);

//   const handleClick = (index) => {
//     if (grid[index] || gameOver || won) return;

//     clickSound.current.currentTime = 0;
//     clickSound.current.play();

//     const newGrid = [...grid];
//     newGrid[index] = true;
//     setGrid(newGrid);
//     setClickedBoxes((prev) => [...prev, index]);

//     if (index === killerBox) {
//       loseSound.current.currentTime = 0;
//       loseSound.current.play();
//       setTimeout(() => {
//         gameOverSound.current.currentTime = 0;
//         gameOverSound.current.play();
//       }, 1000);
//       setGameOver(true);
//     } else {
//       const newScore = score + 5;
//       setScore(newScore);
//       setShowPopup(true);
//       setTimeout(() => setShowPopup(false), 1000);

//       if (newScore === 40) {
//         transitionSound.current.currentTime = 0;
//         transitionSound.current.play();
//         setWon(true);
//         setTimeout(() => setWon(false), 2000);
//       }
//     }
//   };

//   const resetGame = () => {
//     resetSound.current.currentTime = 0;
//     resetSound.current.play();

//     setGrid(Array(9).fill(false));
//     setKillerBox(Math.floor(Math.random() * 9));
//     setClickedBoxes([]);
//     setScore(0);
//     setGameOver(false);
//     setShowPopup(false);
//     setWon(false);
//   };

//   return (
//     <Wrapper>
//       <Title>🎮 Safe Box Challenge</Title>
//       <Container>
//         {grid.map((clicked, idx) => (
//           <Box
//             key={idx}
//             clicked={clicked}
//             isKiller={idx === killerBox}
//             onClick={() => handleClick(idx)}
//             disabled={clicked || gameOver || won}
//           />
//         ))}
//       </Container>
//       <ResetButton onClick={resetGame}>🔁 Reset</ResetButton>

//       {showPopup && <Popup>+5 Points!</Popup>}

//       {gameOver && (
//         <GameOverCard>
//           <h2>💀 Game Over</h2>
//           <p>Your Score: {score}</p>
//         </GameOverCard>
//       )}

//       {won && (
//         <CelebrationOverlay>
//           <CelebrationText>🎉 Congratulations! You Won!</CelebrationText>
//         </CelebrationOverlay>
//       )}
//     </Wrapper>
//   );
// }

// export default App;




import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import clickSoundFile from "./assets/click.mp3";
import resetSoundFile from "./assets/reset.mp3";
import loseSoundFile from "./assets/lose.mp3";
import gameOverSoundFile from "./assets/game-over.mp3";
import transitionSoundFile from "./assets/transition.mp3";
import Confetti from "react-confetti";

const celebration = keyframes`
  0% { transform: scale(0.8) rotate(0deg); opacity: 0.3; }
  50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
  100% { transform: scale(0.8) rotate(360deg); opacity: 0; }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  position: relative;
  color: white;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 15px;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 80px);
    gap: 10px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.clicked ? (props.isKiller ? "black" : "green") : "#ddd"};
  border: 3px solid #ccc;
  border-radius: 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    transform: ${(props) => (props.disabled ? "none" : "scale(1.05)" )};
  }

  @media (max-width: 500px) {
    width: 80px;
    height: 80px;
  }
`;

const ResetButton = styled.button`
  padding: 12px 30px;
  font-size: 16px;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #10b981;
  color: #fff;
  padding: 20px 30px;
  border-radius: 12px;
  font-size: 24px;
  font-weight: bold;
  animation: ${celebration} 1s ease-in-out forwards;
  z-index: 10;
`;

const GameOverCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #dc2626;
  padding: 30px 50px;
  border-radius: 20px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  z-index: 20;
`;

const CelebrationOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${celebration} 2s ease-out;
  z-index: 15;
`;

const CelebrationText = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #facc15;
  text-shadow: 2px 2px 8px #000;
`;

function App() {
  const [grid, setGrid] = useState(Array(9).fill(false));
  const [killerBox, setKillerBox] = useState(null);
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [won, setWon] = useState(false);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );

  const clickSound = useRef(new Audio(clickSoundFile));
  const resetSound = useRef(new Audio(resetSoundFile));
  const loseSound = useRef(new Audio(loseSoundFile));
  const gameOverSound = useRef(new Audio(gameOverSoundFile));
  const transitionSound = useRef(new Audio(transitionSoundFile));

  useEffect(() => {
    setKillerBox(Math.floor(Math.random() * 9));
  }, []);

  const handleClick = (index) => {
    if (grid[index] || gameOver || won) return;

    clickSound.current.currentTime = 0;
    clickSound.current.play();

    const newGrid = [...grid];
    newGrid[index] = true;
    setGrid(newGrid);
    setClickedBoxes((prev) => [...prev, index]);

    if (index === killerBox) {
      loseSound.current.currentTime = 0;
      loseSound.current.play();
      setTimeout(() => {
        gameOverSound.current.currentTime = 0;
        gameOverSound.current.play();
      }, 1000);
      setGameOver(true);
    } else {
      const newScore = score + 5;
      setScore(newScore);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1000);

      if (newScore === 40) {
        transitionSound.current.currentTime = 0;
        transitionSound.current.play();
        setWon(true);
        if (newScore > highScore) {
          localStorage.setItem("highScore", newScore);
          setHighScore(newScore);
        }
        setTimeout(() => setWon(false), 4000);
      }
    }
  };

  const resetGame = () => {
    resetSound.current.currentTime = 0;
    resetSound.current.play();

    setGrid(Array(9).fill(false));
    setKillerBox(Math.floor(Math.random() * 9));
    setClickedBoxes([]);
    setScore(0);
    setGameOver(false);
    setShowPopup(false);
    setWon(false);
  };

  return (
    <Wrapper>
      <Title>🎮 Safe Box Challenge</Title>
      <p>High Score: {highScore}</p>
      <Container>
        {grid.map((clicked, idx) => (
          <Box
            key={idx}
            clicked={clicked}
            isKiller={idx === killerBox}
            onClick={() => handleClick(idx)}
            disabled={clicked || gameOver || won}
          />
        ))}
      </Container>
      <ResetButton onClick={resetGame}>🔁 Reset</ResetButton>

      {showPopup && <Popup>+5 Points!</Popup>}

      {gameOver && (
        <GameOverCard>
          <h2>💀 Game Over</h2>
          <p>Your Score: {score}</p>
        </GameOverCard>
      )}

      {won && (
        <>
          <CelebrationOverlay>
            <CelebrationText>🎉 Congratulations! You Won!</CelebrationText>
          </CelebrationOverlay>
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </>
      )}
    </Wrapper>
  );
}

export default App;
