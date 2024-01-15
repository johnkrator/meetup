import {Box, Container, Grid, Heading, Image, Link} from "@chakra-ui/react";
import {popularGroups} from "../data.ts";

const PopularGroups = () => {
    return (
        <Container maxWidth="container.xl">
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={10} mb={5}
                 flexDirection={{sm: "column", md: "row", lg: "row", xl: "row", base: "column"}}>
                <Heading as="h3" size="lg">Popular groups</Heading>
                <Link>
                    <Box color="teal.500" fontWeight="semibold">Explore more groups</Box>
                </Link>
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
                {popularGroups.map((item) => (
                    <Box key={item.id} width="100%" maxW="sm" mx="auto" overflow="hidden" rounded="lg"
                         border="1px" borderColor="gray.400"
                         display="flex" flexDirection="column" gap={2}>
                        <Box display="flex" flexDirection="row" px={5} pt={5}>
                            <Image src={item.banner} width={14} height={14} objectFit="cover" alt="upcoming event"
                                   rounded="lg"/>
                            <Box bg="white" top={3} ml={2} px={1} fontWeight="semibold"
                                 display="flex"
                                 flexDirection="row" alignItems="center" gap={2} borderRadius="md"
                                 color="gray.600">
                                {item.title}
                            </Box>
                        </Box>

                        <Box
                            borderBottom="1px"
                            borderColor="gray.400"
                            marginX="5"
                            mb={3}
                        />

                        <Box color="gray.600" fontWeight="semibold" fontSize="xs" px={5}>
                            {new Date(item.date).toLocaleString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                                timeZone: "Africa/Lagos"
                            })} NPT
                        </Box>

                        <Box px={5} fontSize="lg" fontWeight="semibold" color="gray.600">{item.description}</Box>
                    </Box>
                ))}
            </Grid>
        </Container>
    );
};

export default PopularGroups;