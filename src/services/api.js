import axios from 'axios';

export default class Api {
  static async igdb(query) {
    const { data } = await axios.get(`http://172.30.153.61:4200/igdb/games?query=${query}`)
    return data
  }
}