export type RuleSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export const rulesContent = {
  intro:
    "We run a bar, not a courtroom. That means the rules are short, direct, and enforced like somebody is responsible for the room.",
  sections: [
    {
      title: "Hate speech and harassment",
      body: [
        "No slurs, no hate speech, no targeted harassment, and no sustained attempts to make another person miserable. If your idea of a good time is making the room worse for somebody else, you are in the wrong bar.",
        "Adult conversation is fine. Cruelty dressed up as irony is not.",
      ],
      bullets: [
        "No attacks based on race, ethnicity, nationality, religion, gender, sexuality, disability, or similar protected traits.",
        "No dogpiling, stalking behavior, or repeated unwanted contact.",
      ],
    },
    {
      title: "Solicitation",
      body: [
        "Do not use Druncord to pitch, recruit, sell, or farm attention. That includes self-promo dumps, thirsty DMs, and showing up with a business card where a personality should be.",
      ],
      bullets: [
        "No unsolicited advertising.",
        "No pushing paid communities, services, or outside groups on members.",
      ],
    },
    {
      title: "Privacy and consent",
      body: [
        "Keep other people's information, photos, recordings, and private messages private. If it is not yours to share, do not share it.",
      ],
      bullets: [
        "No doxxing or exposing identifying information.",
        "No posting someone else's images, audio, or screenshots without consent.",
      ],
    },
    {
      title: "Content restrictions",
      body: [
        "NSFW content stays in the right channels. If you are not sure whether something belongs, assume it does not and ask staff first.",
      ],
      bullets: [
        "No explicit content outside designated NSFW spaces.",
        "No shock content or gore dropped into general conversation.",
      ],
    },
    {
      title: "Age policy",
      body: [
        "Druncord is 18+ only. Staff may request age verification if there is a reason to check. Refusing a reasonable verification request can mean losing access.",
        "If somebody claims to be under 13, they are banned and reported to Discord Trust & Safety. That is not negotiable.",
      ],
      bullets: [
        "18+ only.",
        "Age verification may be requested by staff.",
        "Claims of being under 13 lead to a ban and report to Discord T&S.",
      ],
    },
    {
      title: "Live video restrictions",
      body: [
        "If you turn on a camera, use common sense. The line is simple: no streams involving hard drugs, nudity, minors, self-harm, moving vehicles, violence, or weapons.",
      ],
      bullets: [
        "No hard drugs on camera.",
        "No nudity or sexual content on camera outside approved spaces.",
        "No minors visible on stream.",
        "No self-harm, moving vehicles, violence, or weapons on live video.",
      ],
    },
    {
      title: "Server poaching and unsolicited invites",
      body: [
        "Do not treat members like a mailing list for your other server. If people ask where else you hang out, fine. Unsolicited invite drops and member harvesting are not welcome.",
      ],
      bullets: [
        "No poaching members into other servers.",
        "No blasting outside invites in chat or DMs.",
      ],
    },
  ] as RuleSection[],
  enforcement: [
    "Moderation is handled by staff and it is handled directly. Depending on the situation, that can mean a warning, a timeout, a channel restriction, or removal.",
    "We do not owe endless debate to people who are clearly making the place worse. We do try to be fair. We have also done this before.",
  ],
  crisisResources:
    "If somebody appears to be in immediate danger, staff may step in, pause the room, and point them toward emergency or crisis resources. Druncord is a social space, not a substitute for professional help.",
};
