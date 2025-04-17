import { useState, useEffect } from "react";
import { getPointsTable } from "../services/api";
import Loader from "./ui/loader";

export default function TeamStanding() {
  const [pointsTable, setPointsTable] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPointsTable = async () => {
      try {
        const data = await getPointsTable();
        setPointsTable(data);
      } catch (error) {
        console.error("Error fetching points table:", error);
        setError("Unable to load the data...");
      } finally {
        setLoading(false);
      }
    };
     fetchPointsTable();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader size="lg" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-6 text-center font-">Points Table</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full mx-auto  rounded-full ">
          <thead>
            <tr className="bg-gray-400">
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Team</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">P</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">W</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">L</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">Points</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">NRR</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pointsTable.map((item, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.flag}
                      alt={`${item.team} flag`}
                      className="w-8 h-8 rounded-full object-contain"
                    />
                    <span>{item.team}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center text-gray-600">{item.played}</td>
                <td className="px-4 py-3 text-center text-gray-600">{item.won}</td>
                <td className="px-4 py-3 text-center text-gray-600">{item.lost}</td>
                <td className="px-4 py-3 text-center text-gray-600">{item.points}</td>
                <td className="px-4 py-3 text-center text-gray-600">{item.nrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}