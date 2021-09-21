import axios from "axios";
import { useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import Weathercard from "./Components/Weathercard";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const apiKey = "93c372db1c508df70e5f97dc1c41c823";
  const handleChange = (e) => setCity(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setData(res.data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        city={city}
      />
      <span>{data ? <Weathercard data={data} city={city} /> : null}</span>
    </div>
  );
}

export default App;
