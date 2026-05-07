/**
 * Formats a date into a human-readable string.
 *
 * @param {string|Date} input
 * @param {Intl.DateTimeFormatOptions} [options]
 * @returns {string}
 */
export const formatDate = (input, options) => {
  const date = input instanceof Date ? input : new Date(input)

  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  }).format(date)
}
