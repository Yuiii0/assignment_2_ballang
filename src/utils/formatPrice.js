export function formatPrice(price) {
  return price.toLocaleString();
}

export const calculateDisCountRate = (originalPrice, discountedPrice) => {
  if (originalPrice <= 0 || discountedPrice <= 0) {
    return;
  }
  const discountRate =
    ((originalPrice - discountedPrice) / originalPrice) * 100;
  return parseInt(discountRate);
};
