export function GenderRadio({id, gender}){
    return(
        <>
            <input type="radio" id={id} name="gender"/>
            <label for={id} className="gender-label">{gender}</label>
        </>
    )
}