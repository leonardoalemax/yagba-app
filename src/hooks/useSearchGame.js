import { useState, useEffect } from 'react'
import axios from 'axios'


const useSearchGame = () => {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    async function request() {
      const { data } = await axios.get(`http://172.17.236.70:4200/igdb/search?term=${searchTerm}`)
      setResult(data);
    }
    request()
  }, [searchTerm, setResult]);

  return {result, searchTerm, setSearchTerm}
}

export default useSearchGame;