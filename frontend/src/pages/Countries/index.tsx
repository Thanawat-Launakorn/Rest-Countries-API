import React, { useState, useEffect, useCallback, ChangeEventHandler } from 'react'
import Form from '../../components/Form/Form'
import InfiniteScrool from '../../components/InfiniteScroll/InfiniteScrool'
import DataCountries from '../../models/ICountries'
import * as APICountries from '../../services/APIs/countries.api'
import FilterCountryForm from '../../models/IFilterCountryForm'
import useDebounce from '../../core/hook/useDebounce'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { EMPTY_FUNCTION } from '../../utils'
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
                className='shadow-xl rounded-md overflow-hidden bg-light-element dark:bg-dark-element transition-all ease-linear delay-200 hover:brightness-75 dark:hover:brightness-125 hover:delay-75 hover:cursor-pointer'
            />
        </Link>
    )

    const handleChangeSearchField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountryName('')
        setCountryName(e.target.value)
    }

    const handleSelectField = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectRegion('')
        setSelectRegion(e.target.value)
    }


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

    useEffect(EMPTY_FUNCTION, [selectRegion])


    return (
        <div className=''>
            <Form
                onChangeSearchField={handleChangeSearchField}
                onChangeSelectField={handleChangeSearchField}
                countryName={countryName}
                selectRegion={selectRegion}
            />
            <InfiniteScrool
                items={countries}
                keyExtractor={({ alpha3Code }) => alpha3Code}
                renderItem={renderCard}
                className='grid lg:grid-cols-4 container mx-auto lg:gap-16 mt-12 place-content-center lg:px-16'

            />

        </div>
    )
}
