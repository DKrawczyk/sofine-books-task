import { Box, Button, Flex, Title, Text } from "@mantine/core";
import { FC } from "react";
import Image from "next/image";
import { BooksDTO } from "@/pages/api/books";

interface SingleBookProps {
  book: BooksDTO;
}

export const SingleBook: FC<SingleBookProps> = ({ book }) => {
  const { volumeInfo } = book;
  return (
    <Flex
      mx={20}
      mb={30}
      p={20}
      w={385}
      style={{ backgroundColor: "#EEE", borderRadius: "20px" }}
      h={280}
    >
      <Flex my={10} miw={140} maw={140} pos={"relative"}>
        <Image
          loader={
            volumeInfo.imageLinks &&
            (() => volumeInfo.imageLinks?.thumbnail as string)
          }
          alt="Book thumbnail"
          fill
          src={
            volumeInfo.imageLinks
              ? (volumeInfo.imageLinks?.thumbnail as string)
              : "/icons/noImage.svg"
          }
        />
      </Flex>
      <Flex ml={20} direction={"column"} justify={"space-between"} miw={145}>
        <Box miw={185}>
          <Title mb={20} size={20}>
            {volumeInfo.title}
          </Title>
          {volumeInfo.authors && volumeInfo.authors.length > 1 ? (
            volumeInfo.authors.map((item, idx) => {
              return (
                <Text style={{ overflowWrap: "break-word" }} key={idx}>
                  {item}
                </Text>
              );
            })
          ) : (
            <Text style={{ overflowWrap: "break-word" }}>
              {volumeInfo.authors}
            </Text>
          )}
        </Box>
        <Flex justify={"end"}>
          <Button h={24} color="#00ADB5" style={{ borderRadius: "8px" }}>
            More
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
