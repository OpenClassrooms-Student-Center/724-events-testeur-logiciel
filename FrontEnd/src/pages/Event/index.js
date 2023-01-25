import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Menu from "../../containers/Menu";
import EventCard from "../../components/EventCard";

import "./style.scss";
import Logo from "../../components/Logo";
import Icon from "../../components/Icon";
import {useData} from "../../contexts/DataContext";
import InscriptionForm from "../../containers/InscriptionForm";


const EventPage = () => {
    const {last} = useData()
    const {id} = useParams()
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)

const toLocal = (date) => {
    const now = new Date()
    const local = new Date(date);
    local.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
    }
    useEffect( () => {
        async function getData(){
            const response = await fetch(`http://localhost/api/events/${id}`);
            const data = await response.json()
            setEvent(data)
            setLoading(false)
        }
        getData()
    }, [])
    const month = event ? new Intl.DateTimeFormat('fr-FR', { month: 'long'}).format(new Date(event.date)) : null
    return <>
        <header>
            <Menu />
        </header>
        {loading ? <p>Event {id} Loading</p> :
            <div className="Event">
                <div className="Event__imageContainer">
                    <img
                        data-testid="card-image-testid"
                        src={event.cover}
                        alt={event.title}
                    />
                </div>
                <div className="Event__infocontainer">
                    <div className="Event__title">
                        <div className="Event__titleLabel">{event.title}</div>
                        <div className="Event__titlePeriode">{`${event.periode} ${month}`}</div>
                    </div>
                    <div className="Event__descriptionContainer">
                        <h3>Description</h3>
                        <div>{event.description}</div>
                    </div>
                    <div className="Event__descriptionContainer">
                        <h3>Participants</h3>
                        <div>{event.nb_guest} participants</div>
                    </div>
                    <div className="Event__descriptionContainer">
                        <h3>Prestations</h3>
                        {event.prestations.map((presta) => (
                            <div key={presta}>{presta}</div>
                        ))}
                    </div>
                    {(new Date(event.date)).getTime() > Date.now() && <InscriptionForm date={toLocal(event.date)} id={id} />}
                </div>

            </div>
        }
        <footer className="row">
            <div className="col presta">
                <h3>Notre derniére prestation</h3>
                <EventCard
                    imageSrc={last?.cover}
                    title={last?.title}
                    date={new Date(last?.date)}
                    small
                    label="boom"
                />
            </div>
            <div className="col contact">
                <h3>Contactez-nous</h3>
                <address>45 avenue de la République, 75000 Paris</address>
                <div>01 23 45 67 89</div>
                <div>contact@77events.com</div>
                <div>
                    <a href="#twitch">
                        <Icon name="twitch" />
                    </a>
                    <a href="#facebook">
                        <Icon name="facebook" />
                    </a>
                    <a href="#twitter">
                        <Icon name="twitter" />
                    </a>
                    <a href="#youtube">
                        <Icon name="youtube" />
                    </a>
                </div>
            </div>
            <div className="col description">
                <Logo size="large" />
                <p>
                    Une agence événementielle propose des prestations de service
                    spécialisées dans la conception et l&apos;organisation de divers événements
                    tels que des événements festifs, des manifestations sportives et
                    culturelles, des événements professionnels
                </p>
            </div>
        </footer>
    </>
}

export default EventPage;
