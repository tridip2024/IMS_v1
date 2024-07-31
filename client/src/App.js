import logo from "./logo.svg";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import NavBar from "./Components/navBar";
import Item from "./Components/item";

const query = gql`
query GetAllProducts {
  getAllProducts {
    item
    ratings
    type
  }
}
`;

function App() {
  const { data, loading } = useQuery(query);

  const imgurl = "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"

  function getInventory() {
    let items = [];
    console.log(data.getAllProducts);
    data.getAllProducts.forEach(e => {
      items.push(
        <Item imgurl={imgurl} title={e.item} desc={e.type} />
      )
    }); 

    return items;
  }

  if (loading) return <h1>Loading...</h1>;
  
  return (
    <>
    <NavBar />
    <div className="row">
      {getInventory()}
    </div>

    </>
  );
}

export default App;
