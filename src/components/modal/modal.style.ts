import styled from 'styled-components';

export const ModalBack = styled.div`
    background:rgba(0,0,0,0.7);
    position:fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`


export const ModalTitle = styled.div`
    background:black;
    color: white;
    height: 60px;
    font-size:20px;
    display:flex;
    padding: 0px 16px 0px 28px;
    align-items:center;
    justify-content:space-between;
    text-transform: uppercase;
    border-radius: 8px 8px 0px 0px;
`

export const ModalContent = styled.div`
    background:white;
    min-width:750px;
    min-height:400px;
    border-radius: 8px;
`


export const ModalContentInner = styled.div`
   padding:16px;
   font-size:16px;
`


export const Close = styled.div`
  cursor:pointer;
`