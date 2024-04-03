import React,{useEffect} from 'react'
import Ide from '../assets/projects/ide.png'
import Altitude from '../assets/projects/Altitude Master.png'
import Amazon from '../assets/projects/Amazon.png'
import Compress from '../assets/projects/File compression.png'
import News from '../assets/projects/News App.png'
import Sales from '../assets/projects/Sales Insights.png'
// // import Sandesh from '../assets/projects/sandeshh.png'
// import Gist from '../assets/projects//gist.png'
// import Chatbot from '../assets/projects/chatbot.png'
// // import Ide from '../assets/projects/ide.png'
// import ShopEasy from '../assets/projects/shopeasy.png'
// import Upscale from '../assets/projects/upscale.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Ide,
      desc: "CodifyHub is a Code Editor made using ReactJS + CSS + Context API Service + CodeMirror Library",
      demo: "https://kailash51.github.io/CodifyHub/",
      code: "https://github.com/Kailash51/CodifyHub"
    },
    {
      id: 2,
      src: Altitude,
      desc: "This is a Height Measuring Tools website is made using HTML + CSS + JavaScript....",
      demo: "https://kailash51.github.io/Altitude-Master/",
      code: "https://github.com/Kailash51/Altitude-Master"
    },
    {
      id: 3,
      src: Amazon,
      desc: "This is a E-commerce Website Made using HTML + CSS...",
      demo: "https://kailash51.github.io/My-Amazon-clone/",
      code: "https://github.com/Kailash51/Amazon-clone"
    },
    {
      id: 4,
      src: Compress,
      desc: "File Compression is about compressing and decompressing files using a technique called Huffman coding...",
      demo: "https://github.com/Kailash51/AlgoZip",
      code: "https://github.com/Kailash51/AlgoZip"
    },
    {
      id: 5,
      src: News,
      desc: "It is a News application which shows Real Time News of various cities across the globe made using News API...",
      demo: "https://kailash51.github.io/Real-Time-News-App/",
      code: "https://github.com/Kailash51/Real-Time-News-App"
    },
    {
      id: 6,
      src: Sales,
      desc: "Sales Insights is a Attractive Dashboard Made Using Power BI + SQL...",
      demo: "https://github.com/Kailash51/Sales-Insights",
      code: "https://github.com/Kailash51/Sales-Insightsr"
    },
  ]


  return (
    <div name="projects" className='py-10 h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='py-10 max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-0'>
          <h2 className='text-4xl font-bold inline border-b-2 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects