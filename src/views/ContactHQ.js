import React, { useEffect, useState } from 'react'
import DataGrid, {
  Column,
  GroupPanel,
  Paging,
  SearchPanel,
  Editing,
  Export
} from 'devextreme-react/data-grid';
import * as ContactHQAPI from '../api/ContactAPI';

const ContactHq = (props) => {

  const [data, setData] = useState([]);

  const isRealtime = true;
  let dataPrev = [];
  let action = {};

  useEffect(() => {
    if(isRealtime) {
    async function callAPI() {
      const res = await ContactHQAPI.onGetEmpData(action = {method: 'get'});

      if( JSON.stringify(dataPrev) !== JSON.stringify(res) ) {
        setData(res);
        console.log('changed!!');
      }
      dataPrev = res;

      // setTimeout(function() {
      //   // console.log("Realtime"); 
      //     callAPI();
      // }, 10000)
    }
    callAPI();
    }
        
  }, []);

  return (
      <div>
        <DataGrid
        dataSource={data}
        allowColumnReordering={true}
        showBorders={true}
        allowColumnResizing={true}
        >
        <GroupPanel visible={true} />
        <SearchPanel visible={true} height={10} />
        <Paging defaultPageSize={20} />
        <Export enabled={true}/>

          <Column dataField={'name'} dataType={'string'} />
          <Column dataField={'department'} dataType={'string'} groupIndex={0} />
          <Column dataField={'nickname'} dataType={'string'} />
          <Column dataField={'tel'} dataType={'string'} />
          <Column dataField={'phone'} dataType={'string'} />
        </DataGrid>
      </div>
    );
  }

export default ContactHq;