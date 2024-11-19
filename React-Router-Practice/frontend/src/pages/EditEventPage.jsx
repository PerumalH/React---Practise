import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-id");
  return (
    <main>
      <EventForm method="PATCH" event={data.event} />
    </main>
  );
};

export default EditEventPage;
