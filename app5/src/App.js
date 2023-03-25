import './App.css';
import React from "react"
import Title from './Title';
import Description from './Description';
import Dice from "./Dice"
import RollButton from './RollButton';

function App() {
  const numArray = []
  for (let i = 0; i < 10; i++){
    numArray.push([Math.floor(Math.random() * 10 + 1), false])
  }

  const [nums, setNums] = React.useState(
    numArray
  )

  const [gameOver, setGameOver] = React.useState(
    false    
  )

  const diceElements = nums.map((num, index) => {
    return (
      <Dice 
        key={index}
        index={index}
        value={num[0]}
        choose={num[1]}
        clickHandle={clickHandle}
      />
    )
  })

  function buttonHandle() {
    setNums(prevNums => (
      prevNums.map(num => {
        return (
          num[1] === false ? [Math.floor(Math.random() * 10 + 1), false] : num
        )
      })
    ))
  }

  function clickHandle(index) {
    const newNums = []
    for (let i = 0; i < nums.length; i++) {
      if (i === index) {
        newNums.push([nums[i][0], true])
      } else {
        newNums.push(nums[i])
      }
    }
    setNums(newNums)
  }

  function replayHandle() {
    const numArray = []
    for (let i = 0; i < 10; i++){
      numArray.push([Math.floor(Math.random() * 10 + 1), false])
    }
    setNums(numArray)
    setGameOver(prev => (!prev))
  }

  React.useEffect(
    function () {
      let n = 0
      for (let i = 0; i < nums.length; i++) {
        if (nums[i][1]) {
          n++
        }
      }
      if (n === 10) {
        setGameOver(prev => (!prev))
      }
    },
    [nums])

  return (
    <div className="App">
        <Title />
        <Description />
        <div className='dice'>
          {diceElements}
        </div>
        <RollButton 
          text={gameOver ? "Replay" : "Roll"}
          buttonHandle={buttonHandle}
          replayHandle={replayHandle}
        />
    </div>
  );
}

export default App;
