function Basket({ basket }) {
  return (
    <div className="basketlist">
      <h3 className="title">Sepet</h3>
      <div className="basket">
        {
          basket.length > 0 ?
          <>
            <ul>
              {
                basket.map((x, i) => <li key={i} >{x.title} ({x.stock} Adet) - {x.price} USD</li>)
              }
            </ul>

            <h4>Toplam: { basket.map(x => x.price * x.stock).reduce((a, b) => a + b).toLocaleString('en-US') } USD</h4>
          </>
          :
          <p>Sepet Boş</p>
        }
        
      </div>
    </div>
  )
}

export default Basket;
