import {Box, Container, Heading, Image} from "@chakra-ui/react";
import illustration from "../../assets/illustration.svg";

const HeroSection = () => {
    return (
        <Box>
            <Container maxWidth="container.xl">
                <Box display="flex" alignItems="center" py={2}
                     flexDirection={{sm: "column", md: "row", lg: "row", xl: "row", base: "column"}}>
                    <Box>
                        <Heading as="h1" size="2xl">
                            <Box fontWeight="black">
                                Dive in! There are so many things to do on Meetup
                            </Box>
                        </Heading>
                        <Box mt="6" fontWeight="medium">
                            Join a group to meet people, make friends, find support, grow a
                            business, and explore your interests. Thousands of events are
                            happening every day, both online and in person!
                        </Box>
                    </Box>
                    <Box mt={{base: "5", md: "0"}} w="100%">
                        <Image w="100%" src={illustration} alt="illustration"/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;