export default {
  name: 'interactiveCardsSection',
  title: 'Interactive Cards Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Self-serve analytics for people who are tired of doing reporting',
    },
    {
      name: 'highlightedText',
      title: 'Highlighted Heading Part',
      type: 'string',
      initialValue: 'Self-serve analytics ',
    },
    {
      name: 'cards',
      title: 'Interactive Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            {
              name: 'details',
              title: 'Details List',
              type: 'array',
              of: [{ type: 'string' }]
            },
            { name: 'color', title: 'Background Color (Tailwind class)', type: 'string' },
            { name: 'textColor', title: 'Text Color (Tailwind class)', type: 'string' },
            { name: 'iconColor', title: 'Icon Color (Tailwind class)', type: 'string' },
            { name: 'icon', title: 'Icon Name (Lucide)', type: 'string' },
            { name: 'ctaLink', title: 'CTA Link', type: 'string', initialValue: '#' },
          ]
        }
      ],
      initialValue: [
        {
          title: "Executives",
          color: "bg-[#8B5CF6]",
          textColor: "text-white",
          iconColor: "text-white",
          icon: "Briefcase",
          description: "Deliberately manage your business performance.",
          details: [
            "Align your business to the outcomes that matter with OKRs.",
            "Keep teams focused on what matters with shared goals and trusted data.",
            "Easily see your entire company's performance in one place.",
            "Get real-time updates and alerts on key metrics.",
          ],
          ctaLink: "#",
        }
      ]
    },
    {
      name: 'ctaText',
      title: 'Global CTA Text',
      type: 'string',
      initialValue: 'Try It Free',
    }
  ]
}
