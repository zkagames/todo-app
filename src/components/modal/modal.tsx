import { Close, ModalBack, ModalContent, ModalContentInner, ModalTitle } from "./modal.style"

export const Modal = ({children, title, onClose}:{children: JSX.Element, title:string, onClose:(data?:object)=>void})=>{
    return <ModalBack onClick={()=>onClose()}>
        <ModalContent onClick={(e)=>e.stopPropagation()}>
            <ModalTitle>{title}<Close onClick={()=>onClose()}>X</Close></ModalTitle>
            <ModalContentInner>{children}</ModalContentInner>
        </ModalContent>
        </ModalBack>
}