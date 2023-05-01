import { useState } from "react";
import { Modal } from "../modal/modal"
import { Footer, PtiorityContainer, Textarea, Title } from "./add-modal.style"
import { PrioritySelect } from "../priority-select/priority-select";
import { Priority, Todo } from "../../types";
import { Button } from "../button/button.style";

export const AddModal = ({onClose, onAddTodo}:{onClose:(data?:object)=>void, onAddTodo: (todo: Todo)=>void})=>{
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState<Priority>('1');
    
    return <Modal title={'Add task'} onClose={(data?:object)=>onClose(data)}>
        <>
            <Title>Add a task</Title>
            <Textarea onChange={e=>setTitle(e.target.value)} value={title}/>
            
            <PtiorityContainer>
                <Title>Priority</Title><PrioritySelect value={priority} onChange={(newPriority:Priority)=>
                    setPriority(newPriority)
                }/>
            </PtiorityContainer>

            <Footer>
                <Button isSecondary={true} onClick={()=>onClose()}>Cancel</Button>
                <Button onClick={()=>onAddTodo({
                    title, 
                    priority, 
                    created_at: (new Date()).getTime(),
                    id:  (new Date()).getTime()+'',
                    status: 'incomplete',
                    })}>Add</Button>
            </Footer>
        </>
        </Modal>
}