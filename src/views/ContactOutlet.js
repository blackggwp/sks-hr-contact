import React from "react";
import { useApiRequest } from "../api/utils";
import DataGridDevExtreme from "../components/DataGridDevExtreme";
import "../config";
import Loading from '../components/Loding'

export default function ContactOutlet() {
  const { data, error, isLoading } = useApiRequest(
    `${global.config.apiUrl}/emps/outlets`
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
