import { Flex, Pagination } from "@mantine/core";
import { NextPage } from "next";
import { HandleBar } from "@/components/organisms/HandleBar";
import { BookPreview } from "@/components/organisms/BookPreview";
import { PageWrapper } from "@/components/templates/PageWrapper";
import { PageHeader } from "@/components/molecules/PageHeaders";
// import { PageWrapper } from "@/components";
// import { PageHeader } from "@/components/molecules/PageHeader";

const Main: NextPage = () => {
  return (
    <PageWrapper>
      <PageHeader />
      <Flex direction={"column"} align={"center"}>
        <HandleBar />
        <BookPreview />
        <Pagination
          mb={30}
          total={10}
          size="xs"
          radius="md"
          withControls={false}
          withEdges
          color="#00ADB5"
        />
      </Flex>
    </PageWrapper>
  );
};

export default Main;