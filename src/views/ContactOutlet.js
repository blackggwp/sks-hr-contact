import React, { useEffect, useState } from 'react'
import DataGrid, {
  GroupPanel,
  Paging,
  SearchPanel,
  Export,
  Grouping
} from 'devextreme-react/data-grid';
import { CheckBox } from 'devextreme-react';
import * as ContactOutletAPI from '../api/ContactAPI';

const ContactOutlet = (props) => {
  const [data, setData] = useState([]);
  const [autoExpandAll, setAutoExpandAll] = useState(true);

  const onAutoExpandAllChanged = () => {
    setAutoExpandAll(!autoExpandAll)
  }

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
          <Grouping autoExpandAll={autoExpandAll} />
          <SearchPanel visible={true} />
          <Paging defaultPageSize={20} />
          <Export enabled={true}/>
        </DataGrid>

        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <CheckBox text="Expand All Groups"
              value={autoExpandAll}
              onValueChanged={onAutoExpandAllChanged} 
              />
          </div>
        </div>
      </div>
    );
    
  }

export default ContactOutlet;