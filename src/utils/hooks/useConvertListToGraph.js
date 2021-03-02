import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../../context/contexts'
import { coldColor, warmColor } from '../../assets/stylesheets/constants'

function useConvertListToGraph(list) {
    const { themeState } = useContext(ThemeContext)
    const [series, setSeries] = useState([])
    const [options, setOptions] = useState({
        chart: {
            id: "Weather Forecast 5 days",
            toolbar: false
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: []
        }
    })
    const [weatherOfDate, setWeatherOfDate] = useState({})

    useEffect(() => {
        const color = themeState === 'cold' ? coldColor : warmColor
        const tempSeries = [{
            name: 'Temperature',
            data: list.map((l) => l.main.temp)
        }]

        let tempCategories = list.map((l) => l.dt_txt)
        setWeatherOfDate(list[0])
        setSeries(tempSeries)
        setOptions({
            chart: {
                id: "Weather Forecast 5 days",
                toolbar: false,
                events: {
                    click: function(event, chartContext, config) {
                        const { dataPointIndex } = config
                        setWeatherOfDate(list[dataPointIndex])
                    }
                }
            },
            colors: [color],
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                categories: tempCategories
            }
        })

        return() => {

        }
    }, [list])

    return {
        series: series || [{}],
        options: options || {},
        weatherOfDate: weatherOfDate || {}
    }
}

export default useConvertListToGraph