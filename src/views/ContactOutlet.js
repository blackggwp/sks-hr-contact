import React, { useEffect, useState } from 'react'
import DataGrid, {
  Column,
  GroupPanel,
  Paging,
  SearchPanel,
  Export
} from 'devextreme-react/data-grid';
import * as ContactOutletAPI from '../api/ContactAPI';

const ContactOutlet = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function callAPI() {
      const res = await ContactOutletAPI.onGetOutletData();
      setData(res);
    }
    callAPI();
  }, []);

    return (
      <div>
        <DataGrid
          dataSource={data}
          allowColumnReordering={true}
          showBorders={true}
        >
          <GroupPanel visible={true} />
          <SearchPanel visible={true} />
          <Paging defaultPageSize={20} />
          <Export enabled={true}/>

          <Column dataField={'Outletcode'} dataType={'string'} />
          <Column dataField={'Outletname'} dataType={'string'} />
          <Column dataField={'OutletTel'} dataType={'string'} />
        </DataGrid>
      </div>
    );
  }

export default ContactOutlet;