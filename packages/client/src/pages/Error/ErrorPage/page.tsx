import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Heading, Box, Text } from "@chakra-ui/react";
import { NavBar } from "@/components";

const ErrorPage = () => {
  const error = useRouteError();
  const is404 = isRouteErrorResponse(error);

  return (
    <>
      {/* 
        @todo
        Adding NavBar here is temporary, it would make more sense to use a Layout rather  
      */}
      <NavBar />
      <Box padding={5}>
        <Heading>Ooops</Heading>
        <Text>
          {is404
            ? "This resource doesn't exist"
            : "An unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
