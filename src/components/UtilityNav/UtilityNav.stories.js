// UtilityNav.stories.js

import UtilityNav from './index';

export default {
  title: 'UtilityNav',
  component: UtilityNav,
  argTypes: {
    activeItem: {
      control: 'select',
      options: ['Personal', 'Small Business', 'Wealth Management', 'Businesses & Institutions', 'Security', 'About'],
    },
  },
};

const Template = (args) => <UtilityNav {...args} />;

export const Default = Template.bind({});

// New story for active item state
export const Active = Template.bind({});
Active.args = {
  activeItem: 'Personal',
};