import Navbar from '../component/navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface CatImage {
  id: string
  url: string
  width: number
  height: number
}

export default function Home() {
  const [catImages, setCatImages] = useState<CatImage[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get<CatImage[]>(
        'https://api.thecatapi.com/v1/images/search?limit=10',
      )
      .then((response) => {
        setCatImages(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col h-[70vh] gap-[40px] items-center justify-center p-[40px] xl:h-[50vh] md:p-[20px] mt-[108px] md:mt-[88px]'>
        <p className='text-7xl font-medium w-[700px] text-center xl:text-5xl xl:w-[600px] md:text-4xl md:w-full'>
          A brand and product designer working with clients globally
        </p>
        <div className='flex gap-[10px] justify-center items-center md:hidden'>
          <p>Expertise</p>
          <p className='py-[8px] px-[12px] rounded-full bg-custom-bg'>
            Branding
          </p>
          <p className='py-[8px] px-[12px] rounded-full bg-custom-bg'>
            Product
          </p>
          <p className='py-[8px] px-[12px] rounded-full bg-custom-bg'>
            Design Systems
          </p>
        </div>
      </div>
      {catImages && (
        <div className='flex flex-col max-w-[1400px]  justify-center'>
          {catImages.map(
            (cat, index) =>
              index % 2 === 0 && (
                <div
                  key={cat.id}
                  className='flex px-[40px] pt-[40px] gap-[20px] h-min w-full overflow-hidden md:px-[20px] md:pt-[20px] md:flex-col'
                >
                  <div key={cat.id} className='flex-1'>
                    <img
                      src={cat.url}
                      className='w-full rounded-[10px] object-center object-cover'
                      // style={{ height: `${Math.min(cat.height, catImages[index + 1].height)}px` }}
                    ></img>
                  </div>
                  <div className='flex-1'>
                    <img
                      src={catImages[index + 1].url}
                      className='w-full rounded-[10px] object-center object-cover'
                      // style={{ height: `${Math.min(cat.height, catImages[index + 1].height)}px` }}
                    ></img>
                  </div>
                </div>
              ),
          )}
        </div>
      )}
      <div className='flex  max-w-[1400px] w-full p-[40px] md:p-[20px]'>
        <div className='h-[409.5px] w-full flex flex-col text-[38px] md:text-3xl items-center justify-center font-medium'>
          <p>Let&apos;s work together.</p>
          <p className='opacity-50 hover:opacity-25'>Get in touch.</p>
        </div>
      </div>
      <div className='w-full p-[40px] flex md:flex-col md:gap-[10px] md:pb-[80px]'>
        <div className='flex gap-[10px] items-center md:justify-center md:flex-col md:gap-[12px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 800 800'
            width='800'
            height='800'
            preserveAspectRatio='xMidYMid slice'
            className='w-[30px] h-[30px] '
          >
            <defs>
              <clipPath id='__lottie_element_67'>
                <rect width='800' height='800' x='0' y='0'></rect>
              </clipPath>
            </defs>
            <g clipPath='url(#__lottie_element_67)'>
              <g
                transform='matrix(-0.21062445640563965,0.9775670766830444,-0.9775670766830444,-0.21062445640563965,400,400)'
                opacity='1'
                className='block'
              >
                <path
                  strokeLinecap='butt'
                  strokeLinejoin='miter'
                  fillOpacity='0'
                  strokeMiterlimit='4'
                  stroke='rgb(0,0,0)'
                  strokeOpacity='1'
                  strokeWidth='34.13284905611447'
                  d=' M-243.26100158691406,-243.22900390625 C-243.26100158691406,-243.22900390625 243.26100158691406,243.22900390625 243.26100158691406,243.22900390625 M-243.22999572753906,243.25999450683594 C-243.22999572753906,243.25999450683594 243.22999572753906,-243.26100158691406 243.22999572753906,-243.26100158691406 M-344.0010070800781,0.02199999988079071 C-344.0010070800781,0.02199999988079071 344.0010070800781,-0.02199999988079071 344.0010070800781,-0.02199999988079071 M-0.02199999988079071,-344 C-0.02199999988079071,-344 0.02199999988079071,344 0.02199999988079071,344'
                ></path>
              </g>
            </g>
          </svg>
          <p>© Oli Harris 2023</p>
        </div>
        <div className='flex gap-[15px] ml-auto md:ml-0 md:justify-center items-center'>
          <p>Twitter</p>
          <p>Linkedin</p>
          <p>Mail</p>
        </div>
      </div>
    </div>
  )
}
