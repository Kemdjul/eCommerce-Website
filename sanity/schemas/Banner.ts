export default {
    name: 'banners',
    title: 'Banners',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        },
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'bigText',
        title: 'Big Text',
        type: 'string',
      },
      {
        name: 'smallText1',
        title: 'Small Text 1',
        type: 'string',
      },
      {
        name: 'smallText2',
        title: 'Small Text 2',
        type: 'string',
      },
    ],
  };