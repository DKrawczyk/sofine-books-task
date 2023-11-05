import { Input, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  components: {
    Input: Input.extend({
      styles: {
        input: {
          backgroundColor: "#EEE",
          border: "none",
          borderRadius: "20px",
        },
        section: {
          marginRight: "10px",
        },
      },
    }),
  },
};
