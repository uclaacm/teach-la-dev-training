import logo from "./logo.svg";
import "./App.css";

function App() {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>{addArrImperatively(arr)}</p>
        <p>{addArrDeclaratively(arr)}</p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// //Describing HOW the Code Works
// function addArrImperatively(arr) {
//   //Declaring a return Value
//   let rV = 0;
//   for (let i = 0; i < arr.length; i++) {
//     //Incrementing it for each value in the array
//     rV += arr[i];
//   }
//   //returning the return value
//   return rV;
// }

// //Array Reducing!
// function addArrDeclaratively(arr) {
//   /*A reducing function takes up to four values:
//   - the accumulated value you return
//   - the currentValue of the array you're going through
//   - the index of the current value you're going through
//   - the array you are iterating through
//   */

//   //arr.reduce returns the value of sum after looping through all values in the array!
//   //Remember, arrow functions let you call the variables of each function whatever you want!
//   return arr.reduce((sum, val) => sum + val);
//   //We add the value of each index to sum!
// }

// //Array Mapping
// function doubleValuesDeclaratively(arr) {
//   /*A mapping function takes up to 3 values:
//   - the current value of the source array
//   - the current index of the source array
//   - the array you are iterating through
//   */
//   //arr.map returns a new array that is produced by doubling each element's value!
//   //example [1,2,3] => [2,4,6]
//   return arr.map((value) => value * 2);
// }

// //Array Filtering
// function keepValsAbove5(arr) {
//   /*A filtering function takes up to 4 values
//   -the current value of the element
//   - the index the of the element
//   - the array that you are iterating through
//   - pointer of "this" (only used for callbacks)
//   */

//   //example: [1,10,2,9,3,8,4,7,5,6] => [10,9,8,7,6]
//   return arr.filter((val) => val > 5);
// }

// //Chaining everything together!
// function sumOfAllDoubledValuesGreaterThan5(arr) {
//   //first, filter values greater than 5
//   //Then map them to a new array by doubling their values
//   //Then take the sum of all the values with a reducer!
//   return arr
//     .filter((val) => val > 5)
//     .map((val) => val * 2)
//     .reduce((sum, val) => sum + val);
// }
