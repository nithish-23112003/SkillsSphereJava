import "../CSS/About.css";

const About = () => {
    return (
        <div className="container about-page">

            <div className="about-header">

                <h1>About Our LMS</h1>

                <p>
                    A simple platform to learn, improve skills and
                    build your career.
                </p>

            </div>

            <div className="about-section">

                <h2>What is LMS?</h2>

                <p>
                    Learning Management System is an online platform where
                    students can explore courses, enroll in courses and
                    access learning materials.
                </p>

            </div>

            <div className="row g-4">

                <div className="col-md-6">
                    <div className="about-card">
                        <h4>Learn New Skills</h4>
                        <p>
                            Students can learn programming and other
                            technical skills through available courses.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="about-card">
                        <h4>Easy Learning</h4>
                        <p>
                            Courses and learning materials are available
                            in one place.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="about-card">
                        <h4>Course Content</h4>
                        <p>
                            Students can access course videos and learning
                            content after enrolling.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="about-card">
                        <h4>Career Growth</h4>
                        <p>
                            The platform helps students improve their
                            knowledge and prepare for career opportunities.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;