export default {
    name: 'blogovi',
    title: 'Blogovi',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
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
        name: 'text',
        title: 'Text',
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
        name: 'datum',
        title: 'Datum objavljivanja',
        type: 'date',
        options: {
            dateFormat: 'YYYY-MM-DD',
            calendarTodayLabel: 'Today'
          },
      },
    ],
  };