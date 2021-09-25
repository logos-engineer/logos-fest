const StaggerChildFast = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 0.2,
      // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.4,
    },
  },
}

export default StaggerChildFast
