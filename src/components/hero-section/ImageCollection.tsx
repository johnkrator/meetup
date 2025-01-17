import {Box, Button, Container, Grid, Image} from "@chakra-ui/react";
import {FaArrowRight} from "react-icons/fa";
import {ImageCollectionData} from "../../data.ts";
import {Link} from "react-router-dom";

const ImageCollection = () => {
    return (
        <Box>
            <Container maxWidth="container.xl" mt={10}>
                <Grid templateColumns={{
                    sm: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(3, 1fr)",
                    base: "repeat(1, 1fr)"
                }}
                      gap={6}
                >
                    {ImageCollectionData.map((item) => (
                        <Link key={item.id} to={`/details/${item.id}`}>
                            <Box>
                                {item.image && <Image w="100%" borderRadius="lg" src={item.image}/>}
                                <Button color="teal" variant="link" mt={5} gap={3}>
                                    {item.text}
                                    <FaArrowRight/>
                                </Button>
                            </Box>
                        </Link>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ImageCollection;