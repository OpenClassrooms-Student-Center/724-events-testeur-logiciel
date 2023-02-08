import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});
const getLastEvent = (events) => {
  const now = new Date();
  const last = events
      .filter((evt) => new Date(evt.date).getTime() < now.getTime())
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  return last
}
export const api = {
  loadData: async () => {
    // const json = await fetch("/events.json");
    const data = {}
    const json = await fetch("http://localhost:8080/api/events");
    data.events =  await json.json();
    data.focus = data.events.filter(evt => (new Date(evt.date)).getTime() > Date.now() )
    data.last = getLastEvent(data.events)
    return data
  },
};

export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const getData = useCallback(async () => {
    try {
      setData(await api.loadData());
    } catch (err) {
      setError(err);
    }
  }, []);
  useEffect(() => {
    if (data) return;
    getData();
  });
  
  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useData = () => useContext(DataContext);

export default DataContext;
