import { Meta, StoryObj } from '@storybook/vue3';

import { UiButton } from '..';
import { html } from '../../helpers';
import { S } from 'node_modules/@storybook/vue3/dist/public-types-e4ebb831';
import { Story } from 'storybook/internal/csf';

const meta: Meta<typeof UiButton> = {
  component: UiButton,
  args: {},
  argTypes: {
    layout: {
      options: ['primary', 'secondary', 'nightMode'],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton },
    setup: () => ({ args }),

    template: html` 

    <UiButton v-bind="args">default</UiButton>, 
    <UiButton layout="secondary"v-bind="args">secondary</UiButton>
    <UiButton layout="nightMode" v-binn"args">Night mode</UiButton>
    `,
     
  }),
};

export const testPlace: StoryObj<typeof UiButton> = {
  render: (args) => ({
    components: { UiButton},
    setup: () => ({args}),

    template: html`
    
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    <UiButton layout="nightMode" v-binn"args">Page of black buttons</UiButton>
    
    
    `

  }),
};
