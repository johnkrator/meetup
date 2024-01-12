import {Badge, Box, Container} from "@chakra-ui/react";
import {badges} from "../data.ts";

const Badges = () => {
    return (
        <Box>
            <Container maxWidth="container.xl" mt={10}>
                <Box display="flex" flexDirection="row" flexWrap="wrap"
                     justifyContent={{
                         sm: "flex-start",
                         md: "space-between",
                         lg: "space-between",
                         xl: "space-between",
                         base: "flex-start"
                     }}>
                    {badges.map((item) => (
                        <Badge key={item.id} px={3} py={2} fontWeight={600} color="#ffff" mr={2} mb={4} bg="blue.100"
                               textTransform="capitalize"
                               borderRadius="3xl">
                            {item.text}
                        </Badge>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Badges;