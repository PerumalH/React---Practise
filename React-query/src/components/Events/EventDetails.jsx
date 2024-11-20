import { Link, Outlet, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Delete, fetchEvent, queryclient } from "../../utils/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function EventDetails() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["event-details", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate } = useMutation({
    mutationFn: Delete,
    onSuccess: () => queryclient.invalidateQueries({ queryKey: ["events"] }),
  });

  const formattedDate = new Date(data ? data.date : "").toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>

      <article id="event-details">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <header>
              <h1>{data ? data.title : ""}</h1>
              <nav>
                <Link to="/events" onClick={() => mutate({ id })}>
                  Delete
                </Link>
                <Link to="edit">Edit</Link>
              </nav>
            </header>
            <div id="event-details-content">
              <img
                src={`http://localhost:3000/${data ? data.image : ""}`}
                alt={data ? data.title : ""}
              />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{data ? data.location : ""}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>{formattedDate}</time>
                </div>
                <p id="event-details-description">
                  {data ? data.description : ""}
                </p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
