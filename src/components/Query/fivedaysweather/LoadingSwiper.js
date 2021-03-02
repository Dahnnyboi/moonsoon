import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LoadingContainer, LoadingComponents, LoadingWeather, LoadingWeatherImage } from '../../../assets/stylesheets/Loadings'
import { SingleDayWeatherContainer, SwiperContainer } from '../../../assets/stylesheets/common'
import 'swiper/swiper-bundle.min.css'

function LoadingSwiper({ breakpoint }) {
    const loadingArr = [1, 2, 3, 4, 5]

    return (
        <SwiperContainer
            breakpoints={breakpoint}
        >
            {
                loadingArr.map((l) => {
                    return (
                        <SwiperSlide key={l}>
                            <SingleDayWeatherContainer>
                                <LoadingContainer>
                                    <LoadingComponents height='12px' width='40%' />
                                    <LoadingComponents height="36px" width='50%' />
                                    <LoadingWeather>
                                        <LoadingWeatherImage height="42px" width="42px" />
                                        <LoadingComponents height="42px" width="65%"/>
                                    </LoadingWeather>
                                    <LoadingComponents height="16px" width='75%' />
                                    <LoadingComponents height="16px" width='50%' />
                                    <LoadingComponents height="16px" width='75%' />
                                    <LoadingComponents height="16px" width='50%' />
                                </LoadingContainer>
                            </SingleDayWeatherContainer>
                        </SwiperSlide>
                    )
                    })
            }
        </SwiperContainer>
    )
}

export default LoadingSwiper
