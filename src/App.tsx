import React, { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import './App.css';
import { HangmanDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/Keyboard';

function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord())

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const inCorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = inCorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[а-я]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (key !== "Enter") return
      
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [])

  return (
    <div className='container'>
      <p className='text'>
        {isWinner && "Ты угадал! Обнови страницу или нажми Enter для новой игры"}
        {isLoser && "Поражение! Обнови страницу или нажми Enter для новой игры"}
      </p>
      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord 
        guessedLetters={guessedLetters} 
        wordToGuess={wordToGuess}
        showAll={isLoser} />
      <div style={{alignSelf: "stretch"}}>
        <Keyboard 
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={inCorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>      
    </div>
  );
}

export default App;
