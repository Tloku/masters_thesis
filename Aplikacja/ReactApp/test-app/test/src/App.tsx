import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    const newNumbers: number[] = [];
    for (let i = 0; i < 80_000; i++) {
      newNumbers.push(i);
    }
    setNumbers(newNumbers);
  }, []);



  return (
    <>
    <div className="wrapper">
      Długość tablicy: { numbers.length }
      { 
        numbers.map((i: number) => (
          <div className="row" key={i}>
            <span>This is input nr { i }</span>
            <input/>
          </div>
        )) 
      }
    </div>
    </>
  )
}

export default App
