import { useMemo } from "react"
import { Priority, Todo } from "../../types"
import { HeaderContainer, PriotiriesGroups, PriorityGroup, AppHeader, PriorityCount, PriorityColor, User, PrioritiesAndUser } from "./header.style"
import { countBy } from "lodash"
import { getPriorityText } from "../todos/todos.style";

const USER = 'H';

export const Header = ({todos}:{todos: Array<Todo>})=>{

    const priorties = useMemo(()=>
       countBy(todos, 'priority')
    ,[todos])
  
    return <HeaderContainer>
            <AppHeader>TODO</AppHeader>
            <PrioritiesAndUser>
                <PriotiriesGroups>
                    {Object.keys(priorties).map((key)=><PriorityGroup key={key}>
                    <PriorityColor priority={key as unknown as Priority} title={getPriorityText(key as Priority)}/><PriorityCount>{priorties[key]} </PriorityCount>
                    </PriorityGroup>)}
                </PriotiriesGroups>
                <User>{USER}</User>
            </PrioritiesAndUser>
        </HeaderContainer>
}