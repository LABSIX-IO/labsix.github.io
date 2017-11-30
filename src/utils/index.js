const { min, max } = Math

export const fadeRange = (start, stop) => {
  const a = 1/(stop-start)
  const b = - start * a
  return x => max(0, min(1,a*x+b))
}
