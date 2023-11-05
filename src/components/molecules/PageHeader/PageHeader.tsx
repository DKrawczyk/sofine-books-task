import { Box } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";

interface PageHeaderProps {}

export const PageHeader: FC<PageHeaderProps> = () => {
  return (
    <Box px={40} py={12} style={{ backgroundColor: "#222831" }}>
      <Box w={130} pos={"relative"} h={50}>
        <Image src="/icons/logo.gif" alt="Company logo" fill />
      </Box>
    </Box>
  );
};
