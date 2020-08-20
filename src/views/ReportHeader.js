import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Table, Tag } from 'antd';

const ReportHeader = (props) => {
  const [data, setData] = useState([]);
  const [dataHeader, setDataHeader] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://www.sukishidelivery.com/api/delivery/service.php?req=rptheader'

      try {
        const result = await axios(url);
        setData(result.data.trData);
        setDataHeader(result.data.trHeader);

      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

const data2 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const myCols = dataHeader.map(element => 

  ({
  title: element,
  dataIndex: element,
  key: element,
  fixed: 'left',
  width: 100

}
  )
  );

    return (
        <Table dataSource={data} columns={myCols} rowKey="rowid" scroll={{ x: "scroll", y: 300 }} />
    );
}
export default ReportHeader;
