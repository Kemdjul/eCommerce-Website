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
            type: 'object',
            name: 'lista',
            fields: [
              {
                name: 'proizvod',
                type: 'reference',
                to: [{type: 'produkt'}],
              },
              {
                type: 'number',
                name: 'kolicina',
              },
              {
                type: 'string',
                name: 'izabranaBoja',
              },
              {
                type: 'string',
                name: 'izabranaVelicina',
              },
            ],
          },
        ],
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'brojTel',
        title: 'Broj Telefona',
        type: 'string',
      },
      {
        name: 'adresa',
        title: 'Adresa',
        type: 'string',
      },
      {
        name: 'napomena',
        title: 'Napomena',
        type: 'string',
      },
    ],
  };