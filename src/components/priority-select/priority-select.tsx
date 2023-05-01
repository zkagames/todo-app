import { useState } from "react";
import { SelectContainer, SelectCell, SelectCellsContainer } from "./priority-select.style"
import { Priority } from "../../types";
import { PriorityCell, getPriorityText } from "../todos/todos.style";


const PRIORITIES:Array<Priority> = ['3','2','1'];

export const PrioritySelect = ({value, onChange}:{value:Priority, onChange:(priority:Priority)=>void})=>{
    const [isOpen, setIsOpen] = useState(false);
    
    
    return <SelectContainer>
        
        <PriorityCell priority={value} onClick={()=>setIsOpen(true)}>
                 {getPriorityText(value)}
        </PriorityCell>

        {isOpen && <SelectCellsContainer>
            {PRIORITIES.map(priority=>
                <SelectCell key={priority} isChecked={priority===value}><PriorityCell priority={priority} onClick={()=>{setIsOpen(false); onChange(priority)}}>
                        {getPriorityText(priority)}
                </PriorityCell></SelectCell>)}
            </SelectCellsContainer>
        }
    </SelectContainer>
}