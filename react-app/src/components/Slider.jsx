import '../css/components/slider.css';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({slides, title, top = false})
{
    return (
        <section className={top === false ? 'slider' : 'slider slider--black'}>
            <h2 className='slider__title'>{title}</h2>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
            >
                
                {slides.map((slide) => {
                    if(top === false) {
                        return <SwiperSlide className='slider__card' key={slide.id}><img className='slider__img' src={slide.image} alt='film' /></SwiperSlide>
                    } else {
                        return (
                            <div className='slider__wrap'>
                                <SwiperSlide><div className='slider__num'>{slide.id}</div></SwiperSlide>
                                <SwiperSlide className='slider__card' key={slide.id}><img className='slider__img' src={slide.image} alt='film' /></SwiperSlide>
                            </div>
 
                        )
                    }
                    
                })}
                
            </Swiper>
        </section>
    )
}