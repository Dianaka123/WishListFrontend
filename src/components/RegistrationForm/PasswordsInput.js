import { CommonInput } from "./CommonInput";

export function PasswordsInput(){
    return(
        <>
            <CommonInput label={'Password'}/>
            <CommonInput label={'Confirm Password'}/>
        </>
    )
}