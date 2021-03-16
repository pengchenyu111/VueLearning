import axios from "axios";


const instance = axios.create({
  baseURL: 'http://localhost:8090/api/recommendation/',
  timeout: 10000
})

export const queryPageMovie = (pageNum, pageSize) => {
  const url = `/movieDetail/page/${pageNum}/${pageSize}`
  return instance.get(url)
}

export default instance

