import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import DataGridDevExtreme from '../components/DataGridDevExtreme'
import '../config'

export default function ContactOutlet() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function callAPI() {
      setIsLoading(true)
      const url = `${global.config.apiUrl}/emps/outlets`
      try {
        const { data } = await Axios(url);
        setData(data[0])
        setIsLoading(false)
      }
      catch (e) {
        console.error("ContactHQAPI Error: ", e);
        setError(e)
      }
    }
    callAPI()
  }, [])

  return (
    <div>
      {error && <div>Something went wrong...</div>}
      {isLoading ? (<h1>loading...</h1>) :
        (
          <DataGridDevExtreme data={data} />
        )}
    </div>
  )
}
