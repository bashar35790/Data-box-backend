export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The title shown in the browser tab and search engines.',
    },

    // header section
    {
      name: 'header',
      title: 'Header Section',
      type: 'object',
      fields: [
        // ⭐ Ratings
        {
          name: 'rating',
          title: 'Rating Number',
          type: 'string', // e.g. "4.4"
        },

        {
          name: 'rating2',
          title: 'Rating Number 2',
          type: 'string', // e.g. "4.4"
        },

        {
          name: 'reviewText',
          title: 'Review Text',
          type: 'string',
          description: 'e.g. based on 1,000+ reviews',
        },
      ],
    },

    // main her section start from here

    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'headingFirstText',
          title: 'Heading First Text',
          type: 'string',
          initialValue: 'AI-powered',
        },

        {
          name: 'headingSecondText',
          title: 'Heading Second Text',
          type: 'string',
          initialValue: 'analytics for teams that need answers now',
        },
        {
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          rows: 3,
          initialValue:
            'Turn business performance data into clear answers your team can understand, explain, and act on – instantly.',
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Try It Free',
        },
        {
          name: 'ctaText2',
          title: 'CTA Button Text 2',
          type: 'string',
          initialValue: 'Book a Demo',
        },
        {
          name: 'underTheButtonsText',
          title: 'Under The Buttons Text',
          type: 'string',
          initialValue: 'No credit card needed · Free-forever plan',
        },
      ],
    },

    // hero intro section start from here

    {
      name: 'heroIntro',
      title: 'Hero Intro Section',
      type: 'object',
      fields: [
        {
          name: 'colorIntroHeading',
          title: 'Color Intro Heading',
          type: 'string',
          initialValue: '20,000+ scaling teams & agencies',
        },

        {
          name: 'introHeadingSecoundPart',
          title: 'Intro Heading Secound Part',
          type: 'string',
          initialValue: 'drive results that matter',
        },
        {
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'cardItem',
              title: 'Card Item',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  initialValue: '55%',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                  initialValue: 'increase in sales YoY',
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'TrendingUp', value: 'TrendingUp'},
                      {title: 'TrendingDown', value: 'TrendingDown'},
                    ],
                  },
                  initialValue: 'TrendingUp',
                },
                {
                  name: 'logo',
                  title: 'Logo Image',
                  type: 'url',
                  description: 'Paste image URL here (e.g. https://example.com/logo.png)',
                  initialValue:
                    'https://cdnwebsite.databox.com/wp-content/uploads/2024/01/25053353/First_Response_logo-1.png',
                },
              ],
            },
          ],
          initialValue: [
            {
              title: '55%',
              description: 'increase in sales YoY',
              icon: 'trendingUp',
            },
            {
              title: '50%',
              description: 'decrease in overall reporting costs',
              icon: 'trendingDown',
            },
            {
              title: '60%',
              description: 'reduction in time spent creating reports',
              icon: 'trendingDown',
            },
          ],
        },
      ],
    },

    // Demo section start here
    {
      name: 'demoSecton',
      title: 'Home Demo Section',
      type: 'object',
      fields: [
        {
          name: 'blackHeading',
          title: 'Demo Heading  First Part',
          type: 'string',
          initialValue: 'Get answers from your data',
        },

        {
          name: 'colorHeading',
          title: 'Heading Secound Part',
          type: 'string',
          initialValue: 'instantly',
        },
        {
          name: 'subHeading',
          title: 'Sub Headinag',
          type: 'string',
          initialValue:
            'Getting answers from your data used to take hours. Not anymore. With Genie, our AI analyst, you can ask a question and get a clear answer in seconds.',
        },
        {
          name: 'img',
          title: 'Demo Dashboard Image',
          type: 'image',
          options: {
            hotspot: true,
            initialValue:"dashboard"
          },
        },

        {
          name: 'Feature1',
          title: 'Feature 1 Card',
          type: 'object',
          fields: [
            {
              name: 'boldText',
              title: 'Bold Text',
              type: 'string',
              initialValue: 'Ask',
            },
            {
              name: 'lightText',
              title: 'Light Text',
              type: 'string',
              initialValue: 'business performance questions in plain language',
            },
          ],
        },
        {
          name: 'Feature2',
          title: 'Feature 2 Card',
          type: 'object',
          fields: [
            {
              name: 'boldText',
              title: 'Bold Text',
              type: 'string',
              initialValue: 'Create',
            },
            {
              name: 'lightText',
              title: 'Light Text',
              type: 'string',
              initialValue: 'metrics and dashboards with a prompt',
            },
          ],
        },
        {
          name: 'Feature3',
          title: 'Feature 3 Card',
          type: 'object',
          fields: [
            {
              name: 'boldText',
              title: 'Bold Text',
              type: 'string',
              initialValue: 'Understand',
            },
            {
              name: 'lightText',
              title: 'Light Text',
              type: 'string',
              initialValue: "what's driving changes in your metrics",
            },
          ],
        },
        {
          name: 'Feature4',
          title: 'Feature 4 Card',
          type: 'object',
          fields: [
            {
              name: 'boldText',
              title: 'Bold Text',
              type: 'string',
              initialValue: 'Train',
            },
            {
              name: 'lightText',
              title: 'Light Text',
              type: 'string',
              initialValue: "Genie your business context",
            },
          ],
        },
      ],
    },
  ],
}
