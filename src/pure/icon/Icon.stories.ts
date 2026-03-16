import type { Meta, StoryObj } from "@storybook/svelte";
import Icon from "./Icon.svelte";

const meta = {
	title: "Pure/Icon",
	component: Icon,
	tags: ["autodocs"],
	argTypes: {
		name: {
			control: "select",
			options: ["target", "shield", "zap", "lightbulb", "flag", "bot", "brain", "rocket", "workflow", "network"],
		},
	},
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: { name: "target" },
};

export const Small: Story = {
	args: { name: "shield", class: "h-3 w-3" },
};

export const Large: Story = {
	args: { name: "rocket", class: "h-8 w-8" },
};

export const StatusIcon: Story = {
	args: { name: "circle-check-big", class: "h-5 w-5 text-success" },
};

export const UnknownFallback: Story = {
	args: { name: "nonexistent-icon" },
};
