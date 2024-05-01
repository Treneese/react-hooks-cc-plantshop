import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [ search, setSearch ] = useState("")
  const [addPlants, setPlants] = useState("")


  function onSearch(searchPlant) {
    setSearch(searchPlant)
  }

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={onSearch}/>
      <PlantList search={search}/>
    </main>
  );
}

export default PlantPage;
