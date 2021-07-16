export const splitWord = (text) => {
    
    const newText = text.split(' ')

    return (
        newText.map((word, index) => (
            <h1 key={word}
                className={(index % 2 == 1) ? "tes" : "tes highlight"}
                style={{
                    animationDuration: ((index + 2) * .75) + "s"
                }}
            >{word}</h1>
        ))
    )
}