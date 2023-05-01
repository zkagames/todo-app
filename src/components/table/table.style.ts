import styled from 'styled-components';

const BORDER = '1px solid rgba(38,35,43,0.1)';

export const TableHeader = styled.div`
    dispaly:flex;
    background: black;
    box-shadow: 0px 2px 8px 0px #0000005C;
    border-radius: 8px 8px 0px 0px;
    height: 60px;
    display:flex;
`

export const TableHeaderCell = styled.div<{width?:number}>`
   display:flex;
   flex: ${props=>props.width ?? 1};
   color:white;
   font-size:16px;
   font-weight: 600;
   align-items:center;
   padding: 0px 56px;
   cursor:pointer;
`

export const TableBody = styled.div`
    box-shadow: 0px 0px 8px 0px #0000000D;
    background:white;
    border-radius: 0px 0px 8px 8px;
    overflow:auto;
    max-height: calc(100vh - 200px);

`

export const TableRowContainer = styled.div`
    display:flex; 
    background:white;
    border-bottom: ${BORDER};
`

export const TableCell = styled.div<{width?:number}>`
   display:flex;
   flex: ${props=>props.width ?? 1};
   color: #323232;
   font-size:16px;
   font-weight: 600;
   padding: 32px 56px;
   border-right: ${BORDER};
`

export const SortByContainer = styled.div`
    display:flex;
    align-items:center;
    margin-left:26px;
`