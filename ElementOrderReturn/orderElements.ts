export interface IElement {
  [key: string]: string[];
}

const sortElements = (a: IElement, b: IElement) => {
  // capturing the string array
  // note this only works if the ILayout object is restricted to have one property

  const aKey = Object.keys(a)[0];
  const bKey = Object.keys(b)[0];

  // use less than here to return the smallest first
  return a[aKey].length < b[bKey].length ? -1 : 1;
};

const orderElements = (layoutArray: IElement[]) => {
  // sort the IElement Array based on the length of the sub array of dependencies
  const sortedObject = layoutArray.sort(sortElements);
  // return via map.  this is assuming each IElement Object has only one key
  return sortedObject.map((el) => Object.keys(el)[0]);
};

export default orderElements;
