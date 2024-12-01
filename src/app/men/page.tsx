import { url } from "inspector";
import react from "react";
 const Men =()=>{
const perfume =[
    {id:1, name: 'Rasasi Blue', price: 4000, descripion:"florals citruses and spices" , image:'/blue.jpeg'},
    {id:2, name: 'Sauvage', price: 11400 , descripion:"Aromatic Fougere fragrance" , image:'/d sauvage.jpeg'},
    {id:3, name: 'Zarar', price: 8000 , descripion:"fresh, marine scent" , image:'/zarar.jpeg'},
    {id:4, name: 'Haider', price: 5000, descripion:"Warm woody" , image:'/haider.jpeg'},
    {id:5, name: 'Ocean', price: 27000, descripion:"Driftwood, coastal trees and earthy sand" , image:'/ocean.jpeg'},
    {id:6, name: 'Black exst', price: 24900, descripion:"Woody amber" , image:'/black ext.jpeg'},
    
]
    return(
        <div>
            <div className="perfumes">
                {perfume.map((scent)=>(
                    <div key={scent.id}className="perfume-card">
                        <img src={scent.image} alt={scent.name}/>
                        <h3>{scent.name}</h3>
                        <p>{scent.descripion}</p>
                        <div className="price">Rs.{scent.price}</div>
                        <button>Add To Cart</button>
                   </div>
                
                ))}
            </div>

        </div>
    )
 }
 export default Men;