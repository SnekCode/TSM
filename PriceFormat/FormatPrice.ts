const formatPrice = (price: number) => {
  // get amount in gold
  const gold = Math.floor(price / 10000);
  // remove the gold amount from price to for calculating silver
  const priceMinusGold = price - gold * 10000;
  // get silver amount
  const silver = Math.floor(priceMinusGold / 100);
  // minus both gold and silver from price, remainder is copper
  const copper = priceMinusGold - silver * 100;

  // return string checking for null to exclude that amount
  return `${gold ? gold + 'g ' : ''}${silver ? silver + 's ' : ''}${copper}c`;
};

export default formatPrice;
