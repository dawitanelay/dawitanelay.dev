<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title><xsl:value-of select="rss/channel/title" /></title>
        <style>
          :root {
            color-scheme: light;
            --bg: #f7f9fc;
            --panel: #ffffff;
            --text: #1f2937;
            --muted: #4b5563;
            --accent: #0f766e;
            --border: #dbe4ee;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
            background: radial-gradient(circle at top right, #d1fae5 0%, var(--bg) 48%);
            color: var(--text);
          }
          main {
            max-width: 860px;
            margin: 2rem auto;
            padding: 0 1rem 2rem;
          }
          .panel {
            background: var(--panel);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 1.25rem;
            box-shadow: 0 12px 30px rgba(15, 118, 110, 0.08);
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: 1.65rem;
            line-height: 1.2;
          }
          p, li, a {
            font-size: 1rem;
            line-height: 1.55;
          }
          .muted { color: var(--muted); }
          .meta {
            margin: 1rem 0 0;
            padding: 0;
            list-style: none;
          }
          .meta li { margin: 0.25rem 0; }
          .item {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid var(--border);
          }
          .item h2 {
            margin: 0 0 0.35rem;
            font-size: 1.1rem;
          }
          a { color: var(--accent); text-decoration: none; }
          a:hover { text-decoration: underline; }
          code {
            background: #e5edf6;
            padding: 0.15rem 0.35rem;
            border-radius: 6px;
          }
        </style>
      </head>
      <body>
        <main>
          <section class="panel">
            <h1><xsl:value-of select="rss/channel/title" /></h1>
            <p class="muted"><xsl:value-of select="rss/channel/description" /></p>
            <ul class="meta">
              <li>
                Feed URL:
                <a>
                  <xsl:attribute name="href"><xsl:value-of select="rss/channel/atom:link/@href" /></xsl:attribute>
                  <xsl:value-of select="rss/channel/atom:link/@href" />
                </a>
              </li>
              <li>
                Site:
                <a>
                  <xsl:attribute name="href"><xsl:value-of select="rss/channel/link" /></xsl:attribute>
                  <xsl:value-of select="rss/channel/link" />
                </a>
              </li>
            </ul>

            <xsl:if test="count(rss/channel/item) = 0">
              <div class="item">
                <p class="muted">No feed items are available yet.</p>
              </div>
            </xsl:if>

            <xsl:for-each select="rss/channel/item">
              <article class="item">
                <h2>
                  <a>
                    <xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute>
                    <xsl:value-of select="title" />
                  </a>
                </h2>
                <p class="muted">
                  <xsl:value-of select="pubDate" />
                </p>
                <p>
                  <xsl:value-of select="description" disable-output-escaping="yes" />
                </p>
              </article>
            </xsl:for-each>
          </section>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>