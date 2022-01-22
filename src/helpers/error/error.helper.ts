// eslint-disable-next-line no-unused-vars
export type Predicate<T> = (param?: T) => boolean;

export const IsNullOrUndefined = <T>(predicate: Predicate<T>, errorMessage: string) => {
  if (predicate()) {
    throw new Error(errorMessage);
  }
};
