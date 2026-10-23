import { Link } from "react-router-dom";
import "../CSS/Home.css";

const Home = () => {
    return (
        <div>

            <section className="home-section">

                <div className="home-content">

                    <h1>
                        Learn Skills. Build Your Future.
                    </h1>

                    <p>
                        Learn from quality courses and improve your
                        technical skills with our Learning Management System.
                    </p>

                    <Link
                        to="/courses"
                        className="btn btn-primary"
                    >
                        Explore Courses
                    </Link>

                </div>

            </section>

            <section className="container py-5">

                <h2 className="text-center mb-4">
                    Why Choose Our LMS?
                </h2>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="home-card">
                            <h4>Quality Courses</h4>
                            <p>
                                Learn different technical skills through
                                structured courses.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="home-card">
                            <h4>Learn Anytime</h4>
                            <p>
                                Access your courses and learning materials
                                whenever you need.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="home-card">
                            <h4>Build Your Career</h4>
                            <p>
                                Improve your knowledge and prepare yourself
                                for your career.
                            </p>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default Home;