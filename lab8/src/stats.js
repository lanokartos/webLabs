/** @typedef {import('./normalize.js').Show} Show */

/**
 * @typedef {object} GenreStats
 * @property {number} count скільки серіалів мають цей жанр
 * @property {number | null} averageRating середня оцінка цих серіалів
 */

/**
 * C4. Рахує статистику для кожного жанру.
 * Специфікація — ТЗ, C4.
 *
 * @param {Show[]} shows
 * @returns {Record<string, GenreStats>} ключ — назва жанру
 */
export function genreStats(shows) {
  const listOfGenres = {}
  for (const show of shows) {
    for (const genre of show.genres) {
      if (listOfGenres[genre] === undefined) {
        listOfGenres[genre] = {
          count: 1,
          sumRating: show.rating === null ? 0 : show.rating,
          countOfRatings: show.rating === null ? 0 : 1
        }
      } else {
        listOfGenres[genre].count++
        if (show.rating !== null) {
          listOfGenres[genre].sumRating += show.rating
          listOfGenres[genre].countOfRatings++
        }
      }
    }
  }
  const genres = {}
  for (const genre in listOfGenres) {
    if (genres[genre] === undefined) {
      genres[genre] = {
        count: listOfGenres[genre].count,
        averageRating: listOfGenres[genre].countOfRatings === 0 ? null
          : Number((listOfGenres[genre].sumRating / listOfGenres[genre].countOfRatings).toFixed(1))
      }
    }
  }
  return genres
}
