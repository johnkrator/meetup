import {Box, Container} from "@chakra-ui/react";
import HowItWorksHeader from "./HowItWorksHeader.tsx";
import Images from "./Images.tsx";

const HowMeetupWork = () => {
    return (
        <Container maxWidth="container.xl">
            <Box my={10}>
                <HowItWorksHeader/>
                <Images/>
            </Box>
        </Container>
    );
};

export default HowMeetupWork;