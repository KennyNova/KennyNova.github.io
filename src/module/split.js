export const splitWord = (text) => {
    
    const newText = text.split(' ')



    return (
        newText.map((word, index) => <h1 key={word} index={index}>{word}</h1>)
    )
}