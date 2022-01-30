// import React, { useEffect, useState } from 'react';
// import './PlansScreen.css';

// import { useSelector } from 'react-redux';
// import { selectUser } from '../features/userSlice';
// import db from '../firebase';
// import {loadStripe} from '@stripe/stripe-js';


// function PlansScreen() {

//     const [products, setProducts]= useState([]);

//     const user = useSelector(selectUser);
    
// useEffect(()=>{

//     // database me jo active product hai unhe lekr 
// db.collection('products')
// .where('active','==',true)
// .get().then((querySnapshot)=>{
//     // products ka empty object bnaya 
//     const products={};    
//         // querySnapshot bunch of product docs diya
//         querySnapshot.forEach(async productDoc =>{

//             products[productDoc.id]= productDoc.data();
//             const pricesnap=await productDoc.ref.collection('prices').get();
//                 // multiple prices ho skte hai 
//             pricesnap.docs.forEach(price=>{
//                 products[productDoc.id].prices={
//                     priceId: price.id,
//                     priceData: price.data(),
//                 };
//             });
//         });

//         setProducts(products);
// });
// },[]);

// console.log(products);

// const loadCheckout= async(priceId)=>{

// const docRef= await db.collection('customers').doc(user.uid).collection("checkout_sessions")
// .add({
//         price: priceId,
//         succes_url: window.location.origin,
//         cancel_url: window.location.origin,
//     });
    
//     docRef.onSnapshot(async(snap)=>{
//         const {error,sessionId } =snap.data();
//         if(error){
//             // show error to your customer
//             // inspect your cloud fuction logs in the firebase console
            
//             alert(`An error acquired: ${error.message}`)
            
            
//         }
//         if(sessionId){
//             // we have session lets redirect to checkout
//             // init stripe 
//             const stripe=await loadStripe('sk_test_51KN95RSHSo2e82hKcFjp2YnSSFTYgXv0xS5qBTmEfzFlWbpFudt5P2ZmMbK14z0CciypCfp2iTukc7uYZLj6sHQh00Sg9nfDzY');
//             //this is secret key oin sanskar_consulatancy of stripe
            
//         };
//         stripe.redirectToCheckout({sessionId})
        
//     })
    
// };


//   return(
//    <div className='plansScreen'>
// {object.entries(products).map(([productId,productData])=>{

// {/* add some code to check user subsription is active */}
// return(
//     <div className="plansScreen_plan">

//         <div className="plansScreen_info">
//             <h5>{productData.name}</h5>
//             <h6>{productData.description}</h6>
//         </div>
//         <button onClick={()=>loadCheckout(productData.prices.priceId)}>
//             Subscribe
//         </button>
//     </div>

// );

// })}

// </div>
//   );
// }

// export default PlansScreen;
