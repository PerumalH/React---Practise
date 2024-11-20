import { json, redirect } from "react-router-dom";

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH" || method === "DELETE") {
    const eventId = params.eventid;
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(
    url,
    method === "DELETE"
      ? {
          method: method,
        }
      : {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        }
  );

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
}

export const throttle = (fun, delay) => {
  let timer;
  return (...arg) => {
    if (!timer) {
      fun(...arg);
      timer = setTimeout(() => (timer = null), delay);
    }
  };
};

export const debounce = (fun, delay) => {
  let timer;

  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => fun(...arg), delay);
  };
};
