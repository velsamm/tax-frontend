import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RequestForm } from "./RequestForm";

export default {
    title: 'RequestForm',
    component: RequestForm
} as ComponentMeta<typeof RequestForm>

const Template: ComponentStory<typeof RequestForm> = (args) => <RequestForm {...args} />

export const Primary = Template.bind({})
