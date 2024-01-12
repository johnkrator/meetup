import Navbar from "../components/navbar/Navbar.tsx";
import HeroSection from "../components/hero-section/HeroSection.tsx";
import {Box} from "@chakra-ui/react";
import ImageCollection from "../components/hero-section/ImageCollection.tsx";
import Badges from "../components/Badges.tsx";
import FormSection from "../components/FormSection.tsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Box>
                <HeroSection/>
                <ImageCollection/>
            </Box>
            <Badges/>
            <FormSection/>
        </div>
    );
};

export default Home;