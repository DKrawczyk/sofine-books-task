import { Box, Flex } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

interface CustomWrapperProps {
  endPosition?: boolean;
}

export const CustomWrapper: FC<PropsWithChildren<CustomWrapperProps>> = ({
  children,
  endPosition,
}) => {
  return (
    <Box style={{ backgroundColor: "#222831" }} h={80}>
      <Flex
        m={"0 auto"}
        maw={1920}
        h="100%"
        px={40}
        align={"center"}
        justify={endPosition ? "end" : "inherit"}
      >
        {children}
      </Flex>
    </Box>
  );
};
