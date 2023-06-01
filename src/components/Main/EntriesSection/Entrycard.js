import "./Entrycard.css"

export default function Entrycard({date, motto, notes}){
    return(
        <>
        <p className="Entrycard-date">{date}</p>
        <h3>{motto}</h3>
        <p>{notes}</p>
        </>
    )
}