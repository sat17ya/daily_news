import React from 'react'

export default function TechCard(props) {
  return (
    <>
    <div className="card m-3" >
  <img width={200} height={300} src={props.img ?(props.img):("https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg")} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.des}...Read More</p>
    <p>{props.author}</p>
    {/* <Link to='#' className="btn btn-primary">Go somewhere</Link> */}
    <button className='btn btn-danger'>
    <a href={props.url} style={{textDecoration:"none",color:"white"}}>read full article</a>
    </button>
  </div>
</div>
    </>
  )
}
