import React from "react";
import { useApiRequest } from "./api/utils";
import DataGridDevExtreme from "./components/DataGridDevExtreme";
import Loading from "./components/Loding";

export default function Home() {
  const { data, error, isLoading } = useApiRequest(
    `${global.config.apiUrl}/emps`
  );

  return (
    <div style={{ margin: 20 }}>
      {isLoading && (
        <Loading />
      )}
      {error && (
        <h3>Something went wrong... Please Connect VPN or contact IT.</h3>
      )}
      {!isLoading && !error && <DataGridDevExtreme data={data} />}
    </div>
  );
}
