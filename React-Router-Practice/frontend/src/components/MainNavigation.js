import classes from "./MainNavigation.module.css";
import { NavLink, useParams } from "react-router-dom";
function MainNavigation() {
  const param = useParams();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              EventPages
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/events/${param.eventid}`}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              EventDetailPage
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events/new"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              NewEventPage
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/events/:eventid/edit"}
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              EditEventPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
