import { Box, Container } from "@mantine/core";
import { FC, PropsWithChildren } from "react";

interface PageWrapperProps {}

export const PageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
  children,
}) => {
  return (
    <Box style={{ backgroundColor: "#393E46" }} mih={"100vh"}>
      <Container m={"0 auto"} size={1920} p={0}>
        {children}
      </Container>
    </Box>
  );
};
