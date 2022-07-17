import axios from 'axios'
import _ from 'lodash'
import { Citizen, Country } from '../interfaces'

const apiUrl = process.env.DATA_PROVIDER_API || ''

/**
 * Get countries list.
 * @return Country[]
 */
export async function countries(): Promise<Country[]> {
    const { data } = await axios.get(apiUrl)
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
export async function citizens(country: any): Promise<Citizen[]> {
    const { data } = await axios.get(apiUrl)
    return data?.results
            .filter((e: Citizen) => e.nat.toLowerCase() === country.toLowerCase())
        || []
}

/**
 * Citizen Pagination with search
 * @param country
 * @param page
 * @param search
 * @return Citizen[]
 */
export async function citizensPagination(country: string, page: number = 1, search?: string): Promise<any> {
    let data = await citizens(country)
    if (search) {
        const filter = (e: Citizen) =>
            e.name.first.toLowerCase().includes(search.toLowerCase()) ||
            e.name.last.toLowerCase().includes(search.toLowerCase()) ||
            e.id.value === search
        data = data.filter(filter)
    }
    const pageSize = 20
    const sliceFrom = (page - 1) * pageSize
    const sliceTo = sliceFrom + pageSize
    return {
        page,
        pages: Math.ceil(data.length / pageSize),
        items: data.slice(sliceFrom, sliceTo)
    }
}
