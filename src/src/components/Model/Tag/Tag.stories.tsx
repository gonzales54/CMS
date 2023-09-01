import { Tag } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tag> = {
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Tags: Story = {
  args: {
    tag: "Home",
    href: "/",
    isNeedIcon: true,
    colorClass: "bg-blue-500",
    isTextWhite: false,
  },
};
