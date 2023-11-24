import { useEffect, useState } from "react"
import './css/App.css'
import Products from "./components/Products"
import Basket from "./components/Basket"


function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {


    setProducts(
      [
        {
          id: 1,
          name: 'Ayakkabı',
          price: 100
        },
        {
          id: 2,
          name: 'Pantolon',
          price: 150
        },
        {
          id: 3,
          name: 'Gömlek',
          price: 130
        },
      ]
    );

  }, []);

  function addToBasket(product) {
    

    setBasket(function(currentBasket) {
      const foundItem = currentBasket.find(x => x.productId === product.id) || null;
  
      if(foundItem !== null) {
        foundItem.quantity++;
        return [...currentBasket];

      }


      const newBasketItem = {
        name: product.name,
        productId: product.id,
        quantity: 1,
        price: product.price
      }
      return [...currentBasket, newBasketItem];
      
    });
  }


  return (

      <>
          <div className="container">
              <Products products={products} addToBasket={addToBasket} />
              <Basket basket={basket}  />
          </div>
      </>
  )


}

export default App