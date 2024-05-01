import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ search, setSearch ] = useState("")
  const [plants, setPlants] = useState([])
 


  function onSearch(searchPlant) {
    setSearch(searchPlant)
  }

  function onAddPlant(addPlant) {
    setPlants([...plants,addPlant])
  }

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant}/>
      <Search onSearch={onSearch}/>
      <PlantList search={search} plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
