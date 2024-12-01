import { url } from "inspector";
import react from "react";
 const Women =()=>{
const perfume =[
    {id:1, name: 'Noor', price: 4000, descripion:"Top Lime, Pepper, Ginger, Lavender Heart Spices" , image:'/w noor.jpeg'},
    {id:2, name: 'Uroosa', price: 5000 , descripion:"Fruity Floral" , image:'/w uroosa.jpeg'},
    {id:3, name: 'My Way', price: 30000 , descripion:"floral bouquet of tuberose, jasmine and orange blossom" , image:'/w myway.jpeg'},
    {id:4, name: 'Gucci Flora', price: 19000, descripion:"Blossom accord, mandarin and red berries" , image:'/w gucci flora.jpeg'},
    {id:5, name: 'Coco Mademoiselle', price: 63000, descripion:"Oriental Floral fragrance " , image:'/w coco.jpeg'},
    {id:6, name: 'Cosmic Kylie Jenner', price: 45000, descripion:"Golden amber and red peony, " , image:'/w cosmic.jpeg'},
    
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
 export default Women;