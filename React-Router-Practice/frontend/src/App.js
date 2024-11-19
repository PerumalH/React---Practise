// Challenge / Exercise
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage, { loader } from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage.jsx";
import EditEventPage from "./pages/EditEventPage.jsx";

import RootEvent from "./pages/RootEvent.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { action } from "./utils/action.js";
// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events/",
        element: <RootEvent />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                // throw new Response(
                //   JSON.stringify({ message: "Could Not fetch events" }),
                //   { status: 500 }
                // );
                throw json(
                  { message: "Could Not fetch events" },
                  { status: 500 }
                );
              } else {
                return response;
              }
            },
          },
          {
            path: ":eventid",
            id: "event-id",
            loader: loader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: action,
              },
              { path: "edit", element: <EditEventPage />, action: action },
            ],
          },

          { path: "new", element: <NewEventPage />, action: action },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
