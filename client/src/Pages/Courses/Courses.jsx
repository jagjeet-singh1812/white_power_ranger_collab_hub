import React from "react";
import "./course.css";

const Courses = () => {
  return (
    <div>
      <div className="container">
        <h2 className="container-heading">Foundational Learning Programs</h2>
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
              src="https://thecochincollege.edu.in//assets/uploads/department/Physics_Aided/Physics-TCCAD2022ABTkP8Wr.jpg"
              alt="Physics Course Image"
            />
            <h2>Physics Explorers</h2>
            <p>
              Embark on a journey to explore the wonders of physics suitable for
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
          <div className="course">
            <img
              src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/09/what-is-algebra.jpg"
              alt="Algebra Course Image"
            />
            <h2>Algebra Adventures</h2>
            <p>
              Embark on algebra adventures to learn foundational algebraic
              concepts suitable for students in grades 5-10. Dive into
              equations, variables, and expressions in an interactive and
              supportive learning environment.
            </p>
          </div>
          <div className="course">
            <img
              src="https://cdn1.byjus.com/wp-content/uploads/2023/05/Force-And-Motion-1.png"
              alt="Force and Motion Course Image"
            />
            <h2>Force and Motion Mastery</h2>
            <p>
              Master the principles of force and motion designed for students in
              grades 5-10. Explore the fundamentals of physics through
              interactive experiments and engaging lessons that cater to diverse
              learning needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
