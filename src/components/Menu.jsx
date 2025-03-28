import React from "react"

const Menu =({items})=>{

    return (
        <div className="borderlayout">
            {items.map((item)=>(

             <div  className="categoryMenu" key={item.id}>
                <img  src={item.image} alt={item.name}></img>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p>{item.price}</p> 
            </div>

           ))}

        </div>

    )

}

export default Menu ;
