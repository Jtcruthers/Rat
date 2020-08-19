import Card from "../components/Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    rank: String,
    suit: String,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<card @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  rank: "2",
  suit: "H",
};
