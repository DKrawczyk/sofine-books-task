import { Flex, Input, ActionIcon, Text } from "@mantine/core";
import {
  IconSearch,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from "@tabler/icons-react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { showNotification } from "@mantine/notifications";
import { BooksDTO, getBooksList } from "@/pages/api/books";

interface HandleBarProps {
  bookList: BooksDTO[];
  testFnc: Dispatch<SetStateAction<BooksDTO[]>>;
}

export const HandleBar: FC<HandleBarProps> = ({ testFnc, bookList }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [sortData, setSortData] = useState<boolean>(false);
  // console.log(bookList);
  const getData = async () => {
    if (searchValue.trim() === "") {
      console.log("nope");
      showNotification({
        color: "orange",
        title: "Warning",
        message: "Please, insert title of the book",
      });
    } else {
      console.log("yup");
      const result = await getBooksList(searchValue);
      if (result?.items) {
        testFnc(result.items);
      } else {
        testFnc([]);
      }
    }
  };

  const testHandle = () => {
    const newArray = bookList.sort((a, b) =>
      a.volumeInfo.title.localeCompare(b.volumeInfo.title),
    );
    testFnc(newArray);
    setSortData(!sortData);
  };

  return (
    <Flex
      w={"100%"}
      px={20}
      // direction={"column"}
      maw={1700}
      align={"center"}
      justify={"center"}
      mt={30}
    >
      {/* <Flex w="100%" direction={"column"}> */}
      <Flex w="100%" justify={"center"} align={"center"}>
        <Input
          w={"50%"}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
          miw={330}
          rightSectionPointerEvents="all"
          placeholder="Insert book title and click on search icon"
          rightSection={
            <IconSearch
              color="#00ADB5"
              size={24}
              cursor="pointer"
              onClick={getData}
            />
          }
        />

        <Flex align={"center"} display={bookList.length > 0 ? "flex" : "none"}>
          <Text mr={8}>Sort:</Text>
          <ActionIcon
            variant="transparent"
            color="#00ADB5"
            onClick={testHandle}
          >
            {sortData ? (
              <IconSortDescendingLetters size={24} />
            ) : (
              <IconSortAscendingLetters size={24} />
            )}
          </ActionIcon>
        </Flex>
      </Flex>
      {/* </Flex> */}
    </Flex>
  );
};
