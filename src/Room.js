import React, {useState} from 'react';
import './Room.css';

        function Room() {
            let [isList,setLit] = useState(true);
            let [age , setAge] = useState(23);

        return   <div className={`room ${isList?'lit':'dark'}`}>
                    <h1>the room is {isList ? 'lit' : 'dark'}</h1>
                    <br/>
                    <h1>age is :{age}</h1>
                    <button onClick= {() =>{ 
                                    console.log("Button clicked for lit");
                                    setLit(!isList);
                                }}>Toggle lit
                    </button>
                    <button onClick= {() => {
                                console.log("Button clicked for Age");
                                setAge(++age);
                                }}>Increase Age
                    </button>
                </div>
        }

  export default Room;
