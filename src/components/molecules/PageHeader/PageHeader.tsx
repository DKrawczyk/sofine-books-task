import { Box } from "@mantine/core";
import Image from "next/image";
import { FC } from "react";
import { CustomWrapper } from "@/components";

interface PageHeaderProps {}

export const PageHeader: FC<PageHeaderProps> = () => {
  return (
    <CustomWrapper>
      <Box w={130} pos={"relative"} h={50}>
        <Image src="/icons/logo.gif" alt="Company logo" fill />
      </Box>
    </CustomWrapper>
  );
};
