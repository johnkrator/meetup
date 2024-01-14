import {Alert, Badge, Box, Button, Container, FormControl, Grid, Heading, Input} from "@chakra-ui/react";
import {IoSearch} from "react-icons/io5";
import {CiLocationOn} from "react-icons/ci";
import {formActions, IFormAction} from "../data.ts";
import {useState} from "react";

const FormSection = () => {
    const [activeBadge, setActiveBadge] = useState<IFormAction["id"] | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");

    const isDisabled = !searchTerm || !location;

    const handleBadgeClick = (id: IFormAction["id"]) => {
        setActiveBadge(id);
    };

    function handleSearch() {
        if (!searchTerm || !location) {
            setError("Please fill out both fields before searching");
            return;
        }
    }

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
                    {error && (
                        <Alert status="error" color="white" borderRadius="xl">
                            {error}
                        </Alert>
                    )}
                    <Heading as="h3" size="lg" mb={7} fontWeight="bold">
                        What do want to do?
                    </Heading>
                    <Box display="flex" gap={2}
                         flexDirection={{sm: "column", md: "row", lg: "row", xl: "row", base: "column"}} my={5}>

                        <FormControl>
                            <Box position="relative">
                                <Input type="text" placeholder="Search for 'tennis'" borderRadius="lg"
                                       value={searchTerm}
                                       onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Box position="absolute" top="3" right="3">
                                    <IoSearch/>
                                </Box>
                            </Box>
                        </FormControl>

                        <FormControl>
                            <Box position="relative">
                                <Input type="text" placeholder="Location"
                                       value={location}
                                       onChange={(e) => setLocation(e.target.value)}
                                />
                                <Box position="absolute" top="3" right="3">
                                    <CiLocationOn/>
                                </Box>
                            </Box>
                        </FormControl>
                    </Box>
                    <Button w="100%" variant="solid" colorScheme="red"
                            disabled={isDisabled}
                            _disabled={{
                                bg: "gray.300",
                                cursor: "not-allowed!important",
                            }}
                            onClick={handleSearch}
                    >
                        Search
                    </Button>
                </Box>

                <Box>
                    <Heading as="h3" mb={6}>See what's happening</Heading>
                    <Box display="flex" flexWrap="wrap">
                        {formActions.map((item) => (
                            <Badge cursor="pointer" key={item.id} px={3} py={2} fontWeight={600} mr={2}
                                   mb={4}
                                   textTransform="capitalize"
                                   bg={activeBadge === item.id ? "blue.300" : "blue.100"}
                                   color={activeBadge === item.id ? "white" : "#ffff"}
                                   onClick={() => handleBadgeClick(item.id)}
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