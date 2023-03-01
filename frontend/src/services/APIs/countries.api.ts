import axios from 'axios'
import DataCountries from '../../models/ICountries'
import FilterCountryForm from '../../models/IFilterCountryForm'

const BASE_URL = 'https://restcountries.com/v3.1'

export async function findCountries(params?: FilterCountryForm) {
    if (params?.searchField || params?.region) {
        return await axios.get<Array<DataCountries>>(`${BASE_URL}/name/${params.searchField}`)
    }
    return await axios.get<Array<DataCountries>>(`${BASE_URL}/all`)
}

export async function findById(id: string) {
    return await axios.get<DataCountries>(`${BASE_URL}/alpha/${id}`)
}

export async function findByRegion(region: string) {
    return await axios.get<Array<DataCountries>>(`${BASE_URL}/region/${region}`)

}