export const shouldFlip = (index: number) => (
  prevDecisionData: number,
  currentDecisionData: number
) => index === prevDecisionData || index === currentDecisionData;
