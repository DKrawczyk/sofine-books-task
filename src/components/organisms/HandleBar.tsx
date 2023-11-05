import { Flex, Input, ActionIcon, Text } from "@mantine/core";
import { IconSearch, IconSortAscendingLetters } from "@tabler/icons-react";
import { FC } from "react";

interface HandleBarProps {}

export const HandleBar: FC<HandleBarProps> = () => {
  return (
    <Flex
      w={"100%"}
      px={20}
      direction={"column"}
      maw={1700}
      align={"center"}
      mt={30}
    >
      <Flex w="100%" direction={"column"}>
        <Flex justify={"space-between"} align={"center"}>
          <Input
            w={"50%"}
            miw={330}
            rightSectionPointerEvents="all"
            placeholder="Insert book title and click on search icon"
            rightSection={
              <IconSearch color="#00ADB5" size={24} cursor="pointer" />
            }
          />

          <Flex align={"center"}>
            <Text mr={8} c={"#00ADB5"}>
              Sort:
            </Text>
            <ActionIcon variant="transparent" color="#00ADB5">
              <IconSortAscendingLetters size={24} />
            </ActionIcon>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
