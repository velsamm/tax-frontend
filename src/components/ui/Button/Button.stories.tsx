import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
    title: 'Button1',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button'
}

export const Text = Template.bind({});
Text.args = {
    children: 'Button',
    variant: 'text'
}

export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Button',
    variant: 'outlined'
}

export const Contained = Template.bind({});
Contained.args = {
    children: 'Button',
    variant: 'contained'
}

