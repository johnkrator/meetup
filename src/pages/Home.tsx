import Navbar from "../components/navbar/Navbar.tsx";
import HeroSection from "../components/hero-section/HeroSection.tsx";
import ImageCollection from "../components/hero-section/ImageCollection.tsx";
import Badges from "../components/Badges.tsx";
import FormSection from "../components/FormSection.tsx";
import HowMeetupWork from "../components/howItWorks/HowMeetupWork.tsx";
import UpcomingMeets from "../components/upcommingMeets.tsx";

const Home = () => {
    return (
        <div>
            <Navbar/>

            <HeroSection/>
            <ImageCollection/>

            <Badges/>
            <FormSection/>
            <HowMeetupWork/>

            <UpcomingMeets/>
        </div>
    );
};

export default Home;