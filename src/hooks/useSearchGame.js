import { useState, useEffect } from 'react'

import Api from '../services/api'

const useSearchGame = () => {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Tomb Raider');
  useEffect(() => {
    async function request() {
      if (searchTerm === '') return

      const fields = [
        "name",
        "cover.url",
        "release_dates.*",
        "platforms.name",
      ]
      
      setResult(await Api.igdb(`fields ${fields.join(", ")}; search "${searchTerm}";`));
    }
    request()
  }, [searchTerm, setResult]);

  return {result, searchTerm, setSearchTerm}
}

export default useSearchGame;