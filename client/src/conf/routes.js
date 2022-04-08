import Tweet from "../pages/Tweets.jsx";
import Tweet from "../pages/Login.jsx";

const routes = [
  { path: "/", name: "home", component: Tweet },
  { path: "/tweet", name: "tweet", component: Tweet },
  { path: "/login", name: "login", component: Login },
];

export default routes;
