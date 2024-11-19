import React from "react";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return (
    <main>
      <EventForm method="POST" />
    </main>
  );
};

export default NewEventPage;
