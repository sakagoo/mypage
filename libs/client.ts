import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'saka-guchi-work',
  apiKey: process.env.API_KEY as string,
});