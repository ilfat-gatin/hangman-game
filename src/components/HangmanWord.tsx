type HangmanWordProps = {
    guessedLetters: string[],
    wordToGuess: string,
    showAll?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, showAll = false }: HangmanWordProps) {
    
    return (
        <div style={{
            display: "flex",
            gap: "0.25em",
            fontSize: "6rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace"
        }}>
            {wordToGuess.split("").map((letter, index) => 
                <span style={{borderBottom: ".1em solid black"}} key={index}>
                    <span 
                        style={{
                            visibility: guessedLetters.includes(letter) || showAll ? "visible" : "hidden",
                            color: !guessedLetters.includes(letter) && showAll ? "red" : "black"
                    }}>{letter}</span>
                </span>
            )}
        </div>
    )
}