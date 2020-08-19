import TrumpsPicker from "../components/TrumpsPicker";

export default {
  title: "TrumpsPicker",
  component: TrumpsPicker,
  argTypes: {
    rank: String,
    suit: String,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TrumpsPicker },
  template: '<trumps-picker v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {};
