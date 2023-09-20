import { useState } from "react"
export default function ScoreKeeper({ numPlayer = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayer).fill(0));
  // const incrementScore = (idx)=>{
  //   setScores((prevScores) =>{
  //     const copy = [...prevScores];
  //     copy[idx] += 1;
  //     return copy;
  //   })
  // }

  // score increment
  const incrementScore = (idx) => {
    // console.log(`Clicked Index : ${idx}`)
    setScores((prevScores) => {
      // console.log(prevScores)
      return prevScores.map((score, i) => {
        // console.log(`İndex : ${i}`)
        // console.log(`Score : ${score}`)
        if (i === idx) return score + 1;
        return score
      })
    })
  }

  // score decrement

  const decrementScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx && score > 0 ) return score - 1;
        return score
      })
    })
  }

  // reset score
  const resetScore = () => {
    setScores(new Array(numPlayer).fill(0));
  }

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx} style={{ margin: "5px", listStyle: 'none' }}>
              Player{idx + 1} : {score}
              <button onClick={() => incrementScore(idx)} style={{ marginLeft: "10px" }}>+1</button>
              <button onClick={() => decrementScore(idx)} style={{ marginLeft: "10px" }}>-1</button>
              {score >= target && 'WINNER!!!'}
            </li>
          )
        })}
        <button onClick={resetScore} style={{margin: '10px'}}>RESet</button>
      </ul>
    </div>
  )
}