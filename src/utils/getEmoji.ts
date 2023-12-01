const emoji = [
  "🐸",
  "🦄",
  "🐘",
  "🐁",
  "🐙",
  "🐢",
  "🐍"
];

export const getEmoji = (): string => {
  return emoji[Math.floor(Math.random() * emoji.length)];
};
