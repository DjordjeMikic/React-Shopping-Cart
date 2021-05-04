const Total = ({ price, setOrder, dispatch }) => {

  // Set order price and remove cart from localStorage
  const order = () => {
    if(localStorage.getItem('cart')) {
      localStorage.removeItem('cart');
      dispatch({ type: 'REMOVE_ALL' })
    }
    setOrder(price);
  }

  return (
    <div className="flex column">

      <div className="flex">
        <h1>Total:</h1>
        <h1>{price.toFixed(2)} $</h1>
      </div>

      <button
        className="btn-add"
        onClick={order}
        style={{ marginTop: '2%' }}
      >
        Order now
      </button>

    </div>
  )
}

export default Total;
