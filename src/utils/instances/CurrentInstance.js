import axios from 'axios'

const CurrentInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})

export default CurrentInstance