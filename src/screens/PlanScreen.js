// import React, { useState, useEffect } from "react";
// import db from "../firebase";
// import "./PlanScreen.css";

// function PlanScreen() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     db.collection("products")
//       .where("active", "==", true)
//       .get()
//       .then((querySnapshot) => {
//         const products = {};
//         querySnapshot.forEach(async (productDoc) => {
//           products[productDoc.id] = productDoc.data();
//           const priceSnap = await productDoc.ref.collection("prices").get();
//           priceSnap.docs.forEach((price) => {
//             products[productDoc.id].prices = {
//               priceId: price.id,
//               priceData: price.data(),
//             };
//           });
//         });
//         setProducts(products);
//       });
//   }, []);
//   console.log(products);
//   return <div className="plan-screen"></div>;
// }

// export default PlanScreen;

// PlanScreen.js
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./PlanScreen.css";

function PlanScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db
          .collection("products")
          .where("active", "==", true)
          .get();
        const newProducts = await Promise.all(
          querySnapshot.docs.map(async (productDoc) => {
            const productData = productDoc.data();
            const priceSnap = await productDoc.ref.collection("prices").get();
            const prices = priceSnap.docs.map((price) => ({
              priceId: price.id,
              priceData: price.data(),
            }));
            return {
              productId: productDoc.id,
              productData,
              prices,
            };
          })
        );
        setProducts(newProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(products);

 return (
   <div className="plan-screen">
     {products.map((product) => {
       // add some logic to check for user subscription status if needed

       return (
         <div className="planScreen_Plan" key={product.productId}>
           <div className="planScreen__info">
             <h5>{product.productData.name}</h5>
             <h6>{product.productData.description}</h6>
           </div>
           <button>Subscribe</button>
         </div>
       );
     })}
   </div>
 );

}

export default PlanScreen;
