import './../../helpers/carouselImageList'
import { images } from './../../helpers/carouselImageList'
import { useEffect, useRef, useState } from 'react';
import ExploreTours from './../../img/Arrow - Down.svg'

function ImageCarousel (){

    const [currentImage, setCurrentImage] = useState(0)

    const carouselBtns = useRef([])

    const handleChange = (index) => {

      setCurrentImage(index)

      
      carouselBtns.current.forEach((btn) => {
        if(btn){
          btn.classList.remove('active')
        }
      })

      if(carouselBtns.current[index]){
        carouselBtns.current[index].classList.add('active')
      }

    }

    return (
        <div className='hero carousel-el-1' style={{
            backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${images[currentImage]})
            `,
            backgroundColor: 'lightgray',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>

          <div className='hero__container container'>
            <h1 className='hero-title'>The space is waiting for <span className='hero-title-span'>you</span></h1>
            {/* <Carousel  /> */}
            <ul className="carousel-indicators">
              {images.map((image, index) => (
                  <li onClick={() => handleChange(index)} key={index} className='carousel-indicators-el'>
                    <button ref={el => carouselBtns.current[index] = el} className='carousel-btn dot'></button>
                  </li>
              ))}
            </ul>
            <a href='/' className='hero-explore-tours'>
                Explore tours
                <img alt='arrowdown' src={ExploreTours}></img>
            </a>
          </div>

        </div>
    )
}


 
export default ImageCarousel;
