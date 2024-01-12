import {Badge, Box, Button, Container, FormControl, Grid, Heading, Input} from "@chakra-ui/react";
import {IoSearch} from "react-icons/io5";
import {CiLocationOn} from "react-icons/ci";
import {formActions} from "../data.ts";

const FormSection = () => {
    return (
        <Container maxWidth="container.xl">
            <Grid templateColumns={{
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(2, 1fr)",
                base: "repeat(1, 1fr)"
            }} gap={6}>
                <Box>
                    <Heading as="h3" size="lg" mb={7} fontWeight="bold">
                        What do want to do?
                    </Heading>
                    <Box display="flex" gap={2}
                         flexDirection={{sm: "column", md: "row", lg: "row", xl: "row", base: "column"}} my={5}>

                        <FormControl>
                            <Box position="relative">
                                <Input type="text" placeholder="Search for 'tennis'" borderRadius="lg"/>
                                <Box position="absolute" top="3" right="10">
                                    <IoSearch/>
                                </Box>
                            </Box>
                        </FormControl>

                        <FormControl>
                            <Box position="relative">
                                <Input type="text" placeholder="Location"/>
                                <Box position="absolute" top="3" right="10">
                                    <CiLocationOn/>
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                    <Button w="100%" variant="solid" colorScheme="red">Search</Button>
                </Box>

                <Box>
                    <Heading as="h3" mb={6}>See what's happening</Heading>
                    <Box display="flex" flexWrap="wrap">
                        {formActions.map((item) => (
                            <Badge key={item.id} px={3} py={2} fontWeight={600} color="#ffff" mr={2} mb={4}
                                   bg="blue.100"
                                   textTransform="capitalize"
                                   borderRadius="3xl">
                                {item.text}
                            </Badge>
                        ))}
                    </Box>
                </Box>
            </Grid>
        </Container>
    );
};

export default FormSection;