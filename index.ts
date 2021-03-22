/**
 * index.ts to run example functions
 */

import orderElements, { IElement } from './ElementOrderReturn/orderElements';
import formatPrice from './PriceFormat/FormatPrice';

/**
 * Order Elements Example
 */
const elements: IElement[] = [
  {
    a: ['b', 'c'],
    b: ['c'],
    c: [],
  },
];

console.log(orderElements(elements));

/**
 * Format Price Example
 */

console.log('The Amount of Gold I wish I had: ' + formatPrice(50000000101));
