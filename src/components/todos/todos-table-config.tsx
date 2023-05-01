import { TableRow } from "../table/table-types";
import { PriorityCell, StatusCell, StatusTitle, getPriorityText } from "./todos.style";
import { Priority, Status } from "../../types";
import { format, isToday} from 'date-fns'
import {ReactComponent  as Checbkox} from './checkbox.svg';
import {ReactComponent  as ChecbkoxOn} from './checkbox-on.svg';
import { PrioritySelect } from "../priority-select/priority-select";

 const flipStatus = (status:Status)=>{
    return status ==='complete' ? 'incomplete' : 'complete';
}

export const tableConfig = {
    columns: [
        {
            id: 'title', displayName: "Task Name", width:2,
            render: (row : TableRow, onChangeRow: (row:TableRow)=>void) => {
                const isComplete = (row['status']) === 'complete';
               
                return <StatusCell onClick={()=>{
                            onChangeRow({...row, status: flipStatus(row['status'] as Status)})
                        }}>
                    {isComplete ? <ChecbkoxOn/> : <Checbkox/>}
                    <StatusTitle isComplete={isComplete}>{row['title']}</StatusTitle>
                    </StatusCell>
              }
        },
        {
            id: 'created_at', displayName: 'Created At',
            render: (row : TableRow) => {
              const date = Number(row['created_at']);
              if(isToday(date)){
                return <>Today {format(date, 'HH:mm')}</>;
              }
              return <>{format(date, 'dd MMM HH:mm')}</>
            } 
        },
        {
            id: 'priority', displayName: 'Priority',
            render: (row : TableRow, onChangeRow: (row:TableRow)=>void) => (
                <PrioritySelect value={row['priority'] as Priority} onChange={(priority:Priority)=>
                    onChangeRow({...row, priority})
                }/>

              ),

        }
    ]
}