export type EventItem = {
  title: string;
  date: string;
  description: string;
  recurring: boolean;
  startDate?: string;
};

// PLACEHOLDER — replace before launch
export const events: EventItem[] = [
  {
    title: "Friday Last Call",
    date: "Fridays at 10pm ET",
    description:
      "The late crowd settles in, drinks get poured, and somebody eventually starts a game that nobody meant to play for three hours.",
    recurring: true,
  },
  {
    title: "Sunday Recovery Booth",
    date: "Sundays at 8pm ET",
    description:
      "A slower voice night for decompressing, swapping weekend stories, and hanging around with the regulars without forcing the pace.",
    recurring: true,
  },
  {
    title: "March Open Tab",
    date: "March 22 at 9pm ET",
    description:
      "A one-off welcome night for new faces who want an easy first drop-in. Expect open voice, introductions if you want them, and zero pressure if you do not.",
    recurring: false,
    startDate: "2026-03-22T21:00:00-04:00",
  },
];
