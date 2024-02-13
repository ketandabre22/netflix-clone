import React, { useEffect, useState } from "react";
import db from "../firebase";
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

        const productsData = {};

        // Use Promise.all for parallel fetching of price data
        await Promise.all(
          querySnapshot.docs.map(async (productDoc) => {
            productsData[productDoc.id] = productDoc.data();
            const priceSnap = await productDoc.ref.collection("price").get();

            priceSnap.docs.forEach((price) => {
              productsData[productDoc.id].prices = {
                priceId: price.id,
                priceData: price.data(),
              };
            });
          })
        );

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(products);

  return <div className="PlanScreen"></div>;
}

export default PlanScreen;
