export const structure = (S) =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('Pricing Page')
        .child(
          S.document()
            .schemaType('pricingPage')
            .documentId('pricingPage')
        ),
      // Add more items here if needed
      ...S.documentTypeListItems().filter(
        (listItem) => !['homePage', 'pricingPage'].includes(listItem.getId())
      ),
    ])
