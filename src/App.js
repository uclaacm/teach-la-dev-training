import './App.css';
import { useEffect, useState } from 'react';
import Task from './Task';

/**
 * <input type="text">text input <>
 * <button onClick={function}>[submit]<> onsubmit-> text => task & text resets
 *
 * # of Tasks [button => remove]
 * Task ******
 * <text> what the task is
 * <button> remove the task
 *
 *
 * props -> C++ constuctor variables -> <Component>(props) + can't be modified by component itself
 * state -> member variables & it causes React rerenders -> dont modify state with setState
 *
 * // attach CSS
 */
/*
Class based - phased  out

PRos for functional
- less code & easier to read => blog post
- slight performance benefit

*/
// function something () {
//   // aslkfdjksdf
//   return "hi";
// }

// const something = () => {
//   return "hi"; // attach a blog post
// }

// passing something the function as a variable => call something whenever you want
// pass something() as a ariable => "hi"


// useEffect


function App() {
  const [inputTask, setInputTask] = useState(''); // clears this
  const [taskList, setTaskList] = useState([]); // add task
  const addTask = () => {
    setTaskList([...taskList, inputTask]);
    setInputTask('');
  };

  useEffect(() => {
    console.log('rendering!');
    return () => {console.log('final cleanup');};
  });

  // forEach, map => returns the value that's been processed
  // arr.map((value)=>{return <div>value<div/>}) // link a resource for key
  // Object.entries or Object.key or Object.value(object_name)// map, foreach

  // Lists and keys for React to know what to rerender
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(event) => { setInputTask(event.target.value); }} value={inputTask} />
        <button onClick={addTask} > Submit</button>
        {
          // taskList
          // setTaskList
          // need to be provided the index
          taskList.map((value, index) => {
            return <Task
              key={value}
              name={value}
              index={index}
              taskList={taskList}
              setTaskList={setTaskList}>
            </Task>;
          })
        }
      </header>
    </div>
  );
}

export default App;
