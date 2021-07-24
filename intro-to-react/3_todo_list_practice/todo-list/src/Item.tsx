import { setMaxListeners } from 'process';
import React, {useState} from 'react';

interface ItemProps {
  text: string;
  list: string[];
  setList: (listInput: string[]) => void
  index: number;
}
function Item(props:ItemProps){
  // const value = (true) ? <if true do first> : <if false do second thing>

  
    // props.text
    // const[list, setList] = useState()
    const [isStruck, setStruck] = useState(false); //how do i give this boolean value
    return <div>
      {isStruck ? <i>{props.text}</i> : props.text}

    <button
    onClick={() => {
        setStruck(!isStruck)
    }}
    >Strike</button> 
    <button onClick={() => {
      console.log(props.index)
      props.setList(
      [...props.list.slice(0, props.index), 
      ...props.list.slice(props.index + 1)])
    }
      }>Remove</button>
    </div>;
  }

export default Item;