import {createBrowserRouter, Link} from "react-router-dom";
import {Button, Spinner} from "@chakra-ui/react";
import ErrorPage from "../pages/ErrorPage.tsx";
import Layout from "../components/Layout.tsx";
import {ComponentType, lazy, Suspense} from "react";

interface LoadableProps<T> {
    [key: string]: T;
}

const Loadable = <T, >(Component: ComponentType<LoadableProps<T>>) => {
    return (props: LoadableProps<T>) => {
        return (
            <Suspense
                fallback={
                    <div
                        style={{
                            width: "100%",
                            height: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Spinner color={"red.600"}/>
                    </div>
                }
            >
                <Component {...props} />
            </Suspense>
        );
    };
};

const Routes = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: (
                <Button
                    as={Link}
                    to={"/home"}
                    position={"fixed"}
                    bg={"red.600"}
                    color={"white"}
                    top={"50%"}
                    right={"50%"}
                    transform={"translate(50%, -50%)"}
                >
                    Home
                </Button>
            ),
            errorElement: <ErrorPage/>,
        },
        {
            path: "/",
            element: <Layout/>,
            children: [
                {path: "home", element: <Home/>},
                {path: "login", element: <Login/>},
                {path: "register", element: <Register/>},
                {path: "/details/:id", element: <ImageDetails/>},
            ]
        }
    ]);
};

const Home = Loadable(lazy(() => import("../pages/Home.tsx")));
const Login = Loadable(lazy(() => import("../pages/auth/Login.tsx")));
const Register = Loadable(lazy(() => import("../pages/auth/Register.tsx")));
const ImageDetails = Loadable(lazy(() => import("../pages/id/ImageDetails.tsx")));

export default Routes;