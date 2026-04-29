export default {
  name: 'footerSection',
  title: 'Footer Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Make better decisions, together, faster.',
    },
    {
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'link', title: 'Button Link', type: 'string' },
            { name: 'variant', title: 'Variant', type: 'string', initialValue: 'primary' },
          ]
        }
      ]
    },
    {
      name: 'brandInfo',
      title: 'Brand Information',
      type: 'object',
      fields: [
        { name: 'logo', title: 'Logo', type: 'image' },
        { name: 'address', title: 'Address', type: 'string', initialValue: 'Databox Inc. HQ: Boston, MA, USA' },
        { name: 'tagline', title: 'Tagline', type: 'string', initialValue: 'Modern BI for teams that needs answers now' },
      ]
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'link', title: 'Link', type: 'url' },
          ]
        }
      ]
    },
    {
      name: 'linkGroups',
      title: 'Link Groups',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Group Title', type: 'string' },
            { 
              name: 'links', 
              title: 'Links', 
              type: 'array', 
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', title: 'Link Name', type: 'string' },
                    { name: 'url', title: 'URL', type: 'string' },
                  ]
                }
              ] 
            },
          ]
        }
      ]
    },
    {
      name: 'legalLinks',
      title: 'Legal Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ]
        }
      ]
    },
    {
      name: 'appDownloads',
      title: 'App Download Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform (e.g. Play Store, App Store)', type: 'string' },
            { name: 'image', title: 'Badge Image', type: 'image' },
            { name: 'url', title: 'URL', type: 'url' },
          ]
        }
      ]
    }
  ]
}
