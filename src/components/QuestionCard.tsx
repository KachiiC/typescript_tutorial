import React from 'react'


type MyQuestions = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<MyQuestions> = ({
    question, answers, callback,
    userAnswer, questionNr,totalQuestions
}) => (
        <div>
            <p className="number">
                Question: {questionNr}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map(answer => (
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                ))}
            </div>
        </div>

)

export default QuestionCard