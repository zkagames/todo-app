import { SortOrder } from "./table-types";

export const flipSortOrder = (sortOrder:SortOrder)=>{
    return sortOrder ==='asc' ? 'desc' : 'asc';
}