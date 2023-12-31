import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  placeholder: string;
  onSearch: (searchInput: string) => void;
}

const SearchInput = ({ placeholder, onSearch }: Props) => {
  /**
   * We could have chose `useState`
   * But as the logic only concerns one element,
   * therefore, using ref make "more sense", as it requires less code
   * This is just a deceision, no big deal
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
          placeholder={placeholder}
          variant={"filters"}
          //maxWidth={"500px"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
