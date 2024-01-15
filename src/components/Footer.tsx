import {Box, Container, Grid, Heading, Image, Text} from "@chakra-ui/react";
import apple from "../assets/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import google from "../assets/google-play-badge-logo-svgrepo-com.svg";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <Box backgroundColor={"#151515"} color={"whitesmoke"}>
            <Container maxWidth={"container.xl"}>
                <Box display={"flex"} flexDirection={{sm: "column", md: "row", lg: "row", xl: "row", base: "column"}}
                     alignItems={"center"} gap={5} pt={10}>
                    <Heading as={"h6"} size={"md"}>Create your own meetup group</Heading>
                    <Text border={"1px"} borderColor={"gray.600"} cursor={"pointer"} px={2} py={1}
                          fontWeight={"semibold"} rounded={"lg"}>
                        Get started
                    </Text>
                </Box>

                <Box borderBottom={"1px"} borderColor={"gray.600"} pb={10}/>

                <Grid pt={10} gap={5} gridTemplateColumns={{
                    sm: "repeat(2, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(4, 1fr)",
                    xl: "repeat(4, 1fr)",
                    base: "repeat(2, 1fr)"
                }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                        <Heading as={"h4"} size={"md"} fontWeight={"semibold"}>Your account</Heading>
                        <Text fontSize={"xs"}>Sign in</Text>
                        <Text fontSize={"xs"}>Sign up</Text>
                        <Text fontSize={"xs"}>Forgot password</Text>
                        <Text fontSize={"xs"}>Help</Text>
                    </Box>

                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                        <Heading as={"h4"} size={"md"} fontWeight={"semibold"}>Your meetup</Heading>
                        <Text fontSize={"xs"}>Create meetup</Text>
                        <Text fontSize={"xs"}>Join meetup</Text>
                        <Text fontSize={"xs"}>Manage meetup</Text>
                    </Box>

                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                        <Heading as={"h4"} size={"md"} fontWeight={"semibold"}>Your community</Heading>
                        <Text fontSize={"xs"}>About</Text>
                        <Text fontSize={"xs"}>Contact</Text>
                    </Box>

                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                        <Heading as={"h4"} size={"md"} fontWeight={"semibold"}>Your support</Heading>
                        <Text fontSize={"xs"}>Help</Text>
                        <Text fontSize={"xs"}>Contact</Text>
                    </Box>
                </Grid>

                <Box pt={5} display={"flex"}
                     flexDirection={{sm: "column", md: "row", lg: "row", xl: "row", base: "column"}}
                     justifyContent={"space-between"} alignItems={"center"}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                        <Heading as={"h6"} size={"md"} pt={{sm: "40px", md: "0px", lg: "0px", xl: "0px", base: "40px"}}>
                            Follow us
                        </Heading>
                        <Box display={"flex"} alignItems={"center"} gap={3}>
                            <FaFacebook/>
                            <FaXTwitter/>
                            <FaYoutube/>
                            <FaInstagram/>
                        </Box>
                    </Box>

                    <Box display={"flex"} flexDirection={"row"} gap={3}>
                        <Image src={apple} width={32} cursor="pointer"/>
                        <Image src={google} width={32} cursor="pointer"/>
                    </Box>
                </Box>

                <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} gap={5} pb={5} fontWeight={"semibold"}
                     whiteSpace={"nowrap"}>
                    <Text>&copy; {new Date().getFullYear()} Meetup</Text>
                    <Text>All rights reserved</Text>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Use</Text>
                    <Text>Cookie Policy</Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;