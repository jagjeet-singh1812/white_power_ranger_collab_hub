import React from "react";
import "./course.css";
import NavBarHome from "../../Components/NavBarHome/NavBarHome";

const Courses = () => {
  return (

    <>
    <NavBarHome></NavBarHome>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div>
        <div className="container">
          <h2 className="container-heading">Courses</h2>
          <div className="course-list">
            <div className="course">
              <img
                src="https://www.vec.ca/wp-content/uploads/2019/03/English-Language-Level-System-704x350.jpg"
                alt="English Course Image"
              />
              <h2>English Language Mastery</h2>
              <p>
                Embark on a journey to master the English language through this
                comprehensive course. Designed for learners of all levels, this
                course covers grammar, vocabulary, speaking, and listening skills.
                Enhance your communication abilities and gain confidence in using
                English in real-life situations. Join us for an engaging and
                interactive learning experience!
              </p>
            </div>

            <div className="course">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709337600&semt=sph"
                alt="Physics Course Image"
              />
              <h2>Science Explorers</h2>
              <p>
                Embark on a journey to explore the wonders of Science suitable for
                students in grades 5-10. Learn about basic principles,
                experiments, and real-world applications in an interactive and
                accessible way.
              </p>
            </div>
            <div className="course">
              <img
                src="https://img.jagranjosh.com/imported/images/E/Articles/maths2.webp"
                alt="Mathematics Course Image"
              />
              <h2>Math Adventures</h2>
              <p>
                Embark on exciting math adventures covering foundational concepts
                suitable for students in grades 5-10. Dive into the world of
                numbers, operations, and problem-solving with interactive lessons
                designed for an enjoyable learning experience.
              </p>
            </div>
            <div className="course">
              <img
                src="https://maths.olympiadsuccess.com/assets/images/maths_square/maths_topic_115.jpg"
                alt="Geometry Course Image"
              />
              <h2>Geometry Quest</h2>
              <p>
                Embark on a geometry quest tailored for students in grades 5-10.
                Explore shapes, angles, and spatial relationships through engaging
                activities designed to make geometry concepts accessible and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Courses;
