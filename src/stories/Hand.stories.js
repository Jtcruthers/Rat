import Hand from "../components/Hand";

export default {
  title: "Hand",
  component: Hand,
  argTypes: {
    rank: String,
    suit: String,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Hand },
  template: '<Hand v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  hand: [
    {
      suit: "H",
      rank: "2",
    },
    {
      suit: "C",
      rank: "2",
    },
    {
      suit: "D",
      rank: "2",
    },
    {
      suit: "S",
      rank: "2",
    },
  ],
};
