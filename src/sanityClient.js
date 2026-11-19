import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'us67qu5a',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true 
});

// Helper to get image/PDF URLs from Sanity
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);