import { ToggleCell, ToggleContainer } from "./toggle.style"

type Option = {label:string, value:string, isChecked?: boolean};

export const Toggle = ({options, onChange}:{options: Array<Option>, onChange:(value:string)=>void})=>{
    return <ToggleContainer>
        {options.map(option=>
            <ToggleCell isChecked={option.isChecked} key={option.label} onClick={()=>onChange(option.value)}>{option.label}</ToggleCell>)
        }
    </ToggleContainer>
}