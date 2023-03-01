import { useState, useEffect, useCallback } from 'react'
import Form from '../../components/Form/Form'
import InfiniteScrool from '../../components/InfiniteScroll/InfiniteScrool'
import DataCountries from '../../models/ICountries'
import * as APICountries from '../../services/APIs/countries.api'
import FilterCountryForm from '../../models/IFilterCountryForm'
import useDebounce from '../../core/hook/useDebounce'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { render } from 'react-dom'
export default function Countries() {
    const [countries, setCountries] = useState<Array<DataCountries>>([])
    const [countryName, setCountryName] = useState('')
    const [selectRegion, setSelectRegion] = useState('')

    const debounceSearch = useDebounce(countryName, 750)
    const debounceRegion = useDebounce(selectRegion, 100)
    const handleSearchCountries = useCallback(
        async ({ searchField, region }: FilterCountryForm) => {
            try {
                if (region) {
                    const { data } = await APICountries.findByRegion(region)
                    setCountries(data)
                    return
                }

                if (searchField) {
                    const { data } = await APICountries.findCountries({
                        searchField,
                        region
                    })
                    setCountries(data)
                    return
                }

                if (searchField === '' && region === '') {
                    console.log('1');
                    const { data } = await APICountries.findCountries()
                    setCountries(data)
                    return
                }
            } catch (err) {
                console.error('❌ Error', err)
            }
        },
        []
    )

    useEffect(() => {
        if (debounceRegion || debounceSearch || debounceSearch === '') {
            ; (async () => {
                await handleSearchCountries({
                    searchField: debounceSearch,
                    region: debounceRegion
                })
            })()
        }

    }, [debounceRegion, debounceSearch, handleSearchCountries])

    const renderCard = ({ item, key }: { item: DataCountries, key: string | number }) => (
        <Link
            key={key}
            to={{
                pathname: `/countries/${key}`,
            }}
        >
            <Card
                data={item}
                key={key}
            />
        </Link>
    )

    return (
        <div className=''>
            <Form />
            <InfiniteScrool
                items={countries}
                keyExtractor={({ alpha3Code }) => alpha3Code}
                renderItem={renderCard}
                className='grid lg:grid-cols-4 container mx-auto lg:gap-16 mt-12 place-content-center lg:px-16'

            />

        </div>
    )
}
