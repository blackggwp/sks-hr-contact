import React, { useEffect, useState } from "react";
import Axios from "axios";
import DataGridDevExtreme from "../components/DataGridDevExtreme";
import "../config";

export default function ContactOutlet() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function callAPI() {
      setIsLoading(true);
      const url = `${global.config.apiUrl}/emps/outlets`;
      try {
        const { data } = await Axios(url);
        setData(data[0]);
        setIsLoading(false);
      } catch (e) {
        console.error("ContactHQAPI Error: ", e);
        setError(e);
        setIsLoading(false);
      }
    }
    callAPI();
  }, []);

  return (
    <div style={{ margin: 20 }}>
      {isLoading && (
        <img src={window.location.origin + "/load.gif"} alt="loading" />
      )}
      {error && (
        <h3>Something went wrong... Please Connect VPN or contact IT.</h3>
      )}
      {!isLoading && !error && <DataGridDevExtreme data={data} />}
    </div>
  );
}
