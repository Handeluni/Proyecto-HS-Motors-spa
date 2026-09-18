export const formatPrice = (price:number) => new Intl.NumberFormat('es-NI',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(price)
