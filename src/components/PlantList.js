import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({ search }) {
const [plants, setPlants] = useState([])
const [error, setError] = useState(null);

// const [update, setUpdate] = useState(false)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
// .then((resp) => resp.json())
// .then((data) => setPlants(data))
//   }, []) 
.then((resp) => {
  if (!resp.ok) {
    throw new Error("Failed to fetch plants");
  }
  return resp.json();
})
.then((data) => setPlants(data))
.catch((error) => setError(error.message));
}, []);

  function removePlant(plantId) {
    const filteredPlants = plants.filter((plant) => plant.id !== plantId)
    setPlants(filteredPlants)
  }


  
  const filteredPlants = plants.filter((plant) => {
    const lowercaseSearch = search.toLowerCase()
const lowercaseName = plant.name.toLowerCase()
return lowercaseName.includes(lowercaseSearch)
  })

  const plantCards = filteredPlants.map((plant) => (
     <PlantCard key={plant.id} plant = {plant} removePlant={removePlant}/> 
))


  return (
    <div>
    {error && <p>Error: {error}</p>}
    <ul className="cards">{/* render PlantCards components in here */}
     { plantCards}
     </ul>
     </div>
    );
}

export default PlantList;
