import React, { useState, useEffect } from 'react';

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
// import { formatDate } from './HelperFunc.js'
import axios from 'axios';

const ReportDetail = (props) => {
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://www.sukishidelivery.com/api/delivery/service.php?req=rptdetail'

      try {
        const result = await axios(url);
        setData(result.data.detailData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  // if(data[0] !== undefined){
  //   console.log(data.filter(x => x.loop_id === props.loopid));
  //   if(detailData.length == 0){
  //     // console.log('not found');
  //     console.log(props.loopid);
  //   }
  // }

  return (
    <div>
      {isError ?
        <span>fetch data error: {JSON.stringify(isError)}</span> :
        null
      }

      {isError && <div>fetch data error: {JSON.stringify(isError)}</div>}
      
          <DataGrid
            dataSource={data.filter(x => x.loop_id === props.loopid)}
            allowColumnReordering={true}
            showBorders={true}
            allowColumnResizing={true}
            columnWidth={100}
            hoverStateEnabled={true}
            keyExpr="rowid"
            noDataText="Now Loading..."

          >
            <ColumnChooser
                    enabled={true}
                    mode="dragAndDrop"
              />
            <Export enabled={true}/>
            <GroupPanel visible={true} />
            <SearchPanel visible={true} height={10} />
            <Paging defaultPageSize={20} />

            <Summary>
              <TotalItem
                column="rowid"
                summaryType="count"
                displayFormat={'{0} row(s)'} />
              <TotalItem
                column="qty"
                summaryType="sum"
                valueFormat="decimal" />
              <TotalItem
                column="price"
                summaryType="sum"
                valueFormat="decimal" />
            </Summary>
            </DataGrid>
            <br/>
            <br/>
            <hr/>
    </div>
  )


}
export default ReportDetail;