const Order = ({ order, setOrder }) => {
  
  // Remove order component by clearing it (props.order) when you click outside
  // of div.order-info
  const clsOrder = (a) => {
    let tag = a.target.nodeName.toLowerCase();
    if(tag === 'h4' || tag === 'h1' || a.target.classList.contains('order-info')) {
      return;
    }
    setOrder(null);
  }

  return (
    <div className="flex order" onClick={clsOrder}>
      <div className="flex column order-info">
        <h4>You ordered products for:</h4>
        <h1>{order} $</h1>
      </div>
      <p>&times;</p>
    </div>
  )
}

export default Order;
