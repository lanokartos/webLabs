/** @typedef {import('./normalize.js').Show} Show */

/**
 * C3. Повертає новий масив серіалів, відсортований за полем `key`.
 * Специфікація — ТЗ, C3.
 *
 * @param {Show[]} shows
 * @param {'name' | 'year' | 'rating'} key
 * @param {'asc' | 'desc'} [direction]
 * @returns {Show[]}
 */
export function sortShows(shows, key, direction = 'asc') {
  return shows.toSorted((a, b) => {
    const firstShow = a[key]
    const secondShow = b[key]

    if (firstShow === null && secondShow === null)
      return 0
    if (firstShow === null)
      return 1
    if (secondShow === null)
      return -1

    let comperation
    if (key === 'name') {
      comperation = firstShow.localeCompare(secondShow)
    } else {
      comperation = firstShow - secondShow
    }

    return direction === 'asc' ? comperation : -comperation
  })
}
