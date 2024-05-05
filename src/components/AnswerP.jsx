import React from "react";

function AnswerP(prop){
    return (
        <>
            <div className="answer my-[30px] border-b border-solid border-gray-300">
                <h4>{prop.Q}</h4>
                <div className="answer-child my-[20px]">
                    <p>{prop.A}</p>
                </div>
            </div>
        </>
    )
}

export default AnswerP;