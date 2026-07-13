export const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Partial<T> => {
  const finalObject: Partial<T> = {};

  for (const key of keys) {
    if (obj[key] !== undefined) {
      finalObject[key] = obj[key];
    }
  }

  return finalObject;
};
