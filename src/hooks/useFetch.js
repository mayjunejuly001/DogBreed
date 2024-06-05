import { useState, useEffect } from 'react'


const useFetch = (url) => {
  const [data, setData] = useState([]) 
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState(null) 
  const apiKey = process.env.REACT_APP_DOG_API_KEY 
  // Function to fetch data from the provided URL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'x-api-key': apiKey,
          },
        })

        // Checking error
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        // Parse the response to JSON format
        const result = await response.json()
        setData(result)
        setLoading(false) 
      } catch (err) {
        setError(err) 
        setLoading(false)
      }
    }

    fetchData() // Call fetchData function
  }, [url, apiKey])

 
  return { data, loading, error }
}

export default useFetch
