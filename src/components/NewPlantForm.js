import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  // const [addPlants, setPlants] = useState("")
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  // const {id, name, image, price} = plant

  function handleChange(event) {
    // 
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "image") {
      setImage(value);
    } else if (name === "price") {
      setPrice(value);
    }
  
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:6001/plants", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({name, image, price})
    }).
    then((resp) => {
        if (resp.ok) {
            resp.json().then((data) => onAddPlant(data))
        } else {
            throw Error('something went wrong')
        }
    }).catch(console.log)
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL"  value={image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price"  value={price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
