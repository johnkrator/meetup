import {Badge, Box, Container} from "@chakra-ui/react";
import {badges} from "../data.ts";
import {useState} from "react";
import {IBadge} from "../data.ts";

const Badges = () => {
    const [activeBadge, setActiveBadge] = useState<IBadge["id"] | null>(null);

    const handleBadgeClick = (id: IBadge["id"]) => {
        setActiveBadge(id);
    };

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
                        <Badge cursor="pointer" key={item.id} px={3} py={2} fontWeight={600} mr={2} mb={4}
                               bg={activeBadge === item.id ? "blue.300" : "blue.100"}
                               color={activeBadge === item.id ? "white" : "#ffff"}
                               onClick={() => handleBadgeClick(item.id)}
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