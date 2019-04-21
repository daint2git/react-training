import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

// function SearchResult() {
//   const [data, setData] = useState({ hits: [] })
//   const [query, setQuery] = useState('react')

//   useEffect(() => {
//     async function fetchData() {
//       const res = await axios('https://hn.algolia.com/api/v1/search?query=' + query)
//       setData(res.data)
//     }
//     fetchData()
//     return () => {
//       console.log('remove')
//     }
//   }, [query])

//   return (
//     <>
//       <input value={query} onChange={e => setQuery(e.target.value)} />
//       <ul>
//         {data.hits.map(item => (
//           <li key={item.objectID}>
//             <a href={item.url}>{item.title}</a>
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

const baseUrl = 'https://hn.algolia.com/api/v1/search?query='

// const useDataApi = (initialUrl, initialData) => {
//   const [data, setData] = useState(initialData)
//   const [url, setUrl] = useState(initialUrl)
//   const [isLoading, setIsLoading] = useState(false)
//   const [isError, setIsError] = useState(false)

//   useEffect(() => {
//     async function fetchData() {
//       setIsError(false)
//       setIsLoading(true)
//       try {
//         const result = await axios(url)

//         setData(result.data)
//       } catch (error) {
//         setIsError(true)
//       }
//       setIsLoading(false)
//     }
//     fetchData()
//     return () => {
//       console.log('remove')
//     }
//   }, [url])

//   const doFetch = url => {
//     setUrl(url)
//   }

//   return { data, isLoading, isError, doFetch }
// }

// function SearchResult() {
//   console.log('render')
//   const [query, setQuery] = useState('react')

//   const { data, isLoading, isError, doFetch } = useDataApi(
//     'http://hn.algolia.com/api/v1/search?query=react',
//     { hits: [] },
//   )

//   return (
//     <>
//       <input value={query} onChange={e => setQuery(e.target.value)} />
//       <button type="button" onClick={() => doFetch(`${baseUrl}${query}`)}>
//         search
//       </button>
//       {isError && <div>Something went wrong ...</div>}
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <ul>
//           {data.hits.map(item => (
//             <li key={item.objectID}>
//               <a href={item.url}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   )
// }

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error()
  }
}

const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl)
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  })

  useEffect(() => {
    let didCancel = false

    async function fetchData() {
      dispatch({ type: 'FETCH_INIT' })

      try {
        const result = await axios(url)
        console.log('render')
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' })
        }
      }
    }
    fetchData()
    return () => {
      didCancel = true
    }
  }, [url])

  const doFetch = url => {
    setUrl(url)
  }

  return { ...state, doFetch }
}

function SearchResult() {
  // console.log('render')
  const [query, setQuery] = useState('react')

  const { data, isLoading, isError, doFetch } = useDataApi(
    'http://hn.algolia.com/api/v1/search?query=react',
    { hits: [] },
  )

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <button type="button" onClick={() => doFetch(`${baseUrl}${query}`)}>
        search
      </button>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default SearchResult
