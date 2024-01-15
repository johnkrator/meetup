import {Box, Container, Image} from "@chakra-ui/react";
import deviceRight from "../assets/device-right.webp";
import deviceLeft from "../assets/device-left.webp";
import meetLogo from "../assets/meetup-logo.svg";
import apple from "../assets/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import google from "../assets/google-play-badge-logo-svgrepo-com.svg";

const AppDownloadOptions = () => {
    return (
        <Container maxWidth="container.xl">
            <Box display="flex" justifyContent="center" alignItems="center" gap={40}
                 flexDirection={{sm: "column", md: "row", lg: "row", xl: "row", base: "column"}} py={10}>
                <Box>
                    <Image src={deviceLeft} alt="device right" objectFit="cover"/>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <Image src={meetLogo} alt="device right" objectFit="cover"/>
                    <Box fontWeight="semibold" textAlign="center">Stay connected. <br/>Download the app.</Box>

                    <Box display={"flex"} alignItems={"center"} gap={3}>
                        <Image src={apple} width={32} cursor="pointer"/>
                        <Image src={google} width={32} cursor="pointer"/>
                    </Box>
                </Box>

                <Box>
                    <Image src={deviceRight} alt="device right" objectFit="cover"/>
                </Box>
            </Box>
        </Container>
    );
};

export default AppDownloadOptions;