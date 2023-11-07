import { ActionIcon, Flex, Input, Loader, Text } from "@mantine/core";
import {
  Icon360,
  IconSearch,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from "@tabler/icons-react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { BooksDTO } from "@/pages/api/books";

export enum SortTypes {
  ASC,
  DSC,
  NO_SORT,
}

interface HandleBarProps {
  bookList: BooksDTO[];
  getData: (searchValue: string) => void;
  setSortType: Dispatch<SetStateAction<SortTypes>>;
  sortType: SortTypes;
  isLoading: boolean;
}

export const HandleBar: FC<HandleBarProps> = ({
  getData,
  bookList,
  sortType,
  setSortType,
  isLoading,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const sortHandler = () => {
    if (sortType === SortTypes.ASC || sortType === SortTypes.DSC) {
      return setSortType(++sortType);
    }
    return setSortType(SortTypes.ASC);
  };

  const iconsComponent = {
    [SortTypes.ASC]: <IconSortDescendingLetters size={24} />,
    [SortTypes.DSC]: <IconSortAscendingLetters size={24} />,
    [SortTypes.NO_SORT]: <Icon360 size={24} />,
  };

  return (
    <Flex w="100%" justify={"center"} px={20} maw={1700} mt={30}>
      <Input
        w={"50%"}
        onChange={(e) => setSearchValue(e.currentTarget.value)}
        miw={330}
        rightSectionPointerEvents="all"
        placeholder="Insert book title and click on search icon"
        rightSection={
          isLoading ? (
            <Loader size="xs" color="#00ADB5" />
          ) : (
            <IconSearch
              color="#00ADB5"
              size={24}
              cursor="pointer"
              onClick={() => getData(searchValue)}
            />
          )
        }
      />

      <Flex align={"center"} display={bookList.length > 0 ? "flex" : "none"}>
        <Text mr={8}>Sort:</Text>
        <ActionIcon variant="transparent" color="#00ADB5" onClick={sortHandler}>
          {iconsComponent[sortType]}
        </ActionIcon>
      </Flex>
    </Flex>
  );
};
