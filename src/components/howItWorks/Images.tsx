import {Box, Button, Grid, Heading, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {HowItWorks} from "../../data.ts";

const Images = () => {
    return (
        <Box my={10}>
            <Grid templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(3, 1fr)"
            }} gap={6}>
                {HowItWorks.map(item => (
                    <Box key={item.id} display="flex" flexDirection="column" justifyContent="center"
                         alignItems="center">
                        <Image width="50%" src={item.image} alt="join group"/>
                        <Heading as="h5" size="md">
                            <Link to="#">
                                <Box color="blue.100" pb={4}>{item.title}</Box>
                            </Link>
                        </Heading>
                        <Box textAlign="center">
                            {item.text}
                        </Box>
                    </Box>
                ))}
            </Grid>
            <Box
                gridColumn="1 / span 3"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                my={10}
            >
                <Button _hover={{opacity: "0.8"}} fontWeight="normal" bg="blue.100" color="white">
                    Join Meetup
                </Button>
            </Box>
        </Box>
    );
};

export default Images;
