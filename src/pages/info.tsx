import React, { useState } from 'react'
import axios from 'axios'
import { MenuSelect } from 'react-instantsearch-dom'

const AlgoliaSearch = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleInputChange = (event: any) => {
    setQuery(event.target.value)
  }
  const appId = 'BWSZCNGIF8'
  const apiKey = 'a4212f0ee1185799ec70bbab52be0ac6'
  const indexName = 'meetmymentor'
  const fetchData = async () => {
    const q = query + ' hindi'
    try {
      const response = await axios.post(
        `https://${appId}-dsn.algolia.net/1/indexes/${indexName}/query`,
        {
          query: q
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Algolia-API-Key': apiKey,
            'X-Algolia-Application-Id': appId
          }
        }
      )
      setResults(response.data.hits)
    } catch (error) {
      console.error('Error fetching data from Algolia:', error)
    }
  }
  return (
    <div>
      <MenuSelect />
      <h1>Algolia Search</h1>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={fetchData}>Search</button>
      <ul>
        {results.map((result: any) => (
          <li key={result.objectID}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlgoliaSearch
