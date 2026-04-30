export default {
  name: 'agencyBannerSection',
  title: 'Agency Banner Section',
  type: 'object',
  fields: [

    // Heading
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue:
        'Exclusive benefits for Marketing Agencies, RevOps Agencies, and Consulting Businesses'
    },

    // Features List
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              initialValue: 'Save time:'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              initialValue:
                'Manage unlimited client accounts in one platform, while leveraging AI and automations to tackle routine work.'
            }
          ]
        }
      ]
    },

    // Primary CTA
    {
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
          initialValue: 'Start an Agency Free Trial'
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          initialValue: '#'
        }
      ]
    },

    // Secondary CTA
    {
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
          initialValue: 'Learn More'
        },
        {
          name: 'link',
          title: 'Link',
          type: 'string',
          initialValue: '#'
        }
      ]
    },

    // Book a call link
    {
      name: 'callLinkText',
      title: 'Call Link Text',
      type: 'string',
      initialValue: 'book a call.'
    },
    {
      name: 'callLink',
      title: 'Call Link URL',
      type: 'string',
      initialValue: '#'
    },

    // Right Image
    {
      name: 'sideImage',
      title: 'Side Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
};
