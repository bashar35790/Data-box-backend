export default {
  name: 'demoSection',
  title: 'Home Demo Section',
  type: 'object',
  fields: [
    {
      name: 'blackHeading',
      title: 'Demo Heading First Part',
      type: 'string',
      initialValue: 'Get answers from your data',
    },
    {
      name: 'colorHeading',
      title: 'Heading Second Part',
      type: 'string',
      initialValue: 'instantly',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      initialValue: 'Getting answers from your data used to take hours. Not anymore. With Genie, our AI analyst, you can ask a question and get a clear answer in seconds.',
    },
    {
      name: 'img',
      title: 'Demo Dashboard Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'Feature1',
      title: 'Feature 1 Card',
      type: 'object',
      fields: [
        { name: 'boldText', title: 'Bold Text', type: 'string', initialValue: 'Ask' },
        { name: 'lightText', title: 'Light Text', type: 'string', initialValue: 'business performance questions in plain language' },
      ]
    },
    {
      name: 'Feature2',
      title: 'Feature 2 Card',
      type: 'object',
      fields: [
        { name: 'boldText', title: 'Bold Text', type: 'string', initialValue: 'Create' },
        { name: 'lightText', title: 'Light Text', type: 'string', initialValue: 'metrics and dashboards with a prompt' },
      ]
    },
    {
      name: 'Feature3',
      title: 'Feature 3 Card',
      type: 'object',
      fields: [
        { name: 'boldText', title: 'Bold Text', type: 'string', initialValue: 'Understand' },
        { name: 'lightText', title: 'Light Text', type: 'string', initialValue: "what's driving changes in your metrics" },
      ]
    },
    {
      name: 'Feature4',
      title: 'Feature 4 Card',
      type: 'object',
      fields: [
        { name: 'boldText', title: 'Bold Text', type: 'string', initialValue: 'Train' },
        { name: 'lightText', title: 'Light Text', type: 'string', initialValue: 'Genie your business context' },
      ]
    },
  ]
}
