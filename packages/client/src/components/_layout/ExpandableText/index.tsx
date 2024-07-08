import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 250;

  if (children.length <= limit) return <Text>{children}</Text>;

  const text = expanded ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        <span>{text}</span>
        <Button
          size="xs"
          colorScheme="yellow"
          fontWeight="bold"
          marginLeft={2}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
