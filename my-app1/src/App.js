import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { ToDoList } from "./ToDoList";



export class App extends React.Component{
    render(){
        return(
            <>
                <Hello />
                <ToDoList 
                render ={(items,handleRemove) =>{
                    return(
                        <div>
                            {items.map((item,i) => (<li key={i}>{item}<button id={i} onClick={(event)=> handleRemove(event)}>Remove</button></li>))}
                        </div>
                    )
                }
                }/>
                <ClickTracker/>
            </>
        )
    }
}