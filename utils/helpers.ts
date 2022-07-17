import { identity, pickBy } from 'lodash';

/**
 * Delete the keys of null and undefined values form an object.
 * @param params
 */
export function cleanQueryParams(params: any): any {
  return pickBy({
    ...params
  }, identity);
}
