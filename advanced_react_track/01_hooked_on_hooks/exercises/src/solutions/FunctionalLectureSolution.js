import React, { useState, useEffect } from "react";

//Hooked way of thinking: WHAT logic do you want to handle?
export default function FunctionalLectureSolution(props) {
  const [peopleVaccinated, setPeopleVaccinated] = useState(0);
  const [shouldGetVaccine, setShouldGetVaccine] = useState(false);
  const [vaccinesLeft, setVaccinesLeft] = useState(1000);

  //All our logic is separated :)

  //Logic for setting up/cleaning up interval of how many people got vaccinated
  useEffect(() => {
    let updatePeopleVaccinated = () => {
      setPeopleVaccinated((prevPeople) => prevPeople + 5);
    };
    let peopleInterval = setInterval(updatePeopleVaccinated, 1000);

    return () => {
      clearInterval(peopleInterval);
      //setPeopleVaccinated(0);
      console.log("Unmounted from Functional!");
    };
  }, []);

  //Logic for rendering that you should get the vaccine when reached past a threshold
  useEffect(() => {
    if (peopleVaccinated >= 15) {
      console.log("entered conditional"); //This can be optimized thru useMemo! (will cover later)
      setShouldGetVaccine(true);
    }
  }, [peopleVaccinated]);

  //Logic for the vaccines left interval
  useEffect(() => {
    if (shouldGetVaccine) {
      let updateVaccinesLeft = () => {
        setVaccinesLeft((prevVaccines) => prevVaccines - 5);
      };
      let vaccineInterval = setInterval(updateVaccinesLeft, 1000);

      return () => {
        clearInterval(vaccineInterval);
      };
    }
  }, [shouldGetVaccine]);

  return (
    <div>
      <div>
        There have been {peopleVaccinated} people vaccinated since you opened
        this page
      </div>
      {shouldGetVaccine && (
        <div>
          <div>You should get your vaccine before they run out!</div>
          <div>There are only {vaccinesLeft} vaccines left in stock!</div>
        </div>
      )}
      <div>This is our Hooked Component</div>
    </div>
  );
}
