import axios from 'axios';
import _ from 'lodash';
import { Citizen, Country } from '../interfaces';

const apiUrl = process.env.DATA_PROVIDER_API || '';

/**
 * Get countries list.
 * @return Country[]
 */
export async function countries(): Promise<Country[]> {
  const { data } = await axios.get(apiUrl);
  /**
   * Since it's about 300 records it could be acceptable,
   * However, it's more convenient to get this data grouped from the API or the DB directly in case of DB solution.
   */
  return _.chain(data?.results)
    .groupBy('nat')
    .map((citizens: any, code: string) => ({
      code: code,
      flag: `https://countryflagsapi.com/png/${code}`,
      citizensCount: citizens.length
    }))
    .value();
}

/**
 * Get citizens list by country
 * @param country
 * @return Citizen[]
 */
export async function citizens(
  country: string
): Promise<Citizen[]> {
  const { data } = await axios.get(apiUrl);
  // TODO: Use API filtration options.
  /**
   * The API does not return the same data for each country,
   * so I've decided to do it this way,
   * but I prefer an API that supports filtering and pagination with consistent data.
   */
  return data?.results
      .filter((e: Citizen) => e.nat.toLowerCase() === country.toLowerCase())
    || [];
}

/**
 * Citizen Pagination with search
 * @param country
 * @param page
 * @param search
 * @return Citizen[]
 */
export async function citizensPagination(
  country: string,
  page: number = 1,
  search?: string
): Promise<{ page: number, pages: number, items: Citizen[] }> {
  let data = await citizens(country);
  // TODO: Use API filtration and pagination options.
  if (search) {
    const filter = (e: Citizen) =>
      e.name.first.toLowerCase().includes(search.toLowerCase()) ||
      e.name.last.toLowerCase().includes(search.toLowerCase()) ||
      e.id.value === search;
    data = data.filter(filter);
  }
  // Maximum page size by default is 20 records per page.
  const pageSize = 20;
  const sliceFrom = (page - 1) * pageSize;
  const sliceTo = sliceFrom + pageSize;
  return {
    page,
    pages: Math.ceil(data.length / pageSize),
    items: data.slice(sliceFrom, sliceTo)
  };
}
