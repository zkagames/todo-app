
export type TableRow = {id:string} & Record<string, string | number>;

export type TableConfig = {
    columns: Array<{id:string,displayName:string, width?: number, 
    render?:(row: TableRow, 
        onChangeRow:(row:TableRow)=>void
        )=> JSX.Element}>
    };

export type SortOrder = 'asc' | 'desc';

export type TableFilters = {
    sort_by: string;
    sort_order: SortOrder;
} & Record<string, string>