import React from 'react'

const Choosecard = ({imago,heado,paragraph}) => {
  return (
    <div  className='cardsfromchooseus' style={{width:"400px",height:"700px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <img  style={{paddingTop:"40px"}} src={imago}></img>
        <h2>{heado}</h2>
        <p style={{fontSize:"18px",padding:"10px"}}>{paragraph}</p>
    </div>
  )
}

export default Choosecard