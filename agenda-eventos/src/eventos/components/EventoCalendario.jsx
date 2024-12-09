
export const EventoCalendario = ({event}) => {
    
    const { title, notes, location } = event;

    return (
        <>
            <strong>{ title }</strong>
            <span>- { notes }</span><br /><br />
            <span>{ <i className="bi bi-pin-map-fill"></i> } { location }</span> 
        </>
    )
}