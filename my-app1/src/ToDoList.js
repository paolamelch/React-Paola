import React from "react";

export class ToDoList extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            item :""
        }

    }

    handleItemChange = (event) =>{
        this.setState({item :<li>{event.target.value}</li>})
    }
    
    handleAddingInput = () =>{
        this.setState({
            item: this.props.names.push(this.state.item.props.children)
        })
    }

    render(){
        const items = [...this.props.names]
        const listItems = items.map((item) =><li>{item}</li>)
        return(
            <div>
               <ul>{listItems}
               </ul>
                <div>
                    <input type="text" name="input" onChange={this.handleItemChange}/>
                    <button onClick={this.handleAddingInput}>ADD</button>
                </div> 
            </div>
            
        )
    }
}