import {Box, Button, Container, Image} from "@chakra-ui/react";
import brandLogo from "../../assets/brand-logo.svg";

const Navbar = () => {
    return (
        <Container maxWidth="container.xl">
            <header>
                <Box display="flex" alignItems="center" justifyContent="space-between" py={2}>
                    <Box>
                        <Image src={brandLogo} alt="logo"/>
                    </Box>

                    <Box>
                        <Button pr={3} color="gray.600" fontSize="sm" variant="link">
                            Login
                        </Button>
                        <Button color="gray.600" fontSize="sm" variant="link">
                            Signup
                        </Button>
                    </Box>
                </Box>
            </header>
        </Container>
    );
};

export default Navbar;