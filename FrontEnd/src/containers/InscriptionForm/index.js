import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field from "../../components/Field";

import Button, { BUTTON_TYPES } from "../../components/Button";

// const mockContactApi = () => new Promise((resolve) => { setTimeout(resolve, 1000); })

const Form = ({ onSuccess, onError, date, id }) => {
    const toLocal = (myDate) => {
        const now = new Date()
        const local = new Date(myDate);
        local.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    }
  const [sending, setSending] = useState(false);
  const [inscriptionDate, setInscriptionDate] = useState(toLocal(date))
    const changeDate = (e) => {
      setInscriptionDate(e.target.value)
    }
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();

      const contact = {}
       contact.eventId = id
      contact.name = evt.target[0].value
      contact.surname = evt.target[1].value
      contact.date = evt.target[2].value
      contact.email = evt.target[3].value
      setSending(true);
      // We try to call mockContactApi
      try {
        await fetch('http://localhost:8080/api/inscription', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        setSending(false);

      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [onSuccess, onError]
  );
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          <Field placeholder="" label="Nom" />
          <Field placeholder="" label="Prénom" />
          <label htmlFor="date">Date
          <input type="date" id="date" value={inscriptionDate} name="date" onChange={changeDate} />
          </label>
          <Field  label="Email" />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
    date: PropTypes.instanceOf(Date),
    id: PropTypes.number
}

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
    date: () => null,
    id:() => null
}

export default Form;
