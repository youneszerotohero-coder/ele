export const revealViewport = { once: true, amount: 0.18 };

export const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

export const revealTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};
