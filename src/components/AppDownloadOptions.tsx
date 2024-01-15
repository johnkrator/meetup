import {Box, Container, Image} from "@chakra-ui/react";
import deviceRight from "../assets/device-right.webp";
import deviceLeft from "../assets/device-left.webp";
import meetLogo from "../assets/meetup-logo.svg";

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
                    <Box>
                        <Image
                            src="https://pixelbag.net/wp-content/uploads/2022/06/download-on-the-app-store-badge-svg-pdf-ai-eps.jpg"
                            width={32} cursor="pointer"/>
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