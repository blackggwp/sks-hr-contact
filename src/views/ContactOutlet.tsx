import React from "react";
import { useApiRequest } from "../api/utils";
import DataGridDevExtreme from "../components/DataGridDevExtreme";
import config from '../config';
import Loading from '../components/Loading'

export default function ContactOutlet() {
  const { data, error, isLoading } = useApiRequest(
    `${config.apiUrl}/emps/outlets`
  );

  return (
    <div style={{
      margin: '20px 0px 20px 0px',
      paddingBottom: 20
    }}>
      {isLoading && (
        <Loading />
      )}
      {error && (
        <h4>Something went wrong... Please Connect VPN or contact IT.</h4>
      )}
      {!isLoading && !error && <DataGridDevExtreme data={data} />}
    </div>
  );
}
