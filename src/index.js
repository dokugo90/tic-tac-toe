import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export default function Game() {
  const [isX, setX] = useState(true)
  const [result, setResult] = useState('')
  const [play, setPlay] = useState('Player X Turn')
  const [ended, setEnded] = useState(false)
  const [disable, setDisable] = useState(false)
  const [tie, setTie] = useState(true)
  const [counter, setCounter] = useState(0)
  const [arr] = useState([])
  const btnOne = useRef()
  const btnTwo = useRef()
  const btnThree = useRef()
  const btnFour = useRef()
  const btnFive = useRef()
  const btnSix = useRef()
  const btnSeven = useRef()
  const btnEight = useRef()
  const btnNine = useRef()
  const selector = useRef()
 

  function handleClick(e) {
    if (selector.current.value == "Player vs Player") {
      e.target.disabled = true;
    setCounter(counter + 1)
    if (isX) {
      e.target.textContent = "X"
      setX(false)
      setPlay("Player O Turn")
    } else {
      e.target.textContent = "O"
      setX(true)
      setPlay("Player X Turn")
    }
    if (btnOne.current.textContent == "X" && btnTwo.current.textContent == "X" && btnThree.current.textContent == "X" ||
        btnOne.current.textContent == "X" && btnFour.current.textContent == "X" && btnSeven.current.textContent == "X" ||
        btnOne.current.textContent == "X" && btnFive.current.textContent == "X" && btnNine.current.textContent == "X" ||
        btnTwo.current.textContent == "X" && btnFive.current.textContent == "X" && btnEight.current.textContent == "X" ||
        btnFour.current.textContent == "X" && btnFive.current.textContent == "X" && btnSix.current.textContent == "X" ||
        btnSeven.current.textContent == "X" && btnEight.current.textContent == "X" && btnNine.current.textContent == "X" ||
    btnThree.current.textContent == "X" && btnFive.current.textContent == "X" && btnSeven.current.textContent == "X" ||
    btnThree.current.textContent == "X" && btnSix.current.textContent == "X" && btnNine.current.textContent == "X") {
          setResult("Player X Wins!")
          setEnded(true)
          setTie(false)
          setDisable(true)
         
    } if (btnOne.current.textContent == "O" && btnTwo.current.textContent == "O" && btnThree.current.textContent == "O" ||
    btnOne.current.textContent == "O" && btnFour.current.textContent == "O" && btnSeven.current.textContent == "O" ||
    btnOne.current.textContent == "O" && btnFive.current.textContent == "O" && btnNine.current.textContent == "O" || 
    btnTwo.current.textContent == "O" && btnFive.current.textContent == "O" && btnEight.current.textContent == "O" ||
    btnFour.current.textContent == "O" && btnFive.current.textContent == "O" && btnSix.current.textContent == "O" ||
        btnSeven.current.textContent == "O" && btnEight.current.textContent == "O" && btnNine.current.textContent == "O" ||
    btnThree.current.textContent == "O" && btnFive.current.textContent == "O" && btnSeven.current.textContent == "O" ||
    btnThree.current.textContent == "O" && btnSix.current.textContent == "O" && btnNine.current.textContent == "O") {
      setResult("Player O Wins!")
      setEnded(true)
      setTie(false)
      setDisable(true)
      
    }
    } else if (selector.current.value == "Player vs Computer") {
      
        computerMove()
    }
}

function computerMove(playerMove) {
    let move = Math.floor(Math.random() * 9) 
    if (move == 0) btnOne.current.textContent = "O";
    if (move == 1) btnTwo.current.textContent = "O";
    if (move == 2) btnThree.current.textContent = "O"; 
    if (move == 3) btnFour.current.textContent = "O"; 
    if (move == 4) btnFive.current.textContent = "O"; 
    if (move == 5) btnSix.current.textContent = "O"; 
    if (move == 6) btnSeven.current.textContent = "O"; 
    if (move == 7) btnEight.current.textContent = "O"; 
    if (move == 8) btnNine.current.textContent = "O"; 
}; 

useEffect(() => {
  if (counter == 9 && tie) {
      setDisable(true)
      setEnded(true)
      setResult("Draw")
  }
}, [counter, tie])

  function restart() {
    setCounter(0)
    setDisable(false)
    setTie(true)
    setX(true)
    setPlay("Player X Turn")
    btnOne.current.textContent = ''
    btnTwo.current.textContent = ''
    btnThree.current.textContent = ''
    btnFour.current.textContent = ''
    btnFive.current.textContent = ''
    btnSix.current.textContent = ''
    btnSeven.current.textContent = ''
    btnEight.current.textContent = ''
    btnNine.current.textContent = ''
    setEnded(false)
    arr.splice(0, arr.length);
  }

  function modeSwitch() {
    setCounter(0)
    setDisable(false)
    setTie(true)
    setX(true)
    setPlay("Player X Turn")
    btnOne.current.textContent = ''
    btnTwo.current.textContent = ''
    btnThree.current.textContent = ''
    btnFour.current.textContent = ''
    btnFive.current.textContent = ''
    btnSix.current.textContent = ''
    btnSeven.current.textContent = ''
    btnEight.current.textContent = ''
    btnNine.current.textContent = ''
    setEnded(false)
    arr.splice(0, arr.length);
    
  }
  return (
    <>
    <div className='body-flex'>
      <select className='game-mode' ref={selector} onChange={() => modeSwitch()} disabled={true}>
        <option className='optOne'>Player vs Player</option>
        <option className='optOne'>Player vs Computer</option>
      </select>
    <h2 className='player-turn'>{play}</h2>
    <div className='grid-container'>
    <button ref={btnOne} className="cell" onClick={e => handleClick(e)} disabled = {disable}></button>
    <button ref={btnTwo} className='cell' onClick={e => handleClick(e)} disabled = {disable}></button>
    <button ref={btnThree} className='cell' onClick={e => handleClick(e)} disabled = {disable}></button>
    <button ref={btnFour} className='cell' onClick={e => handleClick(e)} disabled = {disable}></button>
    <button ref={btnFive} className='cell' onClick={e => handleClick(e)} disabled = {disable}></button>
    <button ref={btnSix} className='cell' onClick={e => handleClick(e)} disabled = {disable}></button> 
    <button ref={btnSeven} className='cell' onClick={e => handleClick(e)} disabled = {disable}></button>
    <button ref={btnEight} className='cell' onClick={e => handleClick(e)} disabled = {disable}></button>
    <button ref={btnNine} className='cell' onClick={e => handleClick(e)} disabled = {disable}></button>
    </div>
    {
      ended ?
      <>
      <div className='overlay'></div>
      <dialog className='result-flex' open>
      <h1>{result}</h1>
      <button onClick={() => restart()} className="restart-btn">Restart</button>
      </dialog>
      </>
      : null
    }
    </div>
    </>
  )
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
