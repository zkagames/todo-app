import styled from 'styled-components';

export const ToggleContainer = styled.div`
    border-radius: 8px;
    display:flex;
    background: #D4D4D4;
    color: white;
    height:28px;
    border:2px solid #D4D4D4;
`

export const ToggleCell = styled.div<{isChecked?: boolean}>`
    border-radius: 8px;
    cursor:pointer;
    width:122px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: ${props=>props.isChecked ? 'black': 'transparent'};
`
