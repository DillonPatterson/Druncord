export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  links?: Array<{
    href: string;
    label: string;
  }>;
};

export const faqItems: FaqItem[] = [
  {
    id: "what-is-druncord",
    question: "What is Druncord?",
    answer:
      "Druncord is an 18+ Discord community built like an online bar. It is social, voice-first, and meant for adults who actually want to hang out instead of lurking in dead text channels.",
    links: [{ href: "/about", label: "About Druncord" }],
  },
  {
    id: "really-18-plus",
    question: "Is Druncord really 18+?",
    answer:
      "Yes. Adults only. Staff may ask for age verification if something feels off, and minors are removed. If somebody claims to be under 13, they are banned and reported to Discord Trust & Safety.",
    links: [{ href: "/rules", label: "House rules" }],
  },
  {
    id: "need-to-drink",
    question: "Do I have to be drinking to join?",
    answer:
      "No. Drinking is part of the culture, but it is not a requirement. Some regulars drink, some do not, and nobody is expected to perform bar energy on command.",
  },
  {
    id: "voice-channels",
    question: "What happens in voice channels?",
    answer:
      "Most of the server lives in voice. People talk, swap stories, play games, react to whatever is happening online, or just sit in the room and listen until they feel settled.",
  },
  {
    id: "how-active",
    question: "How active is Druncord?",
    answer:
      "It is busiest late at night, especially after 9pm Eastern, but somebody is usually around. The point is not fake activity metrics. The point is that the room feels lived in.",
    links: [{ href: "/events", label: "Events" }],
  },
  {
    id: "is-it-free",
    question: "Is Druncord free?",
    answer:
      "Yes. Joining is free. You only need a Discord account, a mic if you want to talk, and enough sense to follow the house rules.",
    links: [{ href: "/join", label: "Join Druncord" }],
  },
  {
    id: "is-it-safe",
    question: "Is Druncord safe?",
    answer:
      "The server is actively moderated. That does not mean sterile. It means hate speech, harassment, solicitation, and privacy violations get handled instead of lingering.",
    links: [{ href: "/rules", label: "Safety and rules" }],
  },
  {
    id: "how-to-join",
    question: "How do I join Druncord?",
    answer:
      "Use the join link, land in the server, read the room, and follow the rules. Most people start by listening for a minute before they jump into voice.",
    links: [{ href: "/join", label: "How joining works" }],
  },
];

export const extendedFaqItems: FaqItem[] = [
  {
    id: "what-is-online-bar",
    question: "What is an online bar exactly?",
    answer:
      "It is a social Discord built to feel like a room, not a feed. The conversation is live, the tone is adult, and people come in to talk, linger, and drift between voices the same way they would in a real bar.",
    links: [{ href: "/about", label: "Why Druncord exists" }],
  },
  {
    id: "who-runs-druncord",
    question: "Who runs Druncord?",
    answer:
      "A few adults who wanted a better bar. The people behind it care more about keeping the room good than turning it into a brand exercise.",
    links: [{ href: "/about", label: "About the regulars" }],
  },
  {
    id: "staff-and-mods",
    question: "Are there staff and moderators?",
    answer:
      "Yes. Staff are present, visible, and willing to step in when somebody is making the place worse. The goal is calm moderation, not public theater.",
    links: [{ href: "/rules", label: "Moderation policy" }],
  },
  {
    id: "most-active-time",
    question: "What time is Druncord most active?",
    answer:
      "Late evenings and nights tend to be the busiest, especially in Eastern time. It is built for people who like to talk after the day is over, not for office-hour chatter.",
    links: [{ href: "/events", label: "What's on" }],
  },
  {
    id: "what-events",
    question: "What kinds of events does Druncord have?",
    answer:
      "Think game nights, listening rooms, loose hangouts, and occasional themed voice sessions. The schedule stays simple, readable, and social instead of feeling like a content calendar.",
    links: [{ href: "/events", label: "Upcoming events" }],
  },
  {
    id: "new-to-discord-voice",
    question: "I've never used Discord voice before. Will I be lost?",
    answer:
      "Not likely. Most people join, mute up, and listen first. That is normal here. You can ease in at your own pace, and the join page explains what the first few minutes usually feel like.",
    links: [{ href: "/join", label: "First time in voice" }],
  },
];
