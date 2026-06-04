# Blog Publishing Guide

## Current publishing workflow

The website now supports three-language SEO page structure for core pages:

- Simplified Chinese: `/`
- Traditional Chinese: `/zh-hant/`
- English: `/en/`

For blog posts, the route structure is also in place, but the current article body is still shared from one Markdown file. That means:

- one post file can already appear under `/blog/`, `/en/blog/`, and `/zh-hant/blog/`
- full per-language article SEO is best when each language eventually has its own article copy

## Where to publish a new article

Create a new Markdown file in:

- `src/content/blog/`

Example filename:

- `china-relationship-red-flags.md`

## Required frontmatter

```md
---
title: "How to Verify Someone in China Before Marriage or Commitment"
description: "A practical guide for overseas Chinese clients who need lawful ways to assess a relationship in mainland China."
pubDate: 2026-06-04
updatedDate: 2026-06-04
category: "Relationship Investigation"
tags:
  - China investigation
  - relationship verification
  - overseas Chinese
author: "Nanjing Xingwaitian"
draft: false
---
```

## Writing rules for this site

- Put the direct answer in the first 80 to 120 words.
- Keep the article focused on one user intent.
- Add clear compliance boundaries.
- Mention mainland China, overseas Chinese, and cross-border context naturally.
- Link readers back to the matching service page and the contact page.

## Suggested article structure

```md
## What the reader needs to know first

Short direct answer.

## When this problem usually happens

Context and audience.

## What information is useful

Bullet points or short sections.

## What can be checked lawfully

Clarify practical and legal boundaries.

## What to avoid

Warn against illegal or exaggerated requests.

## When to ask for local support

Move the reader toward contact or assessment.
```

## How the article goes live

1. Add the Markdown file under `src/content/blog/`.
2. Commit and push to GitHub.
3. Cloudflare Pages builds automatically.
4. The article will appear in the blog index after deployment.

## Images

If the article needs images, place them under a stable public path such as:

- `public/images/blog/`

Then reference them in Markdown using site-relative paths.

## Recommendation for true three-language article SEO

For the next phase, publish article bodies separately for:

- Simplified Chinese
- Traditional Chinese
- English

That will let each article page have fully language-matched body content instead of only language-specific layout and route structure.
