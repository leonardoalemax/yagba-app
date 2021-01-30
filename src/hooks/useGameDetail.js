import { useState, useEffect } from 'react'

import Api from '../services/api'


const useGameDetail = () => {
  const [detail, setDetail] = useState(undefined);
  const [id, setId] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    setDetailLoading(true);
    async function request() {
      
      const fields = [
        "name",
        "cover.*",
        "alternative_names.*",
        "game_engines.name",
        "screenshots.*",
        "franchises.name",
        "release_dates.human",
        "platforms.name",
        "platforms.platform_family.name",
        "release_dates.human",
        "game_modes.name",
        "genres.name",
        "slug",
        "standalone_expansions.name",
        "storyline",
        "involved_companies.*",
        "involved_companies.company.*",
        "summary",
        "themes.*",
        "collection.*",
        "franchises.name",
        "parent_game.name"
      ]

      setDetail((await Api.igdb(`fields ${fields.join(", ")}; where id = ${id};`))[0]);
      setDetailLoading(false);
    }
    request()
  }, [id, setDetail]);

  return {detail, id, setId,  detailLoading}
}

export default useGameDetail;