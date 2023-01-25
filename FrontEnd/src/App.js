/* istanbul ignore file */
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./App.scss";
import Page from "./pages/Home";
import EventPage from "./pages/Event";
import { DataProvider } from "./contexts/DataContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page />,
    },
    {
        path: "/event/:id",
        element: <EventPage />
    }
]);
function App() {
  return (
    <DataProvider>
        <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
