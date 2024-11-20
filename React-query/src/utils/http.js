import { QueryClient } from "@tanstack/react-query";

export const queryclient = new QueryClient();

export async function fetchEvents({ signal, search }) {
  const response = await fetch(
    `http://localhost:3000/events${search ? `?search=${search}` : ""}`,
    { signal }
  );

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}

export async function createNewEvent(eventData) {
  const response = await fetch(`http://localhost:3000/events`, {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function imageEvent({ signal }) {
  const response = await fetch(`http://localhost:3000/events/images`, {
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the image");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { images } = await response.json();

  return images;
}

export async function Delete({ id }) {
  const response = await fetch(`http://localhost:3000/events/` + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the image");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return response.json();
}

export async function fetchEvent({ id, signal }) {
  const response = await fetch(`http://localhost:3000/events/` + id, {
    signal,
  });

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the image");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}
