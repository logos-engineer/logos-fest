const StaggerChild = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      duration: 1.3,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 0.5,
      // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.3,
    },
  },
}

export default StaggerChild
