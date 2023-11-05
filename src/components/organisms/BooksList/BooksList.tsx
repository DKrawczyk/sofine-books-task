import { Flex, Box, Title, Button, Text } from "@mantine/core";
import { FC } from "react";
import Image from "next/image";
import { BooksDTO } from "@/pages/api/books";

interface IBooksList {
  books: BooksDTO[];
}

export const BooksList: FC<IBooksList> = ({ books }) => {
  return (
    <Flex maw={1700} wrap={"wrap"} justify={"center"} mt={30} mih={620}>
      {books.length > 0 ? (
        books.map((item, idx) => {
          console.log(item.volumeInfo.imageLinks);

          return (
            <Flex
              mx={20}
              mb={30}
              p={20}
              w={385}
              style={{ backgroundColor: "#EEE", borderRadius: "20px" }}
              key={idx}
              h={280}
            >
              <Flex my={10} miw={140} maw={140} pos={"relative"}>
                <Image
                  loader={
                    item.volumeInfo.imageLinks &&
                    (() => item.volumeInfo.imageLinks?.thumbnail as string)
                  }
                  alt="Book thumbnail"
                  fill
                  src={
                    item.volumeInfo.imageLinks
                      ? (item.volumeInfo.imageLinks?.thumbnail as string)
                      : "/icons/noImage.svg"
                  }
                />
              </Flex>
              <Flex
                ml={20}
                direction={"column"}
                justify={"space-between"}
                miw={145}
              >
                <Box miw={185}>
                  <Title mb={20} size={20}>
                    {item.volumeInfo.title}
                  </Title>
                  {item.volumeInfo.authors &&
                  item.volumeInfo.authors.length > 1 ? (
                    item.volumeInfo.authors.map((item, idx) => {
                      return <Text key={idx}>{item}</Text>;
                    })
                  ) : (
                    <Text>{item.volumeInfo.authors}</Text>
                  )}
                </Box>
                <Flex justify={"end"}>
                  <Button
                    h={24}
                    color="#00ADB5"
                    style={{ borderRadius: "8px" }}
                  >
                    More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          );
        })
      ) : (
        <Title>No results found</Title>
      )}
    </Flex>
  );
};
