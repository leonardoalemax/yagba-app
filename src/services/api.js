import axios from 'axios';

export default class Api {
  static async igdb(query) {
    const { data } = await axios.get(`http://172.17.236.70:4200/igdb/games?query=${query}`)
    return data
  }
}