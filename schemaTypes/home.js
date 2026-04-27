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
  ],
}
