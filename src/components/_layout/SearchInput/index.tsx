import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchInput: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  /**
   * We could have chose `useState`
   * But as the logic only concerns on element, ref make more sense
   * This is just a deceision
   */
  const $ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if ($ref.current) onSearch($ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={$ref}
          borderRadius={20}
          placeholder="Search Games"
          variant={"filters"}
          //maxWidth={"500px"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
