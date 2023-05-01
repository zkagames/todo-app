import { useEffect, useState } from "react";
import { Header } from "./components/header/header";
import { Table } from "./components/table/table";
import { Todo, Priority } from "./types";
import { mockServer } from "./mock-server/todos";
import { MainContainer, TablePageContainer } from "./style";
import { tableConfig } from "./components/todos/todos-table-config";
import { SortOrder, TableRow } from "./components/table/table-types";
import { TodosControls } from "./components/todo-controls/todo-controls";
import { AddModal } from "./components/add-modal/add-modal";
export const App =()=> {

  const [filters, setFilters] = useState({
    sort_by: 'created_at',
    sort_order: 'desc' as SortOrder
  });

  const [todos, setTodos] = useState<Array<Todo>>(mockServer.getTodos(filters));

  const onChangeRow = (row:TableRow)=>{
    setTodos(mockServer.setTodos(todos.map(todo=>{
      if(todo.id===row.id){
        return row as Todo;
      };
      return todo;
    })));
  }

  const onAddTodo = (todo:Todo)=>{
    const createdAt = (new Date()).getTime()
    setTodos(mockServer.setTodos([...todos,todo]))
  }

  useEffect(()=>{ 
    setTodos(mockServer.getTodos(filters)); // temp local https cors
  },[filters, todos.length]);

  return (
   <MainContainer>
    <Header todos={todos}></Header>
    <TablePageContainer>
      <TodosControls tableFilters={filters} onChangeFilters={(newFilters)=>setFilters(newFilters)} onAddTodo={(todo:Todo)=>onAddTodo(todo)}/>
      <Table data={todos} tableConfig={tableConfig} tableFilters={filters} onChangeRow={onChangeRow} onChangeFilters={(newFilters)=>setFilters(newFilters)}></Table>
    </TablePageContainer>
    
   </MainContainer>
  );
}
