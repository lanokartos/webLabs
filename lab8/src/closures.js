/**
 * @typedef {object} Counter
 * @property {() => number} increment збільшує значення на 1 і повертає нове
 * @property {() => number} reset повертає значення до початкового і повертає його
 * @property {() => number} value поточне значення
 */

/**
 * C5.1. Створює лічильник.
 * Специфікація — ТЗ, C5.
 *
 * @param {number} [start]
 * @returns {Counter}
 */
export function createCounter(start = 0) {
  let current = start;
  const increment = () => ++current;
  const reset = () => (current = start);
  const value = () => current;
  return { increment, reset, value };
}
/**
 * C5.2. Обгортає `fn` так, що вона виконується щонайбільше один раз.
 * Специфікація — ТЗ, C5.
 *
 * @template {(...args: any[]) => any} F
 * @param {F} fn
 * @returns {F}
 */
export function once(fn) {
  let hasRun = false;
  let result;
  return function (...args) {
    if (!hasRun) {
      hasRun = true;
      result = fn(...args);
    }
    return result;
  }
}

/**
 * C5.3. Запам'ятовує результати `fn` для кожного значення її єдиного аргументу.
 * Специфікація — ТЗ, C5.
 *
 * @template T, R
 * @param {(arg: T) => R} fn
 * @returns {(arg: T) => R}
 */
export function memoize(fn) {
  let cache = new Map()
  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg)
    } else {
      const result = fn(arg)
      cache.set(arg, result)
      return result
    }
  }
}
