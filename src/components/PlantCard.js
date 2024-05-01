import React, {useState} from "react";

function PlantCard({plant, removePlant, updatePlantPrice}) {

  const {id, name, image, price} = plant
  const [newPrice, setNewPrice] = useState(price)
const[stock, setStock] = useState(true)

function handleStockClick() {
  setStock((currentStockState) => !currentStockState)
}

function handleDeleteClick() {
  fetch(`http://localhost:6001/plants/${id}`, {
    method: 'DELETE'
  }).then((resp) => {
    if (resp.ok) {
      removePlant(id)
    } else {
      console.log('handle errors')
    }
  })
 }
//'/plants'POST(create new plant)

//'/plants/.id'PATCH(update by id)

function handlePriceChange(event) {
  setNewPrice(event.target.value);
}

function handlePriceUpdate() {
  updatePlantPrice(id, newPrice);
}
  return (
    <li className="card" data-testid="plant-item">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <p>Price:
       <input
          type="number"
          value={newPrice}
          onChange={handlePriceChange}
          />
          <button onClick={handlePriceUpdate}>Update</button>
          </p>
    {stock ? (
      <button onClick={handleStockClick} className="primary">In Stock</button>
    ) : (
      <button onClick={handleStockClick}>Out of Stock</button>
      )}
       <button onClick={handleDeleteClick} className="button delete">DELETE</button> 
  </li>
);
    }

export default PlantCard;
