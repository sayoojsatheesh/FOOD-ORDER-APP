import { useEffect, Fragment, useCallback, useState } from "react";
import "./MealsList.css";
import MealsData from "./MealsData";
import Meals from "./Meals";
const Mealslist = () => {
  const [isloading, setisloading] = useState(false);
  const[iserror,setiserror]=useState(null);
  const [meals, setmeals] = useState({});
  

  const fetchhandler = useCallback(async () => {
    setiserror(null);
    try{
    setisloading(true);

    const response = await fetch(
      "https://react-project1-3aea5-default-rtdb.firebaseio.com/meals.json"
    );
    if(!response.ok){
      throw new Error('DATA CAN NOT BE FETCHED')
    }
    const mealsdata = await response.json();
    setmeals(mealsdata);
    }catch(error){
      setiserror("404 NOT FOUND")
    }
    setisloading(false);
  }, []);
  let updatedmeals = [];
  for (const key in meals) {
    for (var i = 0; i < 4; i++) {
      updatedmeals.push(meals[key][i]);
    }
  }
  useEffect(() => {
    fetchhandler();
  }, [fetchhandler]);

  const mealslist = updatedmeals.map((x) => {
    return (
      <MealsData
        k={x.id}
        name={x.name}
        description={x.description}
        price={x.price}
      />
    );
  });
  return (
    <Fragment>
      <Meals />

      <div className="meals-listcard">
        {iserror && <p>{iserror}</p>}
        {isloading && <p>FETCHING DATA......</p>}
        {mealslist}
      </div>
      <button onClick={fetchhandler}>fetch</button>
    </Fragment>
  );
};

export default Mealslist;
