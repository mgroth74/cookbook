import React from "react";


function Recipe(props){
if(props){
  console.log('recipe props',props)
  return(
    <div>this is the list of recipes</div>
    

    
    
  )
  }else{
    return(
      <></>
    )
  }
}

export default Recipe