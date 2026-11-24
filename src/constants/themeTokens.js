/**
 * Formats a number to USD currency (e.g. 349 -> "$349.00")
 */
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Calculates discount percentage string (e.g. 500, 350 -> "-30%")
 */
export function getDiscountPercentage(originalPrice, salePrice) {
  if (!originalPrice || originalPrice <= salePrice) return null;
  const percent = Math.round(((originalPrice - salePrice) / originalPrice) * 100);
  return `-${percent}%`;
}
