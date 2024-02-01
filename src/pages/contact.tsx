import Navbar from '../component/navbar'

export default function Contact() {
  return (
    <>
      <div className='h-screen flex justify-center items-center flex-col text-7xl xl:text-5xl md:text-4xl font-medium p-[20px] text-center'>
        <p>Let&apos;s work together.</p>
        <p className='opacity-50 hover:opacity-25'>Get in touch.</p>
      </div>
      <div className='w-full p-[40px] absolute bottom-0 flex md:flex-col md:gap-[10px] md:pb-[80px]'>
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
    </>
  )
}
