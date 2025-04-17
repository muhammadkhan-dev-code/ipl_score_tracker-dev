import axios from "axios";

const API_URL = "https://cricket-live-line1.p.rapidapi.com";

const HEADERS = {
  'x-rapidapi-key': '701af8f484msh8719e9e691083eep101904jsne71bfd5dcee0',
  'x-rapidapi-host': 'cricket-live-line1.p.rapidapi.com'  
};

export const getPointsTable = async () => {
  const options = {
    method: "GET",
    url: `${API_URL}/series/336/pointsTable`,
    headers: HEADERS
  };

  try {
    const response = await axios.request(options);
    console.log('Response data:', response.data);

    return response.data.data.A.map(team => ({
      team: team.teams,
      played: team.P,
      won: team.W,
      lost: team.L,
      points: team.Pts,
      nrr: team.NRR,
      flag: team.flag
    }));
  } catch (error) {
    console.error("There was an error fetching the data from API:", error.message);
    throw error;
  }
};
