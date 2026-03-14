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
          @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500&display=swap");

          :root {
            color-scheme: light;
            --bg: #f4f8f7;
            --bg-alt: #d9efe9;
            --panel: #ffffff;
            --text: #0f1c2a;
            --muted: #41566b;
            --accent: #006b59;
            --accent-2: #e46f2e;
            --border: #cdd9e4;
            --chip: #e7f2f5;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: "Space Grotesk", "Avenir Next", "Trebuchet MS", sans-serif;
            background:
              radial-gradient(circle at 18% 10%, #f8f1d6 0%, transparent 28%),
              radial-gradient(circle at 84% 18%, #d7f0e8 0%, transparent 30%),
              linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 42%);
            color: var(--text);
          }
          main {
            max-width: 960px;
            margin: 2.2rem auto;
            padding: 0 1.1rem 2rem;
          }
          .panel {
            background: var(--panel);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 1.35rem;
            box-shadow:
              0 30px 70px rgba(17, 38, 58, 0.12),
              0 2px 0 rgba(17, 38, 58, 0.06);
          }
          .eyebrow {
            display: inline-block;
            padding: 0.2rem 0.6rem;
            border-radius: 999px;
            border: 1px solid var(--border);
            background: var(--chip);
            color: var(--accent);
            font-family: "IBM Plex Mono", "Consolas", monospace;
            font-size: 0.74rem;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 0.9rem;
          }
          h1 {
            margin: 0 0 0.5rem;
            font-size: clamp(1.65rem, 4vw, 2.4rem);
            line-height: 1.1;
          }
          p, li, a {
            font-size: 1rem;
            line-height: 1.55;
          }
          .muted { color: var(--muted); }
          .split {
            display: grid;
            gap: 0.9rem;
            grid-template-columns: 1fr;
          }
          @media (min-width: 720px) {
            .split {
              grid-template-columns: 1fr auto;
              align-items: end;
            }
          }
          .actions {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 0.48rem 0.75rem;
            text-decoration: none;
            font-family: "IBM Plex Mono", "Consolas", monospace;
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 0.02em;
          }
          .btn-main {
            border-color: var(--accent);
            color: #ffffff;
            background: var(--accent);
          }
          .btn-alt {
            color: var(--text);
            background: #f3f7fb;
          }
          .meta {
            margin: 1rem 0 0;
            padding: 0;
            list-style: none;
            font-family: "IBM Plex Mono", "Consolas", monospace;
          }
          .meta li { margin: 0.25rem 0; }
          .stat-grid {
            margin-top: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 0.6rem;
          }
          .stat {
            border: 1px solid var(--border);
            border-radius: 11px;
            padding: 0.65rem 0.75rem;
            background: #f7fbff;
          }
          .stat .label {
            font-size: 0.74rem;
            color: var(--muted);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-family: "IBM Plex Mono", "Consolas", monospace;
          }
          .stat .value {
            font-size: 1rem;
            font-weight: 700;
            margin-top: 0.2rem;
          }
          .item {
            margin-top: 1.1rem;
            padding: 1rem 0 0;
            border-top: 1px dashed var(--border);
          }
          .item h2 {
            margin: 0 0 0.35rem;
            font-size: 1.18rem;
            line-height: 1.3;
          }
          a { color: var(--accent); text-decoration: none; }
          a:hover { text-decoration: underline; }
          .date {
            margin: 0;
            color: var(--muted);
            font-size: 0.86rem;
            font-family: "IBM Plex Mono", "Consolas", monospace;
          }
          .desc {
            margin-top: 0.55rem;
            max-width: 72ch;
          }
          .footer-note {
            margin-top: 1.1rem;
            padding-top: 0.8rem;
            border-top: 1px solid var(--border);
            font-size: 0.88rem;
            color: var(--muted);
          }
        </style>
      </head>
      <body>
        <main>
          <section class="panel">
            <span class="eyebrow">DevOps Feed</span>
            <div class="split">
              <div>
                <h1><xsl:value-of select="rss/channel/title" /></h1>
                <p class="muted"><xsl:value-of select="rss/channel/description" /></p>
              </div>
              <div class="actions">
                <a class="btn btn-main" href="/resume/">Resume</a>
                <a class="btn btn-alt">
                  <xsl:attribute name="href"><xsl:value-of select="rss/channel/link" /></xsl:attribute>
                  Blog Home
                </a>
              </div>
            </div>

            <ul class="meta">
              <li>
                feed:
                <a>
                  <xsl:attribute name="href"><xsl:value-of select="rss/channel/atom:link/@href" /></xsl:attribute>
                  <xsl:value-of select="rss/channel/atom:link/@href" />
                </a>
              </li>
              <li>
                site:
                <a>
                  <xsl:attribute name="href"><xsl:value-of select="rss/channel/link" /></xsl:attribute>
                  <xsl:value-of select="rss/channel/link" />
                </a>
              </li>
            </ul>

            <div class="stat-grid">
              <div class="stat">
                <div class="label">Posts</div>
                <div class="value"><xsl:value-of select="count(rss/channel/item)" /></div>
              </div>
              <div class="stat">
                <div class="label">Language</div>
                <div class="value"><xsl:value-of select="rss/channel/language" /></div>
              </div>
              <div class="stat">
                <div class="label">Source</div>
                <div class="value"><xsl:value-of select="rss/channel/generator" /></div>
              </div>
            </div>

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
                <p class="date">
                  <xsl:value-of select="pubDate" />
                </p>
                <p class="desc">
                  <xsl:value-of select="description" disable-output-escaping="yes" />
                </p>
              </article>
            </xsl:for-each>

            <p class="footer-note">
              Want the full profile? Visit <a href="/resume/">/resume/</a> for skills, experience, and project highlights.
            </p>
          </section>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>