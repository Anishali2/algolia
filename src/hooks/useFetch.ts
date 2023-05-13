import { useState, useCallback } from 'react'
import axios from 'axios'
import { useSelected } from '@/zustand'

const appId = 'BWSZCNGIF8'
const apiKey = 'a4212f0ee1185799ec70bbab52be0ac6'
const indexName = 'meetmymentor'

const useFetch = () => {
  const [results, setResults] = useState([])
  const { checkedBoxes } = useSelected()
  const result = checkedBoxes.map((obj) => obj.name).join(' ')
  const fetchData = useCallback(async (query: any) => {
    const q = query + result
    console.log('quert', q)
    const rainformentList = ['Non-Binary']
    try {
      const response = await axios.post(
        `https://${appId}-dsn.algolia.net/1/indexes/${indexName}/query`,
        {
          query: query,
          filters: `documentdata.personalinfo.gender:${'Non-Binary'}`
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Algolia-API-Key': apiKey,
            'X-Algolia-Application-Id': appId
          }
        }
      )
      console.log('response', response)
      setResults(response.data.hits)
    } catch (error) {
      console.error('Error fetching data from Algolia:', error)
    }
  }, [])

  return { results, fetchData }
}

export default useFetch
