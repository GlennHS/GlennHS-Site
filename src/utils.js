export const dateToString = (date) => {
  const d = new Date(date)
  return d.toLocaleDateString()
}