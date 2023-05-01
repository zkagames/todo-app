
import { TableConfig, TableFilters, TableRow } from "./table-types"
import {TableHeader, TableHeaderCell, TableBody, TableCell , TableRowContainer, SortByContainer} from "./table.style"
import {ReactComponent  as SortBy} from './sort-by.svg';
import { flipSortOrder } from "./utils";



export const Table = ({data, onChangeRow, tableConfig, tableFilters, onChangeFilters}:{
    data: Array<TableRow>, tableConfig: TableConfig, onChangeRow: (row: TableRow)=>void, tableFilters: TableFilters, 
    onChangeFilters:(tableFilters: TableFilters)=>void})=>{

    const {sort_by, sort_order} = tableFilters;

    return  <>
            <TableHeader>
                {(tableConfig.columns).map(column=>{
                    return <TableHeaderCell key={column.id} width={column.width}
                        onClick={()=>onChangeFilters({
                            ...tableFilters,
                            sort_by: column.id,
                            sort_order : sort_by === column.id ? flipSortOrder(sort_order)  : sort_order
                        })}>
                       {column.displayName}

                       {sort_by === column.id && <SortByContainer><SortBy style={sort_order==='asc'?{} :{transform:'rotate(180deg)'}}/></SortByContainer>}
                       
                    </TableHeaderCell>
                    })}
            </TableHeader>

            <TableBody>
                    {data.map(row=>{   
                        return <TableRowContainer key={row.id}>
                            {(tableConfig.columns).map(column=>{
                          
                            return <TableCell key={row.id+column.id} width={column.width}> 
                                 {column.render ? column.render(row, onChangeRow) : row[column.id]}              
                            </TableCell>
                            })}
                        </TableRowContainer>
                    })}
            </TableBody>
        </>

}