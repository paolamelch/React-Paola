import { useRef } from "react"

export function CarDetails({initialData}){

    const _formRef = useRef()
    
    const {model="Ford",year ="1975",color ="Rosso"} = initialData

    function handleFormChange(event){
        let modelInput = _formRef.current[0].value
        let yearInput = _formRef.current[1].value
        let colorInput = _formRef.current[2].value
        
        console.log(modelInput,yearInput,colorInput);
        event.target.value = '';
        console.log(modelInput,yearInput,colorInput);
    }

    // non sono riuscita a far azzerrare tutti e 3 gli input lasciando il form uncontrolled

    return(
        <form ref={_formRef} onChange={handleFormChange}>
            <label>Modello</label>
            <input type="text" name="model" defaultValue={model}/>
            <label>Anno</label>
            <input type="text" name="year" defaultValue={year} />
            <label>Colore</label>
            <input type="text" name="color" defaultValue={color}/>
        </form>
    )
}