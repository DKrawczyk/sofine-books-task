import { Flex, Box, Title, Button, Text } from "@mantine/core";
import { FC } from "react";
import Image from "next/image";

const mockedBooks = [
  {
    title: "Hary",
    content: "Desc",
    img: true,
  },
  {
    title: "Hary",
    content: "Desc",
    img: true,
  },
  {
    title: "Hary",
    content: "Desc",
    img: true,
  },
  {
    title: "Hary",
    content: "Desc",
    img: true,
  },
  {
    title: "Hary",
    content: "Desc",
    img: true,
  },
  {
    title: "Hary",
    content: "Desc",
    img: true,
  },
  {
    title: "Hary",
    content: "Desc",
    img: true,
  },
  {
    title: "Hary",
    content: "Desc",
    img: true,
  },
];

export const BookPreview: FC = () => {
  return (
    <Flex maw={1700} wrap={"wrap"} justify={"center"} mt={30}>
      {mockedBooks.map((item, idx) => {
        return (
          <Flex
            mx={20}
            mb={30}
            p={20}
            w={385}
            style={{ backgroundColor: "#EEE", borderRadius: "20px" }}
            key={idx}
          >
            <Box>
              <Image
                alt="Book cover"
                width={180}
                height={230}
                src={"/icons/exampleImg.png"}
              />
            </Box>
            <Flex
              ml={20}
              direction={"column"}
              justify={"space-between"}
              miw={145}
            >
              <Box>
                <Title mb={20} size={20}>
                  {item.title}
                </Title>
                <Text>{item.content}</Text>
              </Box>
              <Flex justify={"end"}>
                <Button h={24} color="#00ADB5" style={{ borderRadius: "8px" }}>
                  More
                </Button>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
