export default {
  name: 'agencyBannerSection',
  title: 'Agency Banner Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'Scaling an Agency?'
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
      initialValue: 'Our Agency plans are designed to help you manage multiple clients with ease.'
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Learn more about Agency features'
    },
    {
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '#'
    },
    {
      name: 'backgroundImage',
      title: 'Background Image (Optional)',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
