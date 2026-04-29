export default {
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Why customers love Databox',
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Heading Part',
      type: 'string',
      initialValue: 'love Databox',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'title', title: 'Job Title', type: 'string' },
            { name: 'avatar', title: 'Avatar Image', type: 'image', options: { hotspot: true } },
            { name: 'initials', title: 'Initials (Fallback)', type: 'string' },
            { name: 'quote', title: 'Quote', type: 'text', rows: 4 },
          ]
        }
      ],
      initialValue: [
        {
          name: "Nik Glanz",
          title: "Marketing Intelligence",
          quote: "Maintaining all of our dashboards manually just wasn't sustainable. With Databox, I'm able to manage everything myself—and we have a lot of clients.",
        }
      ]
    }
  ]
}
