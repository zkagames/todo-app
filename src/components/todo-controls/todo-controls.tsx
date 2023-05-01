import { useMemo, useState } from "react"
import { TableFilters } from "../table/table-types"
import { Toggle } from "../toggle/toggle"
import { TitleAndAdd, TodosControlsContainer, TodosTitle } from "./todo-controls.style"
import { Button } from "../button/button.style"
import { AddModal } from "../add-modal/add-modal"
import { Todo } from "../../types"


export const TodosControls = ({tableFilters, onChangeFilters, onAddTodo}:{
    tableFilters: TableFilters, 
    onChangeFilters:(tableFilters: TableFilters)=>void,
    onAddTodo: (todo: Todo)=>void;
})=>{

    const [isAddOpen, setIsAddOpen] = useState(false);


    const changeFilters = (status:string)=>{
        const newStatus = status==='all' ? '' : 'incomplete';
        onChangeFilters({...tableFilters, status: newStatus});   
    }

    const showIncomplete = useMemo(()=>
        tableFilters.status==='incomplete'
    ,[tableFilters])
       
    return <><TodosControlsContainer>
        <TitleAndAdd>
            <TodosTitle>TO DO LIST</TodosTitle>
            <Button onClick={()=>setIsAddOpen(true)}>+ Add task</Button>
        </TitleAndAdd>
        <Toggle options={
            [{value: 'incomplete', label:'Incomplete', isChecked: showIncomplete}, 
            {value: 'all', label: 'All', isChecked: !showIncomplete}]}
            onChange={(value:string)=>{
                changeFilters(value);
            }
        }/>
    </TodosControlsContainer>  
        {isAddOpen && <AddModal 
        onAddTodo={(todo:Todo)=>{setIsAddOpen(false);onAddTodo(todo);}}
        onClose={()=>{setIsAddOpen(false); }}/>}
    </>
}