export default {
  name: 'faqSection',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
    },
    {
      name: 'faqs',
      title: 'Questions & Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ]
        }
      ],
      initialValue: [
        {
          question: "How do I create an account?",
          answer: "Click the 'Sign Up' button in the top right corner and follow the registration process.",
        }
      ]
    }
  ]
}
