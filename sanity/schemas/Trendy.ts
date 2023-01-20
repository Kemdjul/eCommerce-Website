export default {
    name: 'trendy',
    title: 'Trendy Products',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'naziv',
        title: 'Naziv',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'cijena',
        title: 'Cijena',
        type: 'number',
      },
      {
        name: 'boja',
        title: 'Boja',
        type: 'string',
      },
      {
        name: 'kategorija',
        title: 'Kategorija',
        type: 'string',
      },
      {
        name: 'velicina',
        title: 'Veličina',
        type: 'string',
      },
    ]
  }