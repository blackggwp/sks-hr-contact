import React, { useEffect, useState } from 'react'
import DataGrid, {
  GroupPanel,
  Paging,
  SearchPanel,
  Export,
  Grouping,
  ColumnChooser,
  ColumnFixing,
  FilterRow,
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
        allowColumnResizing={true}
      >
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={false} />
        <SearchPanel visible={true} />
        <Paging defaultPageSize={20} />
        <Export enabled={true} />
        <ColumnChooser enabled={true} />
        <ColumnFixing enabled={true} />
        <FilterRow visible={true} />
      </DataGrid>
    </div>
  );

}

export default ContactOutlet;