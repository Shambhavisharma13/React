import ProductDetail from "./IInd Method/ProductDetail";
import Higher from "./IST METHOD/Higher";

 export default function Third(){
    const datas=[
       {name:"IPhone17",price:100000,qty:5,description:"This is latest model of Iphone with advances feature and sleek design  "},
       {name:"Samsung galaxy s23",price:90000,qty:10,description:"This is latest model of Samsung Galaxy with advances feature and sleek design  "},
       {name:"Google pixel 7",price:70000,qty:20,description:"This is latest model of Google pixel 7 with advances feature and sleek design  "},
       {name:"Oneplus11",price:80000,qty:15,description:"This is latest model of One plus 11 with advances feature and sleek design  "},
       {name:"Xiaomi Mi 12",price:60000,qty:25,description:"This is latest model of Xiaomi Mi 12 with advances feature and sleek design  "},
       {name:"Oppo Find X5",price:50000,qty:30,description:"This is latest model of Oppo Find X5 with advances feature and sleek design  "},
       {name:"Realme Gt 2 pro",price:30000,qty:40,description:"This is latest model of   realme with advances feature and sleek design  "},
       {name:"Asus ROG phone 5",price:20000,qty:45,description:"This is latest model of Asus ROG  with advances feature and sleek design  "},
       {name:"Sony xperia 1 III",price:10000,qty:50,description:"This is latest model of sony xperia with advances feature and sleek design  "},
    ]
    return(
<div>
    {/* <h1>props</h1> */}
    {/* <Higher/> */}
   {
    datas.map((el)=>(
 <ProductDetail name={el.name} price={el.price} qty={el.qty} description={el.description}/>
    ))
   }
</div>
    )
}