import React, { useEffect, useState } from 'react'
import NewsCatCard from './NewsCatCard'

export default function NewsCat() {
    useEffect(() => {
      fetch("https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=81ec3a08ffe449fbbee24d4527cdd839").then((val)=>val.json()).then((resp)=>{
        return(
            console.log(resp.articles),
            setData(resp.articles)
        )
      })
    }, [])
    const [data,setData]=useState([])
  return (
    <>
        {
            data.length<1?(<img width={600} height={600} style={{marginLeft:"25rem"}} src='https://img.freepik.com/premium-vector/system-software-update-upgrade-concept-loading-process-screen-vector-illustration_175838-2182.jpg?w=2000' alt='..'/>):(
            <div className="container">
            <div className="row">
                {
                    data.map((res,i)=>{
                        return(
                            <div className="col-md-4">
                                <NewsCatCard author={res.author} des={res.description   } img={res.urlToImage} title={res.title} key={i}/>
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
