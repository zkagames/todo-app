import styled from 'styled-components';

export const SelectContainer = styled.div`
    border-radius: 8px;
    display:flex;
    color: white;
    flex-direction:column;
    width: max-content;
    cursor:pointer;
`

export const SelectCellsContainer = styled.div`
    position:absolute;
    border: 1px solid #979797;
    box-shadow: 0px 0px 4px 0px #00000026;
    background:white;
`

export const SelectCell = styled.div<{isChecked?: boolean}>`
    padding: 4px 8px;
    background: ${props=>props.isChecked ? '#E9E7E7': 'transparent'};
    *{width:min-content;}
`
