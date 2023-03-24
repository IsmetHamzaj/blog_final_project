import Home from "../Pages/Home"
import Login from "./Login/Login"

const Links = [
    {
        path: "/",
        Component: <Home />,
        private: true
    },
    {
        path: "/login",
        Component: <Login />,
        private: false
    }
]


export default Links