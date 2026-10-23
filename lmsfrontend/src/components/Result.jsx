import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";
import "../CSS/Result.css";

const Result = () => {
    const baseUrl = useContext(ApiContext);
    const [results, setResults] = useState([]);

    useEffect(() => {
        getResults();
    }, []);

    const getResults = async () => {
        try {
            const res = await axios.get(`${baseUrl}/result`);

            console.log("Results:", res.data);

            setResults(res.data.data);

        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div className="result-page">

            <h1 className="text-center">
                Our Placed Students
            </h1>

            <p className="text-center result-heading">
                Our students placed in different companies
            </p>

            <div className="result-container">

                {results.map((result) => (

                    <div
                        className="result-card"
                        key={result.id}
                    >

                        <img
                            src={result.image}
                            alt={result.studentName}
                            className="result-image"
                        />

                        <h5>
                            {result.studentName}
                        </h5>

                        <p>
                            {result.company}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Result;