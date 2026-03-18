# Druncord Website

## Setup
1. Clone the repo
2. Run `npm install`
3. Copy `.env.local.example` to `.env.local`
4. Add your Discord invite URL to `.env.local`
5. Run `npm run dev`

## How to Edit Content
- All site copy lives in `src/content/`
- Events: edit `src/content/events.ts`
- FAQ: edit `src/content/faq.ts`
- Testimonials: edit `src/content/testimonials.ts`
  (set `SHOW_TESTIMONIALS` to `false` to hide section entirely)
- Homepage copy: `src/content/home.ts`
- Rules: edit `src/content/rules.ts`

## How to Update the Discord Invite Link
Edit `NEXT_PUBLIC_DISCORD_INVITE_URL` in `.env.local`
It is referenced everywhere from this one variable.

## Deploy to Vercel
1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Add environment variables in Vercel settings
4. Deploy

## Adding a New Event
In `src/content/events.ts`, add an object to the events array:

```ts
{
  title: "Event Name",
  date: "Friday at 10pm ET",
  description: "One or two sentences about the event.",
  recurring: true,
}
```

## To disable testimonials until real quotes are ready:
In `src/content/testimonials.ts`, set:

```ts
export const SHOW_TESTIMONIALS = false;
```
