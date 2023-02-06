import {useState, useEffect} from "react";


import "./style.scss";

const ModalEvent = () => {
    const [event, setEvent] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8080/api/events/last`);
            const data = await response.json();
            setEvent(data);
            setIsLoading(false);
        };
        fetchData();
    })

    return (isLoading ? <div>Loading...</div> :
        <div className="ModalEvent">
            <div className="ModalEvent__imageContainer">
                <img
                    data-testid="card-image-testid"
                    src={event.cover}
                    alt={event.title}
                />
            </div>
            <div className="ModalEvent__title">
                <div className="ModalEvent__titleLabel">{event.title}</div>
                <div className="ModalEvent__titlePeriode">{event.periode}</div>
            </div>
            <div className="ModalEvent__descriptionContainer">
                <h3>Description</h3>
                <div>{event.description}</div>
            </div>
            <div className="ModalEvent__descriptionContainer">
                <h3>Participants</h3>
                <div>{event.nb_guesses} participants</div>
            </div>
            <div className="ModalEvent__descriptionContainer">
                <h3>Prestations</h3>
                {event?.prestations.map((presta) => (
                    <div key={presta}>{presta}</div>
                ))}
            </div>
        </div>
    );
}


export default ModalEvent;
