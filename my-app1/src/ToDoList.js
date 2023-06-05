import React from "react";
export class ToDoList extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            items : [],
            string: "", 
        }

    }

    handleItemChange = (event) =>{
        this.setState({string : event.target.value})
    }

    handleAddingInput = () =>{
        const input = [this.state.string];
        this.setState({items : this.state.items.concat(input)})
        this.setState({string : ""}) 
    }

    handleResetButton = () =>{
        this.setState({items : []})
    }

    componentDidUpdate(){
        console.log(this.state.items);
    }
 
    render(){
        return(
            <div>
               <ul>
                {listItems}
                </ul>
                <div>
                    <input type="text" value={this.state.string} name="input" onChange={this.handleItemChange}/>
                    <button onClick={this.handleAddingInput}>ADD</button>
                    <button onClick={this.handleResetButton}>Reset</button>

            </div>
            
        )
    }
}