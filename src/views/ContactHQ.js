import React, { useEffect, useState } from 'react'
import DataGrid, {
  Column,
  GroupPanel,
  Paging,
  SearchPanel,
  Export
} from 'devextreme-react/data-grid';
import * as ContactHQAPI from '../api/ContactAPI';

const ContactHq = (props) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

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
    )
    )
  }

export default ContactHq;