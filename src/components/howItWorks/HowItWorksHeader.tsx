import {Box, Heading} from "@chakra-ui/react";

const HowItWorksHeader = () => {
    return (
        <Box>
            <Heading textAlign="center" as="h3" size="lg">How meetup works</Heading>
            <Box textAlign="center">
                Meet new people who share your interest through online and in-person <br/> events. It's free to create
                an account.
            </Box>
        </Box>
    );
};

export default HowItWorksHeader;