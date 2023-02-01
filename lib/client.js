import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '34z71v20',
    dataset: 'production',
    apiVersion: '2023-02-01',
    useCdn: false,
    token: 'skW7Yw48Ho4FCqw2gsrxqKU2UCnG42i05qEowALoRCiyPJ7G4LZxnJJMqskcl9U1LH98zkhSEdX4nyfZfec71nDss0G7GoHAVAzAa9gK3nLntI8kDax9XLDZ3kQryMfgyRztgRGYmLgcTRH4rHe7acLBZkdWnSJoVtU0hLW6JeklfZHoGLqy',
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);