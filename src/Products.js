import React from 'react'
import './App.css'
function Products({data}) {
  
  return (
    <div>
        <div className='row'>
          {data.map(data=>
        <div key={data.recipe.label} className='col-md-4'>
        <div class="card" style={{'width': '18rem'}}>
         <img src={data.recipe.image} class="card-img-top" alt="..."/>
           <div class="card-body">
             <h5 class="card-title">{data.recipe.label}</h5>
              <p class="card-text">
                Total Amount Of Calories : {Math.round(data.recipe.calories)}
              </p>
               <a href="#" class="btn btn-primary">
                Buy
              </a>
       </div>
    </div>
    </div>
          )}
    </div>
    </div>
  )
}

export default Products