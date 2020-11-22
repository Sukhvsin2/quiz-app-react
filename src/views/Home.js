import React, {useState, useEffect} from 'react'
import { Dropdown } from "react-bootstrap"
import Options from "./Options"
import "./Home.css"
import axios from "axios"

function Home() {

    const [selected, setSelected] = useState('Select Quiz')
    const [questions, setQuestion] = useState([]);
    const [options, setOptions] = useState([]);

    const BASE = 'http://localhost:8000'

    useEffect(() => {
        axios.get(BASE + '/qv1/quiz/').then(res => {
            const q = res.data;
            setQuestion(q)
        }).catch(e => {
            console.log('Nahh ', e);
        })
    }, [])

    const quizSelected = (bundle) => {
        const arr = bundle.split(' ')
        setSelected(`${arr[1]} ${arr[2]}`);
        axios.get(BASE + `/qv1/questions/${arr[0]}`).then(res => {
            setOptions(res.data)
        }).catch(e => {
            console.log(e);
        })
    }

    return (
        <div className="home">
            <Dropdown className="selectQuiz" onSelect={event => quizSelected(event)}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selected}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        questions.map(ques => {
                            return (
                                <Dropdown.Item eventKey={ques.id + ' ' + ques.name} key={ques.id} >{ques.name}</Dropdown.Item>
                            )
                        })
                    }
                </Dropdown.Menu>
            </Dropdown>
            <Options options={options} />
        </div>
    )
}

export default Home
