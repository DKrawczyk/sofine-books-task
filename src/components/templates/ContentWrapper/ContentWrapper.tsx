import { Flex } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      mih={"calc(100vh - 160px)"}
      style={{ backgroundColor: "#393E46" }}
      direction={"column"}
      align={"center"}
    >
      {children}
    </Flex>
  );
};
