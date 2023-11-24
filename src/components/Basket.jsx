function Basket({ basket }) {
  return (
    <div className="basket">
      <h3>Sepet</h3>
      {
        basket.length > 0 ?
        <>
          <ul>
            {
              basket.map((x, i) => <li key={i} >{x.name} ({x.quantity} Adet) - {x.price} USD</li>)
            }
          </ul>

          <h4>Toplam: { basket.map(x => x.price * x.quantity).reduce((a, b) => a + b).toLocaleString('en-US') } USD</h4>
        </>
        :
        <p>Sepet Boş</p>
      }
      
    </div>
  )
}

export default Basket;
