import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const notes = (await getCollection('notebook')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const base = site?.toString().replace(/\/$/, '') ?? 'https://karthikbabu.in';

  const items = notes
    .map((note) => {
      const link = `${base}/notebook/${note.id}`;
      const pubDate = note.data.date.toUTCString();
      return `
    <item>
      <title><![CDATA[${note.data.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${note.data.summary}]]></description>
    </item>`;
    })
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Lab notebook · Karthik Babu</title>
    <link>${base}/notebook</link>
    <description>Field notes from hands-on R&amp;D on real hardware.</description>
    <language>en-gb</language>
    <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
};
