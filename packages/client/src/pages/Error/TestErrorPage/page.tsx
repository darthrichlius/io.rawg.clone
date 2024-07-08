import { Button } from "@chakra-ui/react";

const TestErrorPage = () => {
  // @ts-expect-error This is intentionally added for testing
  return <Button colorScheme={"red"} onClick={() => methodDoesNotExist()}>Break the world</Button>;
};

export default TestErrorPage;
