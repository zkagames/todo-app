
import styled from 'styled-components';
import { Priority } from '../../types';

export const PriorityCell = styled.div<{priority: Priority}>`
    background-color: ${props=>getPriorityBackgroundColor(props.priority)};
    color: ${props=>getPriorityColor(props.priority)};
    display: flex;
    align-items: center;
    padding: 4px 16px;
    border-radius: 20px;
`

export const StatusCell = styled.div`
    display:flex;
    gap: 16px;
    cursor:pointer;
`

export const StatusTitle = styled.div<{isComplete: boolean}>`
    text-decoration: ${props=>props.isComplete ? 'line-through': 'none'};
    text-underline-offset: 16px;
`


export const getPriorityBackgroundColor = (priority: Priority)=>{

    switch (priority){
        case '1':
            return '#FFE3E3';
        case '2':
            return '#FFF4CC';
        case '3':
            return '#E0FDEF';
        default:
            return 'gray';
    }
}

export const getPriorityColor = (priority: Priority)=>{
    switch (priority){
        case '1':
            return '#FD626A';
        case '2':
            return '#FFA756';
        case '3':
            return '#00D2BB';
        default:
            return 'darkgray';
    }
}

export const getPriorityText = (priority: Priority)=>{
    switch (priority){
        case '1':
            return 'High';
        case '2':
            return 'Medium';
        case '3':
            return 'Low';
        default:
                return 'unknown';
    }
}


