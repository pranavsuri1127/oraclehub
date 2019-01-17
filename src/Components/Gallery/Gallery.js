import React from 'react';
import './Gallery.css';



const Gallery=({images})=>{
	return(
		<div className="galContainer">
		{
			images.map((images,i)=>{
	          return(
	            <div className="imgContainer">
	           <img key={i} src={images} alt="" width="400px" height="400px"/>
	           </div>
	           )
	        })
		}
		</div>
			)
}



export default Gallery;