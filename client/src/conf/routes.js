import Post from "../pages/Posts.jsx";
import Login from "../pages/Login.jsx";

const routes = [
  { path: "/", name: "home", component: Post },
  { path: "/post", name: "post", component: Post },
  { path: "/login", name: "login", component: Login },
];

export default routes;

