import axios from "axios"

const base_url = "https://api.github.com/users"

export default async function getAllData(usn: string) {
  const res = await axios.get(`base_url/${usn}`)
  return res
}