function Products({ products, addToBasket }) {
  return (
    <>
    <div className="productlist">
      <h3 className="title">Ürünler</h3>
      <div className="products">
        {
          products.length > 0 ?
          <>
            {
              products.map(x => <div className="product" key={x.id}> 
                <img src={x.thumbnail} alt={x.thumbnail} />
                <h1>{x.title}</h1> 
                <h4>{x.category}</h4>
                <p>{x.description}</p>  
                <h4>{x.price} USD</h4>
                <button onClick={() => {addToBasket(x)}}>Ekle</button>
              </div>)
            }
          </>
          :
          <p>Ürün Bulunamadı</p>
        }
      </div>
    </div>
  </>
  )
}


export default Products;