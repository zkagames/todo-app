import { orderBy } from "lodash";
import { TableFilters } from "../components/table/table-types";
import { Status, Todo } from "../types";

//mock data as api token for real data has expired...

export const INITIAL_TODOS:Array<Todo> = [
        {
            "priority": '3',
            "created_at": 1682000000,
            "id": "dbd7fedf-f263-4ec2-8c5c-b8594faf199a",
            "title": "Finish the report",
            "status": "complete"
        },
        {
            "priority": '2',
            "created_at": 1680000000,
            "id": "a53d0d21-abd7-4c48-88b1-8a4734db33c6",
            "title": "Book a restaurant",
            "status": "incomplete"
        },
        {
            "priority": '2',
            "created_at": 1600000000,
            "id": "6632be5d-d80c-48bf-8f20-2c997486ae81",
            "title": "Prepare for the meeting",
            "status": "incomplete"
        },
        {
            "priority": '2',
            "created_at": 150000000,
            "id": "4fb382b6-f44f-4e25-8355-2a142db77772",
            "title": "Call mom",
            "status": "incomplete"
        },
        {
            "priority": '1',
            "created_at": 1400000000,
            "id": "0f61ca38-2c53-490b-a8f2-70d7a582c649",
            "title": "Buy groceries",
            "status": "incomplete"
        }
    ];


    export const mockServer = {
        allTodos: INITIAL_TODOS,
        getTodos: (filters:TableFilters)=>{
            const {sort_by, sort_order,status} = filters;
            const orderedTodos = orderBy(mockServer.allTodos, [sort_by], [sort_order]);
            if(!status){
                return orderedTodos;
            }
            return orderedTodos.filter(todo=>todo.status === status as Status);
        },
        setTodos: (todos:Array<Todo>)=>{
            mockServer.allTodos = [...todos];
            return  mockServer.allTodos;
        }
    }