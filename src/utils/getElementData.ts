import { DebuggerService } from '@kluntje/services';

interface ElementData {
  element?: HTMLElement;
  textContent?: string;
  innerHTML?: string;
}

/**
 * Recursively finds the parent DIV element of a given element.
 * @param {HTMLElement} rowElement - The starting HTML element.
 * @returns {HTMLElement | undefined} The parent DIV element or undefined if not found.
 */
const getRichtextElement = (rowElement: HTMLElement): HTMLElement | undefined => {
  if (!rowElement?.parentElement) return undefined;
  if (rowElement?.parentElement?.tagName !== 'DIV') {
    return getRichtextElement(rowElement.parentElement);
  }
  return rowElement.parentElement;
};

/**
 * Finds the parent PICTURE element of a given element.
 * @param {HTMLElement} rowElement - The starting HTML element.
 * @returns {HTMLElement | undefined} The parent PICTURE element or undefined if not found.
 */
const getPictureElement = (rowElement: HTMLElement): HTMLElement | undefined => {
  if (!rowElement?.parentElement) return undefined;
  if (rowElement?.parentElement?.tagName !== 'PICTURE') {
    DebuggerService.error('Parent element is not a picture element');
  }
  return rowElement.parentElement;
};

/**
 * Determines the type of element and returns the appropriate parent element.
 * @param {HTMLElement} element - The starting HTML element.
 * @param {boolean} isRichText - Boolean indicating if the element is rich text.
 * @param {boolean} isPicture - Boolean indicating if the element is a picture.
 * @returns {HTMLElement | undefined} The appropriate parent element or the original element.
 */
const getElementByType = (element: HTMLElement, isRichText: boolean, isPicture: boolean): HTMLElement | undefined => {
  if (isRichText) {
    return getRichtextElement(element);
  } else if (isPicture) {
    return getPictureElement(element);
  }
  return element;
};

export function getElementData(block: HTMLElement) {
  return <T extends string>(rowIndex: number = 0, entries: T[]): Record<T, ElementData> => {
    const row = block.children[rowIndex];
    if (!row) return {} as Record<T, ElementData>;
    const result = {} as Record<T, ElementData>;

    entries.forEach((entry, index) => {
      const isRichText = entry.includes('richtext') || entry.includes('rte');
      const isPicture = entry.includes('picture');
      let element = row.children[index] as HTMLElement;

      // Find the deepest child for the current entry
      while (element && element.children.length) {
        element = element.children[0] as HTMLElement;
      }

      const finalElement = getElementByType(element, isRichText, isPicture);

      result[entry] = {
        element: finalElement || undefined,
        textContent: finalElement?.textContent || undefined,
        innerHTML: finalElement?.innerHTML || undefined,
      };
    });

    return result;
  };
}
