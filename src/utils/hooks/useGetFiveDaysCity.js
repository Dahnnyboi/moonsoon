import { useContext, useEffect } from 'react'
import { FiveDaysContext } from '../../context/contexts'
import {
    loadingFiveDaysWeather,
    successFiveDaysWeather,
    failureFiveDaysWeather
} from '../../context/actions'
import keys from '../keys'
import FiveDaysInstance from '../instances/FiveDaysInstance'
import moment from 'moment'

function useGetFiveDaysCity(city){
    const { fivedaysDispatch } = useContext(FiveDaysContext)

    useEffect(() => {
        async function getFiveDaysWeather(){
            try {
                fivedaysDispatch(loadingFiveDaysWeather())
                const response = await FiveDaysInstance.get(`?q=${city}&appid=${keys.apiKeys}&units=metric`)
                const data = await response.data
                
                let list = []
                for(let i = 0; i < data.list.length; i+=8){
                    list.push(data.list[i])
                }
                list = list.map((l) => {
                    const date = moment(l.dt_txt)
                    const formattedDate = date.format('MM/DD/yy')
                    l.dt_txt = formattedDate

                    return l
                })

                fivedaysDispatch(successFiveDaysWeather(data.city, list))
            } catch(err) {
                console.log(err)
                fivedaysDispatch(failureFiveDaysWeather(err))
            }
        }

        getFiveDaysWeather()
        return () => {

        }
    }, [city])
}

export default useGetFiveDaysCity