import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Menu from "../../containers/Menu";
import EventCard from "../../components/EventCard";

import "./style.scss";
import Logo from "../../components/Logo";
import {useData} from "../../contexts/DataContext";
import InscriptionForm from "../../containers/InscriptionForm";
import Modal from "../../containers/Modal";
import ModalEvent from "../../containers/ModalEvent";


const EventPage = () => {
    const {id} = useParams()
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [last, setLast] = useState(undefined);
    const {data} = useData();
    useEffect(() => {
        if (data) {
            setLast(data.last);
        }
    }, [data]);

const toLocal = (date) => {
    const now = new Date()
    const local = new Date(date);
    local.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
    }
    useEffect( () => {
        async function getData(){
            const response = await fetch(`http://localhost:8080/api/events/${id}`);
            const info = await response.json()
            setEvent(info)
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
                        <h3>Location</h3>
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3152.8137626462176!2d-122.4173534!3d37.7944041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f2960c5a5f%3A0xdfcd6cebc1ae9a35!2sSan%20Francisco%20Cable%20Car%20Museum!5e0!3m2!1sfr!2sec!4v1675261108657!5m2!1sfr!2sec"
                            width="400" height="300" style={{border:0}}  allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />
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
                {last &&
                    <Modal key={last.id} Content={<ModalEvent event={last.id} />}>
                        {({ setIsOpened }) => (
                            <EventCard
                                onClick={() => setIsOpened(true)}
                                imageSrc={last.cover}
                                title={last.title}
                                date={new Date(last.date)}
                                label={last.type}
                            />
                        )}
                    </Modal>
                }
            </div>
            <div className="col contact">
                <h3>Contactez-nous</h3>
                <address>45 avenue de la République, 75000 Paris</address>
                <div>01 23 45 67 89</div>
                <div>contact@77events.com</div>
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
