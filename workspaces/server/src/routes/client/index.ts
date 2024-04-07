import fs from 'node:fs/promises';

import { Hono } from 'hono';

import { CLIENT_HTML_PATH } from '../../constants/paths';

const app = new Hono();

app.get('/', async (c) => {
  const html = await fs.readFile(CLIENT_HTML_PATH, 'utf-8');
  return c.html(html);
});

app.get('/*', async (c) => {
  const html = await fs.readFile(CLIENT_HTML_PATH, 'utf-8');
  return c.html(html);
});

export { app as clientApp };
