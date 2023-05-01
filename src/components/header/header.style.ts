import styled from 'styled-components';
import { Priority } from '../../types';
import { getPriorityBackgroundColor } from '../todos/todos.style';


export const HeaderContainer = styled.div`
    background:white;
    height: 80px;
    box-shadow: 0px 0px 6px 0px #00000014;
    display:flex;
    align-items:center;
    padding-left:41px;
    padding-right:16px;
    justify-content: space-between;
`

export const AppHeader = styled.div`
    font-family: Comfortaa;
    font-size:20px;
`


export const PriotiriesGroups = styled.div`
    display:flex;
    gap:26px;
`

export const PriorityGroup = styled.div`
    display:flex;
    gap: 4px;
    align-items:center;
`

export const PriorityCount = styled.div`
display:flex;
font-weight:700;
fotn-size:16px;
`

export const PriorityColor = styled.div<{priority: Priority}>`
    display:flex;
    width:12px;
    height:12px;
    border-radius:6px;
    background-color: ${props=>getPriorityBackgroundColor(props.priority)};
`

export const PrioritiesAndUser = styled.div`
    display:flex;
    gap:60px;
`

export const User = styled.div`
    background-color:black;
    width:48px;
    height:48px;
    border-radius:24px;
    color:white;
    font-size:20px;
    font-weight:400;
    display:flex;
    align-items:center;
    justify-content:center;
`