const Total = ({ price }) => {
  return (
    <div className="flex column">
      <div className="flex">
        <h1>Total:</h1>
        <h1>{price.toFixed(2)} $</h1>
      </div>
    </div>
  )
}

export default Total;
