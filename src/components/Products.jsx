function Products({ products, addToBasket }) {
  return (
    <div className="products">
      <h3>Ürünler</h3>

      <ul>
        {
          products.map(x => <li key={x.id} >{x.name} - {x.price} USD <button onClick={() => {addToBasket(x)}}>Ekle</button></li>)
        }
          
      </ul>
    </div>
  )
}


export default Products;