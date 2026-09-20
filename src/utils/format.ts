export const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-NI", {
    style: "currency",
    currency: "NIO",
    maximumFractionDigits: 0,
  }).format(price);
