import React, { useState } from 'react'
import "./Quiz.css"
import NavBarHome from '../../Components/NavBarHome/NavBarHome';

const SubjectiveQuiz = () => {

    const [answer, setAnswer] = useState('');

    const handleChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted answer:', answer);
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
                    <div className="question" style={{marginLeft:20}}>
                        <p>Describe about your family ?</p>
                    </div>
                    <div className="answer" style={{marginLeft:20}}>
                        <textarea
                            value={answer}
                            onChange={handleChange}
                            placeholder="Type your answer here..."
                            rows="10"
                            cols="38"
                            style={{padding:"10px",border:"1px solid gray",marginRight:"30px"}}
                        />
                    </div>
                    <button type="submit" className="btn-quiz-submit" style={{"marginLeft":"20px"}}>
                        Submit
                    </button>
                </form>
            </div>

        </>
    )
}

export default SubjectiveQuiz