import React, { useState } from 'react'
import NavBarHome from '../../Components/NavBarHome/NavBarHome'
import "./Quiz.css"
import { useNavigate } from 'react-router-dom'

const Quiz = () => {

    const navigate=useNavigate()

    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
    });

    const [score, setScore] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers({ ...answers, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let totalScore = 0;

        Object.keys(answers).forEach((key) => {
            if (answers[key] === correctAnswers[key]) {
                totalScore++;
            }
        });

        // setScore(totalScore);
        console.log(totalScore)
        alert(`Congratulations!! Your score is ${totalScore}`)

        navigate("/subjectiveQuiz")

    };

    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'b',
    };


    return (
        <>
            <NavBarHome></NavBarHome>
            <br></br>
            <br></br>
            <br></br>

            <div className="quiz-container">
                <center>
                    <h1>Daily Quiz</h1>
                </center>
                <form onSubmit={handleSubmit}>
                    <div className="question" style={{"marginLeft":"20px"}}>
                        <p>1. What is 2 + 2?</p>
                        <div className="options">
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="a"
                                    checked={answers.q1 === 'a'}
                                    onChange={handleChange}
                                />
                                a. 3
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="b"
                                    checked={answers.q1 === 'b'}
                                    onChange={handleChange}
                                />
                                b. 4
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q1"
                                    value="c"
                                    checked={answers.q1 === 'c'}
                                    onChange={handleChange}
                                />
                                c. 5
                            </label>
                        </div>
                    </div>
                    <div className="question" style={{"marginLeft":"20px"}}>
                        <p>2. What is the capital of France?</p>
                        <div className="options">
                            <label>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="a"
                                    checked={answers.q2 === 'a'}
                                    onChange={handleChange}
                                />
                                a. London
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="b"
                                    checked={answers.q2 === 'b'}
                                    onChange={handleChange}
                                />
                                b. Paris
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q2"
                                    value="c"
                                    checked={answers.q2 === 'c'}
                                    onChange={handleChange}
                                />
                                c. Berlin
                            </label>
                        </div>
                    </div>
                    <div className="question" style={{"marginLeft":"20px"}}>
                        <p>3. What is 2 + 2?</p>
                        <div className="options">
                            <label>
                                <input
                                    type="radio"
                                    name="q3"
                                    value="a"
                                    checked={answers.q3 === 'a'}
                                    onChange={handleChange}
                                />
                                a. 3
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q3"
                                    value="b"
                                    checked={answers.q3 === 'b'}
                                    onChange={handleChange}
                                />
                                b. 4
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q3"
                                    value="c"
                                    checked={answers.q3 === 'c'}
                                    onChange={handleChange}
                                />
                                c. 5
                            </label>
                        </div>
                    </div>
                    <div className="question" style={{"marginLeft":"20px"}}>
                        <p>4. What is the capital of France?</p>
                        <div className="options">
                            <label>
                                <input
                                    type="radio"
                                    name="q4"
                                    value="a"
                                    checked={answers.q4 === 'a'}
                                    onChange={handleChange}
                                />
                                a. London
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q4"
                                    value="b"
                                    checked={answers.q4 === 'b'}
                                    onChange={handleChange}
                                />
                                b. Paris
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q4"
                                    value="c"
                                    checked={answers.q4 === 'c'}
                                    onChange={handleChange}
                                />
                                c. Berlin
                            </label>
                        </div>
                    </div>
                    <div className="question" style={{"marginLeft":"20px"}}>
                        <p>5 What is the capital of France?</p>
                        <div className="options">
                            <label>
                                <input
                                    type="radio"
                                    name="q5"
                                    value="a"
                                    checked={answers.q5 === 'a'}
                                    onChange={handleChange}
                                />
                                a. London
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q5"
                                    value="b"
                                    checked={answers.q5 === 'b'}
                                    onChange={handleChange}
                                />
                                b. Paris
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="q5"
                                    value="c"
                                    checked={answers.q5 === 'c'}
                                    onChange={handleChange}
                                />
                                c. Berlin
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn-quiz-submit" style={{"marginLeft":"20px"}}>
                        Submit
                    </button>
                </form>
                <br></br>
            </div>



        </>
    )
}

export default Quiz