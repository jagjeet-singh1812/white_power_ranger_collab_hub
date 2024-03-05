import React, { useState } from 'react'
import "./Quiz.css"
import NavBarHome from '../../Components/NavBarHome/NavBarHome';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const SubjectiveQuiz = () => {

    const navigate=useNavigate()

    const [answer, setAnswer] = useState('');

    const handleChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            og: 'a road vehicle with an engine, usually four wheels, and seating for between one and five people',
            userans: answer
          };

        axios.post('https://036w8f25-3001.inc1.devtunnels.ms/compare', postData)
            .then(response => {
                // console.log('Response:', response.data);
                alert(`Accuracy is ${response.data.text}`)
                navigate("/home")
            })
            .catch(error => {
                console.error('Error:', error);
            });
        setAnswer('');
    };

    return (
        <>

            <NavBarHome></NavBarHome>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <center>
                    <h1>Subjective Question</h1>
                </center>
                <form onSubmit={handleSubmit}>
                    <div className="question" style={{ marginLeft: 20 }}>
                        <p>Give the defination of Car?</p>
                    </div>
                    <img src={"data:image/png;base64,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"}></img>
                    <div className="answer" style={{ marginLeft: 20 }}>
                        <textarea
                            value={answer}
                            onChange={handleChange}
                            placeholder="Type your answer here..."
                            rows="10"
                            cols="30"
                            style={{ padding: "10px", border: "1px solid gray", marginRight: "30px" }}
                        />
                    </div>
                    <button type="submit" className="btn-quiz-submit" style={{ "marginLeft": "20px" }} >
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}

export default SubjectiveQuiz