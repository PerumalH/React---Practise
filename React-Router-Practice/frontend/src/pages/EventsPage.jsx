import React from "react";
import { Link } from "react-router-dom";
const Dummy = [11, 12, 44, 22, 55, 20];
const EventsPage = () => {
  return (
    <main>
      <div>EventsPage</div>
      <ul>
        {Dummy.map((k) => {
          return (
            <li key={k}>
              <Link to={`/events/${k}`}>{`Event ${k}`}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default EventsPage;
