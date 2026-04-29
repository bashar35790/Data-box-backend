export default {
  name: 'pricingTestimonialsSection',
  title: 'Pricing Testimonials Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'What our customers are saying'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonialItem',
          title: 'Testimonial',
          fields: [
            {
              name: 'name',
              title: 'Customer Name',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'role',
              title: 'Role/Company',
              type: 'string'
            },
            {
              name: 'message',
              title: 'Testimonial Message',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required()
            },
            {
              name: 'image',
              title: 'Profile Image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'rating',
              title: 'Rating (Optional)',
              type: 'number',
              description: 'Rating out of 5',
              validation: Rule => Rule.min(1).max(5)
            }
          ]
        }
      ]
    }
  ]
}
