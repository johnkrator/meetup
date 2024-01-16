import Navbar from "../components/navbar/Navbar.tsx";
import HeroSection from "../components/hero-section/HeroSection.tsx";
import ImageCollection from "../components/hero-section/ImageCollection.tsx";
import Badges from "../components/Badges.tsx";
import FormSection from "../components/FormSection.tsx";
import HowMeetupWork from "../components/howItWorks/HowMeetupWork.tsx";
import UpcomingMeets from "../components/upcommingMeets.tsx";
import PopularGroups from "../components/PopularGroups.tsx";
import AppDownloadOptions from "../components/AppDownloadOptions.tsx";
import Stories from "../components/Stories.tsx";
import Footer from "../components/Footer.tsx";
import {Box, Image} from "@chakra-ui/react";
import imageBg from "../assets/bg.svg";

const Home = () => {
    return (
        <Box>
            <Box position={"absolute"} top={0} left={0} right={0}>
                <Navbar/>
                <HeroSection/>
                <ImageCollection/>
                <Badges/>
                <FormSection/>
                <HowMeetupWork/>
                <UpcomingMeets/>
                <PopularGroups/>
                <AppDownloadOptions/>
                <Stories/>
                <Footer/>
            </Box>

            <Box position={"relative"} top={0} bottom={0} left={0} right={0} height={"100vh"} zIndex={-1}>
                <Image src={imageBg} alt={"bg"} w={"80%"} m={"auto"} sizes={"300"} objectFit={"cover"}/>
            </Box>
        </Box>
    );
};

export default Home;