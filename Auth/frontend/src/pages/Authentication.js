import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParam = new URL(request.url).searchParams;
  const mode = searchParam.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "unsupported mode" }, { status: 422 });
  }
  const data = await request.formData();

  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "could not authenticate user." }, { status: 500 });
  }
  //soon : manage the auth

  const restoken = await response.json();
  localStorage.setItem("token", restoken.token);
  return redirect("/");
}
