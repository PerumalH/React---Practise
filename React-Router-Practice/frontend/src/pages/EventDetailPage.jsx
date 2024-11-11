import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const param = useParams();
  return (
    <main>
      <div>EventDetailPage</div>
      <p>{param.eventid}</p>
    </main>
  );
};

export default EventDetailPage;
