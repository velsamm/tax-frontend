import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from './Container';

export default {
    title: 'Container',
    component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Card = Template.bind({});

Card.args = {
    children: 'Card',
    card: true
}

export const Paper = Template.bind({})

Paper.args = {
    children: 'Paper',
    paper: true
}
