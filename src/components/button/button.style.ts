import styled from 'styled-components';

export const Button = styled.div<{isSecondary?: boolean}>`
    background:${props=>props.isSecondary ? '#DDDDDD': 'black'};
    color:white;
    cursor:pointer;
    padding: 6px 26px;
    height: 20px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 8px;

`