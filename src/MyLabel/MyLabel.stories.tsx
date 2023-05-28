import { MyLabel } from "./MyLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MyLabel> = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select" },
    //backgroundColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof MyLabel>;

export const Basic: Story = {
  args: {
    label: "Basic",
    size: "normal",
  },
};

export const AllCaps: Story = {
  args: {
    label: "Allcaps",
    allCaps: true,
    size: "normal",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "normal",
    color: "secondary", //
  },
};

export const Tertiary: Story = {
  args: {
    label: "Tertiary",
    size: "normal",
    color: "tertiary",
  },
};

export const CustomFontColor: Story = {
  args: {
    fontColor: "#5517ac",
    size: "h1",
    label: "CustomFontColor",
  },
};
