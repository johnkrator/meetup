import {Box} from "@chakra-ui/react";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar/Navbar.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <Box>
            <Navbar/>
            <Box
                mt={"100px"}
                maxW={"1440px"}
                mx={"auto"}
                mb={{base: 0, md: "40px"}}
            >
                <Box width={{base: "full", md: "95%", lg: "85%"}} mx={"auto"}>
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;