const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "EUR", style: "currency"})

export default function CurrencyFormatter(number){
  return CURRENCY_FORMATTER.format(number)
}