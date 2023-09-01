import { TimeStamp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TimeStamp> = {
  component: TimeStamp,
};

export default meta;
type Story = StoryObj<typeof TimeStamp>;

export const TimeStamps: Story = {
  args: {
    createdAt: "2022/09/09",
    isNeedIcon: true,
    isNeedMarginBottom: true,
    positionClassName: "items-center"
    
  },
};
