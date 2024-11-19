import React from "react";
import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-id");
  return (
    <main>
      <EventItem event={data.event} />
    </main>
  );
};

export default EventDetailPage;

export const loader = async ({ params }) => {
  const id = params.eventid;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could Not fetch events" }, { status: 500 });
  } else {
    return response;
  }
};
