export default {
    name: 'product',
    title: 'Product',
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
        name: 'opis',
        title: 'Opis',
        type: 'string',
      },
      {
        name: 'boja',
        title: 'Boja',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'velicina',
        title: 'Veličina',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          hotspot: true,
        },
      },
      {
        name: 'izdvojen',
        title: 'Izdvojiti',
        type: 'boolean',
      },
    ]
  }