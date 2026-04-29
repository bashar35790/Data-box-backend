export default {
  name: 'insightsSection',
  title: 'Insights Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'From dashboards to business analytics to modern BI',
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Heading Part',
      type: 'string',
      initialValue: 'to modern BI',
    },
    {
      name: 'descriptionFirst',
      title: 'Description Part 1',
      type: 'text',
      rows: 4,
      initialValue: 'Databox began by giving every team a single source of truth—live dashboards you could spin up in minutes to see all your KPIs at a glance.',
    },
    {
      name: 'descriptionSecond',
      title: 'Description Part 2',
      type: 'text',
      rows: 6,
      initialValue: 'As your questions got deeper and your needs more sophisticated, we grew with you. We layered in custom metrics, datasets, AI-generated insights, reporting, goals and Forecasts—all while keeping the fast setup, beautiful visuals and flexibility you loved.',
    }
  ]
}
