import React, { useEffect,useState } from 'react'
import TechCard from './TechCard'

export default function Technology() {
    useEffect(() => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=81ec3a08ffe449fbbee24d4527cdd839').then((val)=>val.json()).then((resp)=>{
        return(
            console.log(resp.articles),
            setData(resp.articles)
        )
      })
    }, [])
  const [data,setData]= useState([])  
  return (
    <>
    {
      data.length<1?(<img width={600} height={600} style={{marginLeft:"25rem"}} src='https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000' alt='..'/>):(<div className="container">
      <div className="row">
        {
          data.map((res)=>{
            return(
              <div className="col-md-4">

                <TechCard author={res.author} des={res.description} img={res.urlToImage} title={res.title} url={res.url}/>
              </div>
            )
          })
        }
      </div>
     </div>)
    }
     
    </>
  )
}
