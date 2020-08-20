import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'devextreme-react/button';

import ReportDetail from './ReportDetail.js'

import DataGrid, {
  Column,
  GroupPanel,
  Paging,
  SearchPanel,
  Summary,
  GroupItem,
  TotalItem,
  Export,
  ColumnChooser
} from 'devextreme-react/data-grid';

const ReportHeader2 = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSelectedRow, setSelectedRow] = useState(false);
  const [loopid, setLoopid] = useState('');
  const [detailData, setdetailData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://www.sukishidelivery.com/api/delivery/service.php?req=rptheader'

      try {
        const result = await axios(url);
        setData(result.data.trData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

const onSelectionChanged = ({ selectedRowsData }) => {
    const loop_id = selectedRowsData[0].loop_id;
    setLoopid(loop_id);
    setSelectedRow(true);
  }

  return (
    <div>
      {isError ?
        <span>fetch data error: {JSON.stringify(isError)}</span> :
        null
      }

      {isError && <div>fetch data error: {JSON.stringify(isError)}</div>}
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
          <DataGrid
            dataSource={data}
            allowColumnReordering={true}
            allowColumnResizing={true}
            columnWidth={100}
          selection={{ mode: 'single' }}
          showBorders={true}
          hoverStateEnabled={true}
          keyExpr="rowid"
          noDataText="Now Loading..."
          height="380px"
          onSelectionChanged={onSelectionChanged}
          >
            <ColumnChooser
                    enabled={true}
                    mode="select"
              />
            <Export enabled={true}/>
            <GroupPanel visible={true} />
            <SearchPanel visible={true} height={10} />
            <Paging defaultPageSize={20} />

            {/* <Column dataField={'OUTLET_CODE'} dataType={'string'} groupIndex={0} /> */}
            {/* <Column dataField={'MAT_CODE'} dataType={'string'} /> */}
            {/* <Column dataField={'sumWaste'} dataType={'string'} /> */}

            {/* <Summary>
              <GroupItem
                column="MAT_CODE"
                summaryType="count"
                displayFormat={'{0} materials'} />
              <GroupItem
                column="sumWaste"
                summaryType="sum"
                valueFormat="decimal"
                displayFormat={'SubTotal: {0}'}
                showInGroupFooter={true} />
              <TotalItem
                column="sumWaste"
                summaryType="sum"
                valueFormat="decimal" />
            </Summary> */}
          </DataGrid>
        )}
{
isSelectedRow ? (
  <ReportDetail loopid={loopid}/>
) : null
}

    </div>
  )
}
export default ReportHeader2;