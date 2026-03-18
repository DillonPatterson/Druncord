export function trackJoinClick(source: string) {
  // Ready for Plausible or Fathom
  // Plausible: window.plausible?.('Join Click', { props: { source } })
  // Fathom: window.fathom?.trackGoal('GOAL_ID', 0)
  // Add provider implementation here
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] Join click from:", source);
  }
}
