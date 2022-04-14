import React, {FormEvent, useState} from 'react';

function App() {
  const [weight, setWeight] = useState('0')
  const [height, setHeight] = useState('0')
  const [result, setResult] = useState('')

  async function onSubmit (e: FormEvent) {
    e.preventDefault()
    const res = await fetch(`http://localhost:3001/?weight=${weight}&height=${height}`).then((res) => res.json())
    setResult(res.result)

  }

  return (
    <div>
      <h1>BMI 계산기</h1>
      <form onSubmit={onSubmit}>
        <input placeholder="몸무게" onChange={(e) => setWeight(e.target.value)} type="number"/>
        <input placeholder="키" onChange={(e) => setHeight(e.target.value)} type="number"/>
        <button>계산</button>
      </form>

      <p>결과: {result}</p>
    </div>
  );
}

export default App;
