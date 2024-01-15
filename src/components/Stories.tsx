import {Box, Container, Grid, Heading, Image} from "@chakra-ui/react";
import {stories} from "../data.ts";

const Stories = () => {
    return (
        <Container maxWidth="container.xl">
            <Box py={10}>
                <Heading as="h1" size="lg" fontWeight="semibold" textAlign="center" color="gray.800">
                    Stories from Meetup
                </Heading>
                <Box textAlign="center" fontWeight="semibold" color="gray.600">
                    People Meetup have fostered community, learned new skill, started businesses, and made
                    life-long <br/>friends.
                    Learn how.
                </Box>
            </Box>

            <Grid
                templateColumns={{
                    sm: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(3, 1fr)",
                    base: "repeat(1, 1fr)",
                }}
                gap={6}
            >
                {stories.map((item) => (
                    <Box key={item.id} width="100%" maxW="sm" mx="auto" overflow="hidden"
                         display="flex" flexDirection="column" gap={2}>
                        <Box>
                            <Image src={item.banner} width="100%" height="100%" alt="upcoming event" objectFit="cover"/>
                        </Box>

                        <Box>
                            <Box fontWeight="semibold" color="gray.800" fontSize="lg">{item.title}</Box>
                            <Box fontWeight="semibold" color="gray.600" fontSize="xs">{item.description}</Box>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Container>
    );
};

export default Stories;