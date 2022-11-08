import './App.css';
import React, {useEffect, useState} from 'react';


function App() {

  const [colour, setColour] = useState('');
  const [answers, setAnswers] = useState([]);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const getRandomColour = () => {
    let characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    const colour = new Array(6).fill('').map(() => characters[Math.floor(Math.random() * characters.length)]).join('')
    return `#${colour}`
  }

  const generateColours = () => {
    const actualColour = getRandomColour()
    setColour(actualColour)
    setAnswers([actualColour, getRandomColour(), getRandomColour()].sort(() => 0.5 - Math.random())) // Colocar el array de respuestas de forma aleatoria
  }

  useEffect(() => {
    generateColours()
  }, [])

  const handleClick = (answer) => {
    if(answer === colour){
      setIsCorrectAnswer(true)
      generateColours()
    }
    else{
      setIsCorrectAnswer(false)
    }
  }
  return (
    <div className="App">
      <h1>Guess the colour</h1>
      <div className='colour-container' style={{background: colour}}></div>
        { answers.map((answer) => (
          <button key={answer} onClick={() => handleClick(answer)}>{answer}</button>
        ))}
      
        { isCorrectAnswer? <div className='correct'>Correct Answer</div>:
        <div className='wrong'>Wrong Answer</div>
        }
    </div>
  );
}

export default App;
