import { FC } from "react";
import { Text } from "@mantine/core";
import { CustomWrapper } from "@/components";

export const PageFooter: FC = () => {
  return (
    <CustomWrapper endPosition>
      <Text size={"12px"} c={"#EEE"}>
        Wszystkie prawa zastrzeżone ® 2023, Dawid Krawczyk
      </Text>
    </CustomWrapper>
  );
};
