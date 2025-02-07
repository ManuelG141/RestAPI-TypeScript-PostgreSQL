
export const isValidId = (id: string): boolean => {
  return !isNaN(Number(id))
}
