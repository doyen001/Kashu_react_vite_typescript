export const getCardType = (cardNumber: any) => {
  cardNumber = cardNumber.replace(/\D/g, ''); // Remove non-digits

  if (/^4/.test(cardNumber)) return 'Visa';
  if (/^5[1-5]/.test(cardNumber) || /^2(2[2-9]|[3-6]|7[01]|720)/.test(cardNumber)) return 'MasterCard';
  if (/^3[47]/.test(cardNumber)) return 'American Express';
  if (/^6(011|5|4[4-9])/.test(cardNumber)) return 'Discover';
  if (/^3(0[0-5]|[68])/.test(cardNumber)) return 'Diners Club';
  if (/^35(2[89]|[3-8])/.test(cardNumber)) return 'JCB';

  return 'Unknown';
}