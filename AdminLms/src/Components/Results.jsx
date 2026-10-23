import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiContext } from "../Context/ApiContext";

const Results = () => {
    const baseUrl = useContext(ApiContext);
    const [results, setResults] = useState([]);

    useEffect(() => {
        getResults();
    }, []);

    const getResults = async () => {
        try {
            const res = await axios.get(`${baseUrl}/result`);
            setResults(res.data.data);
        } catch (e) {
            console.log(e.response?.data);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Results</h1>

                <div className="bg-white px-6 py-3 rounded-lg shadow">
                    <p className="text-gray-500 text-sm">Total Results</p>
                    <p className="text-2xl font-bold text-blue-600">{results.length}</p>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="text-left px-6 py-4">#</th>
                            <th className="text-left px-6 py-4">Student Name</th>
                            <th className="text-left px-6 py-4">Company</th>
                            <th className="text-left px-6 py-4">Result</th>
                        </tr>
                    </thead>

                    <tbody>
                        {results.map((result, index) => (
                            <tr key={result.id} className="border-t">
                                <td className="px-6 py-4">{index + 1}</td>

                                <td className="px-6 py-4 font-medium">
                                    {result.studentName}
                                </td>

                                <td className="px-6 py-4">
                                    {result.company}
                                </td>

                                <td className="px-6 py-4">
                                    <img
                                        src={result.image}
                                        alt={result.studentName}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {results.length === 0 && (
                    <p className="text-center py-8 text-gray-500">
                        No results found
                    </p>
                )}
            </div>
        </div>
    );
};

export default Results;