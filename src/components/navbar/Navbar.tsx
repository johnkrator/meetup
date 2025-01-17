import {Box, Button, Container, Image} from "@chakra-ui/react";
import brandLogo from "../../assets/brand-logo.svg";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Box position="sticky" top={0} zIndex={1} background="white">
            <Container maxWidth="container.xl">
                <header>
                    <Box display="flex" alignItems="center" justifyContent="space-between" py={2}>
                        <Box>
                            <Link to="/home">
                                <Image src={brandLogo} alt="logo"/>
                            </Link>
                        </Box>

                        <Box>
                            <Button as={Link} to="/login" pr={3} color="gray.600" fontSize="sm" variant="link">
                                Login
                            </Button>
                            <Button as={Link} to="/register" color="gray.600" fontSize="sm" variant="link">
                                Signup
                            </Button>
                        </Box>
                    </Box>
                </header>
            </Container>
        </Box>
    );
};

export default Navbar;