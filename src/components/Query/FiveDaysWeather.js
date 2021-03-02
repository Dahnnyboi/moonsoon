import React, { useContext } from 'react'
import styled from 'styled-components'
import { ContentsText, SwiperContainer } from '../../assets/stylesheets/common'

import { SwiperSlide } from 'swiper/react'
import { FiveDaysContext, CurrentContext } from '../../context/contexts'
import SingleDayWeather from './fivedaysweather/SingleDayWeather'
import LoadingSwiper from './fivedaysweather/LoadingSwiper'
import 'swiper/swiper-bundle.min.css'

const FiveDaysWeatherContainer = styled.div`
    width: 100%;
    padding: 12px;
`

function FiveDaysWeather() {
    const { fivedaysState } = useContext(FiveDaysContext)
    const { currentState } = useContext(CurrentContext)

    const breakPoint = {
        200: {
            slidesPerView: 1,
            spaceBetween: 6,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        1020: {
            slidesPerView: 4,
            spaceBetween: 12,
        },
        1366: {
            slidesPerView: 5,
            spaceBetween: 16
        }
    }

    return (
        <FiveDaysWeatherContainer>
            <ContentsText fontWeight="bold">Weather on {currentState.data.name} at the next five days</ContentsText>
            {
                fivedaysState.loading ? 
                    <LoadingSwiper breakpoint={breakPoint} />
                    :
                    <SwiperContainer
                        breakpoints={breakPoint}
                    >
                        {
                            fivedaysState.list.map((l, idx) => {
                                return (
                                    <SwiperSlide key={idx}>
                                        <SingleDayWeather data={l} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </SwiperContainer>
            }
            
        </FiveDaysWeatherContainer>
    )
}

export default FiveDaysWeather
