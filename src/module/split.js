export const splitWordAnimation = (text1, text2) => {
    
    const newText1 = text1.split(' ')
    const newText2 = text2.split(' ')


    return (
        <div className="split">
            <div>
            {newText1.map((word, index) => (
                <h1 key={word}
                    className={(index % 2 === 1) ? "slide-in-out" : "slide-in-out highlight"}
                    style={{
                        animationDuration: ((index + 2) * .75) + "s"
                    }}
                >{word}</h1>
            ))}
            </div>
            <div>
            {newText2.map((word, index) => (
                <h1 key={word}
                    className={(index % 2 === 1) ? "slide-in-out2" : "slide-in-out2 highlight"}
                    style={{
                        animationDuration: ((index + 2) * .75) + "s"
                    }}
                >{word}</h1>
            ))
                }
                </div>
        </div>
    )
}