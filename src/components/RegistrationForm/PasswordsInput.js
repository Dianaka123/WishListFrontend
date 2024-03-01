import { CommonInput } from "./CommonInput";

export function PasspordsInput(){
    return(
        <>
            <CommonInput label={'Password'}/>
            <CommonInput label={'Confirm Password'}/>
        </>
    )
}