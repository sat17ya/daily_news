import React, { useEffect,useState } from 'react'
import NewCard from './NewCard'

export default function News() {
    useEffect(() => {
      fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-11-06&sortBy=publishedAt&apiKey=81ec3a08ffe449fbbee24d4527cdd839').then((val)=>val.json()).then((resp)=>{
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
          data.map((res,i)=>{
            return(
              <div className="col-md-4">

                <NewCard author={res.author} des={res.description.slice(0,100)} img={res.urlToImage} title={res.title} url={res.url} key={i}/>
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
