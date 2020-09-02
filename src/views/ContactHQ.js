import React, { useEffect, useState } from 'react'
import DataGrid, {
  GroupPanel,
  Paging,
  SearchPanel,
  Export,
  Grouping
} from 'devextreme-react/data-grid';
import { CheckBox } from 'devextreme-react';
import * as ContactHQAPI from '../api/ContactAPI';

const ContactHq = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [autoExpandAll, setAutoExpandAll] = useState(true);

  const onAutoExpandAllChanged = () => {
    setAutoExpandAll(!autoExpandAll)
  }

  // const isRealtime = false

  useEffect(() => {
    // if(isRealtime) {
    async function callAPI() {
      setIsLoading(true)
      let dataPrev = []
      let action = {}
      const res = await ContactHQAPI.onGetEmpData(action = {method: 'get'})

      if( JSON.stringify(dataPrev) !== JSON.stringify(res) ) {
        setIsLoading(false)
        setData(res)
        console.log('changed!!')
      }
      dataPrev = res

      // setTimeout(function() {
      //   // console.log("Realtime"); 
      //     callAPI();
      // }, 10000)
    }
    callAPI()
    // }
        
  }, [])

  return (
    isLoading ? (<h1>loading</h1>) :
    (
      <div>
        <DataGrid
        dataSource={data}
        allowColumnReordering={true}
        showBorders={true}
        allowColumnResizing={true}
        >
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={autoExpandAll} />
        <SearchPanel visible={true} height={10} />
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
    )
    )
  }

export default ContactHq;