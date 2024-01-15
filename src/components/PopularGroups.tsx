import {Box, Container, Grid, Heading, Image, Link} from "@chakra-ui/react";
import {upcomingMeets} from "../data.ts";
import {FaVideo} from "react-icons/fa";
import {BsBoxArrowUp} from "react-icons/bs";

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
                    lg: "repeat(4, 1fr)",
                    xl: "repeat(4, 1fr)",
                    base: "repeat(1, 1fr)",
                }}
                gap={6}
            >
                {upcomingMeets.map((item) => (
                    <Box key={item.id} width="100%" maxW="sm" mx="auto" overflow="hidden" rounded="lg" shadow="lg"
                         display="flex" flexDirection="column" gap={2}>
                        <Box position="relative">
                            <Image src={item.banner} width="100%" alt="upcoming event"/>
                            <Box bg="white" position="absolute" top={3} ml={2} px={1} fontWeight="semibold"
                                 display="flex"
                                 flexDirection="row" alignItems="center" gap={2} borderRadius="md" color="gray.600">
                                <FaVideo/>
                                {item.sticker}
                            </Box>
                        </Box>

                        <Box color="gray.600" fontWeight="semibold" fontSize="sm" px={5}>
                            Sat, Aug 14 @ 9:45 PM NPT
                        </Box>

                        <Box px={5}>
                            <Box fontWeight="semibold" color="gray.600" fontSize="lg">{item.title}</Box>
                            <Box fontWeight="semibold" color="gray.600" fontSize="xs">{item.description}</Box>
                        </Box>

                        <Box display="flex" flexDirection="row"
                             gap={{sm: "200px", md: "200px", lg: "125px", xl: "125px", base: "200px"}}
                             alignItems="center" px={5} pb={2}>
                            <Box display="flex" flexDirection="row" alignItems="center" gap={5}>
                                <Box display="flex" flexDirection="row" alignItems="center">
                                    <Image boxSize={10} borderRadius="full"
                                           src="https://i.pinimg.com/564x/ae/98/0b/ae980bec7c52c7fed4f9fd04ab4546c8.jpg"
                                           mr="-15px"
                                           objectFit="cover"
                                           alt="segun adebayo"/>

                                    <Image boxSize={10} borderRadius="full" objectFit="cover"
                                           src="https://i.pinimg.com/564x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg"
                                           mr="-15px"
                                           alt="segun adebayo"/>

                                    <Image boxSize={10} borderRadius="full"
                                           src="https://i.pinimg.com/564x/16/94/a8/1694a8a8b9cad8e7d459e43bf02cbc5b.jpg"
                                           mr="-15px"
                                           objectFit="cover"
                                           alt="segun adebayo"/>
                                </Box>
                                <Box color="gray.600" fontWeight="semibold">{item.count}</Box>
                            </Box>

                            <Box color="gray.600" fontWeight="semilbold" cursor="pointer">
                                <BsBoxArrowUp/>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Grid>
        </Container>
    );
};

export default PopularGroups;