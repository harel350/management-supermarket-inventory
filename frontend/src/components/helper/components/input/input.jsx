import { useState } from 'react'
import './input.css'

export default function Input(props) {
    const [value, setValue] = useState(props.value ?? '')

    function onChangeHandle(e) {
        e.preventDefault()
        props.onChange(e.target.value, props.id)
        setValue(e.target.value)
    }
    return (
        <div>
            <label htmlFor={props.id}>{props.labelName}</label>
            
                <input value={value} list={props.id+"s"} autoComplete='off'  type={props.type} id={props.id} onChange={(e) => onChangeHandle(e)} />
                <datalist id={props.id+"s"}>
                    {props.list &&
                    props.datalist.map(item =>{
                        return(
                            <option key={item.categoryId}  value={item.categoryId}>{item.categoryName}</option>
                        )
                    })}
                </datalist>
            

        </div>
    )
}

