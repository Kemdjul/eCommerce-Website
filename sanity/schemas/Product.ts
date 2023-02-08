import { BlockEditor } from "sanity";

export default {
    name: 'produkt',
    title: 'Produkt',
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
        name: 'cijenaSPopustom',
        title: 'Cijena s popustom',
        type: 'number',
      },
      {
        name: 'staraCijena',
        title: 'Stara cijena',
        type: 'number',
      },
      {
        name: 'kategorija',
        title: 'Kategorija',
        type: 'array',
        of: [
          {
            type: 'string',
          },
        ]
      },
      { 
        name: 'opis',
        title: 'Opis',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          {
            type: 'image',
            fields: [
              {
                type: 'text',
                name: 'alt',
                title: 'Alternative text',
                options: {
                  isHighlighted: true
                }
              },
            ],
          },
        ],
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
        name: 'izdvojiti',
        title: 'Izdvojiti',
        type: 'boolean',
      },
      {
        name: 'zaliha',
        title: 'Na zalihi',
        type: 'boolean',
      },
    ]
  }