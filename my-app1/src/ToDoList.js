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
    }

    componentDidUpdate(){
        console.log(this.state.items);
    }
    
    render(){
        const listItems = this.state.items.map ((item)=> (<li>{item}</li>))
        return(
            <div>
               <ul>
                {listItems}
                </ul>
                <div>
                    <input type="text" name="input" onChange={this.handleItemChange}/>
                    <button onClick={this.handleAddingInput}>ADD</button>
                </div> 
            </div>
            
        )
    }
}