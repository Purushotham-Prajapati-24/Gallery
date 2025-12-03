import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import {ChevronRight,ChevronLeft} from 'lucide-react'
import Navbar from './components/navbar'

const App = () => {
  const [data, setData] = useState([])
  const [index, setindex] = useState(1)

  useEffect(() => {
    Clicked()
      
  },[data])
    


  async function  Clicked(){
    
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`)
    setData(response.data)
    console.log(data)

    
    
  }
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar ind={index} />
      <div className='flex gap-4 flex-wrap items-center justify-center px-4 py-6'>
        {data.map((elem,idx)=>{
          return (
            <a  target='_blank' href={elem.url}>
            <div className='h-50 w-80 mb-2 '>
              <img className='h-full w-full rounded-xl' src={elem.download_url} alt="" />
            </div>
            </a>
          )
        })}

      </div>
      <div className="flex gap-10 justify-around fixed left-1/2 -translate-x-1/2">
        <button 
        onClick={()=>{
          if(index>1){
          setindex(index-1)
          }
        }}
        className={` bg-amber-500 text-black py-3 px-4 gap-2 rounded active:scale-95  flex font-semibold text-lg items-center transition-all ${index<=1?'opacity-50 cursor-not-allowed' :'opacity-100 cursor-pointer '}`}><ChevronLeft/>Prev </button>
        <button
        onClick={()=>{
          
          setindex(index+1)
          }}
        className=' bg-amber-500 text-black py-3 px-4 gap-2 rounded active:scale-95 cursor-pointer flex font-semibold text-lg items-center transition-all '>Next <ChevronRight className='next'/></button>
      </div>
      </div>
  )
}

export default App