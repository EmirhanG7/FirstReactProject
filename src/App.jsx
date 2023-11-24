import { useEffect, useState } from "react"
import './css/App.css'
import Products from "./components/Products"
import Basket from "./components/Basket"


function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  let productList = [];
  
  
  useEffect(() => {
    
    async function fetchData() {
      const fetchProducts = await fetch('https://dummyjson.com/products').then(x => x.json())
      productList = fetchProducts.products
      console.log(productList)
      setProducts(
        [...productList]
      );
    }
          
    fetchData();

  }, []);

  function addToBasket(product) {
    

    setBasket(function(currentBasket) {
      const foundItem = currentBasket.find(x => x.productId === product.id) || null;
  
      if(foundItem !== null) {
        foundItem.stock++;
        return [...currentBasket];

      }


      const newBasketItem = {
        title: product.title,
        productId: product.id,
        stock: 1,
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