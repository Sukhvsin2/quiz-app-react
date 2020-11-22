import React, {useState} from 'react'
import "./Options.css"

function Options({ options }) {

    const [answer, setAnswer] = useState('')

    const checkAnswer = (selected, answer) => {
        if (selected === parseInt(answer)) {
            setAnswer('Correct Answer!!')
        } else {
            setAnswer('Wrong Answer!!')
        }
        const correct = document.getElementById(`choice${answer}`);
        correct.style.backgroundColor = 'green';
        correct.style.color = 'white'
        const result = document.getElementById(`result${selected}`)
        if (parseInt(answer) === selected) {
            result.style.color = 'green'
        } else {
            result.style.color = 'red'
        }
        result.style.display = 'block'
    }

    return (
        <div className="options">
            {
                options.map((choice, index) => {
                    return (
                        options.length === 0 ? <div>No Options uploaded</div> : <div key={choice.id}>
                            <div className="question">{choice.question}</div>
                            <button onClick={()=>{checkAnswer(1, choice.answer)}} id="choice1" className='ques_options'>
                                {choice.choice1}
                            </button>
                            <button onClick={()=>{checkAnswer(2, choice.answer)}} id="choice2" className='ques_options'>
                                {choice.choice2}
                            </button>
                            <button onClick={()=>{checkAnswer(3, choice.answer)}} id="choice3" className='ques_options'>
                                {choice.choice3}
                            </button>
                            <button onClick={()=>{checkAnswer(4, choice.answer)}} id="choice4" className='ques_options'>
                                {choice.choice4}
                            </button> 
                            <div id={`result${index+1}`} className="resultShow">{ answer }</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Options