import {useRouteError} from "react-router-dom";
import {Flex, Heading, Text} from "@chakra-ui/react";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    interface Error {
        statusText?: string;
        message?: string;
    }

    return (
        <Flex
            flexDirection={"column"}
            justify={"center"}
            height={"100vh"}
            align={"center"}
            id="error-page"
        >
            <Heading>Oops!</Heading>
            <Text my={2}>Sorry, an unexpected error has occurred.</Text>
            <Text color={"brand.textMuted"}>
                <i>{(error as Error).statusText || (error as Error).message}</i>
            </Text>
        </Flex>
    );
};

export default ErrorPage;