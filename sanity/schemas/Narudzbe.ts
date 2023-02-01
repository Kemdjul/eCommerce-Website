export default {
    name: 'narudzbe',
    title: 'Narudzbe',
    type: 'document',
    fields: [
      {
        name: 'imePrezime',
        title: 'Ime i prezime',
        type: 'string',
      },
      { 
        name: 'proizvodi',
        title: 'Proizvodi',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'produkt'}]
          }
        ]
      },
    ],
  };