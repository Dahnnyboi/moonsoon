import React, { useContext } from 'react'
import Chart from 'react-apexcharts'
import styled from 'styled-components'
import { FiveDaysContext } from '../../../context/contexts'
import { ContentsText } from '../../../assets/stylesheets/common'
import { TABLET_SCREEN, MEDIUM_DESKTOP_SCREEN } from '../../../assets/stylesheets/constants'
import useGetFiveDaysCity from '../../../utils/hooks/useGetFiveDaysCity'
import useConvertListToGraph from '../../../utils/hooks/useConvertListToGraph'

const ChartContentsComponent = styled.div`
    width: 100%;
    margin-top: 12px;

    @media(min-width: ${TABLET_SCREEN}){
        width: 50%;
        margin-top: 0px;
    }

    @media(min-width: ${MEDIUM_DESKTOP_SCREEN}){
        width: 30%;
    }
`

function ChartContents({ city }) {
    const { fivedaysState } = useContext(FiveDaysContext)
    useGetFiveDaysCity(city)
    const {series, options} = useConvertListToGraph(fivedaysState.list)

    return (
        <ChartContentsComponent>
            <ContentsText fontSize="1.4em">Temperature within next five days</ContentsText>
            <ContentsText fontSize="0.8em">in Celcius</ContentsText>
            <Chart 
                options={options}
                series={series}
                type="line"
                width="100%"
            />
        </ChartContentsComponent>
    )
}

export default ChartContents
