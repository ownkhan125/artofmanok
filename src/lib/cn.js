/**
 * Joins class names, filtering out falsy values.
 * Lightweight alternative to clsx for simple conditional class merging.
 *
 * @param {...(string|false|null|undefined)} classes
 * @returns {string}
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}
