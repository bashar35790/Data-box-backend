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
      initialValue: 'Databox | Modern BI for teams',
    },

    // 🏆 Global Ratings / Header Stats
    {
      name: 'header',
      title: 'Header / Global Ratings',
      type: 'object',
      fields: [
        { name: 'rating', title: 'G2 Rating', type: 'string', initialValue: '4.4' },
        { name: 'rating2', title: 'Capterra Rating', type: 'string', initialValue: '4.6' },
        { name: 'reviewText', title: 'Review Summary Text', type: 'string', initialValue: 'based on 1,000+ reviews' },
      ],
    },

    // 🚀 Sections
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
    },
    {
      name: 'heroIntro',
      title: 'Hero Intro (Stats)',
      type: 'heroIntroSection',
    },
    {
      name: 'demoSecton',
      title: 'Demo Section',
      type: 'demoSection',
    },
    {
      name: 'whyUsSection',
      title: 'Why Us Section',
      type: 'whyUsSection',
    },
    {
      name: 'howItWorksSection',
      title: 'How It Works Section',
      type: 'howItWorksSection',
    },
    {
      name: 'featuresSection',
      title: 'Features Section',
      type: 'featuresSection',
    },
    {
      name: 'interactiveCardsSection',
      title: 'Interactive Cards Section',
      type: 'interactiveCardsSection',
    },
    {
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'testimonialsSection',
    },
    {
      name: 'insightsSection',
      title: 'Insights Section',
      type: 'insightsSection',
    },
    {
      name: 'achievementsSection',
      title: 'Achievements Section',
      type: 'achievementsSection',
    },
    {
      name: 'faqSection',
      title: 'FAQ Section',
      type: 'faqSection',
    },
    {
      name: 'footerSection',
      title: 'Footer Section',
      type: 'footerSection',
    },
  ],
}
