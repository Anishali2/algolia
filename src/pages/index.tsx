import Head from 'next/head'
import { JustifyBetween } from '@/components/twin'
import FilterButton from '@/components/Filters'
import { categery, colourStyles } from '@/constants/filters'
import ReactSelect from 'react-select'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'
import ActiveFilters from '@/components/Filters/ActiveFilters'
import UserProfile from '@/components/UsersProfile'
import useFetch from '@/hooks/useFetch'
import {
  connectHits,
  connectSearchBox,
  connectRefinementList,
  InstantSearch,
  RefinementList
} from 'react-instantsearch-dom'
import SearchBar from '@/components/SearchBar'
import algoliasearch from 'algoliasearch'
import { useEffect } from 'react'
import CheckBoxes from '../components/Filters/CheckBoxes'
export default function Home() {
  const { results, fetchData } = useFetch()
  // const appId = 'BWSZCNGIF8'
  // const apiKey = 'a4212f0ee1185799ec70bbab52be0ac6'
  // const indexName = 'meetmymentor'
  const Hitsz = ({ hits }) => {
    console.log('hits------', hits)

    return null
  }

  const GenderRefinementList = ({ items, refine, createURL }) => (
    <div>
      {/* {items.map((item) => (
        <div key={item.label}>
          <input
            type="checkbox"
            value={item.label}
            checked={item.isRefined}
            onChange={(event) => {
              event.preventDefault()
              refine(item.value)
            }}
          />
          <a href={createURL(item.value)}>
            {item.label} ({item.count})
          </a>
        </div>
      ))} */}
      {items &&
        items.map((person: any, personIdx: number) => (
          <div key={personIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label
                htmlFor={`person-${person.id}`}
                className="select-none font-medium text-gray-900"
              >
                {person.label}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={`person-${person.label}`}
                name={`person-${person.label}`}
                checked={person.isRefined}
                type="checkbox"
                onChange={(event) => {
                  event.preventDefault()
                  refine(person.value)
                }}
                key={person.label}
                value={person.label}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
          </div>
        ))}
    </div>
  )

  const ConnectedGenderRefinementList =
    connectRefinementList(GenderRefinementList)

  const CustomHits = connectHits(Hitsz)
  // const List = connectRefinementList(RainfainmentList)
  const searchClient = algoliasearch(
    'BWSZCNGIF8',
    'a4212f0ee1185799ec70bbab52be0ac6'
  )
  const CustomSearchBox = connectSearchBox(SearchBar)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InstantSearch indexName="meetmymentor" searchClient={searchClient}>
        <div className="max-w-5xl mx-auto mt-20">
          <JustifyBetween>
            <FilterButton>
              <ConnectedGenderRefinementList attribute="documentdata.personalinfo.gender" />
            </FilterButton>
            <div
              className="relative mt-2 flex  items-center justify-center"
              style={{ width: '65%' }}
            >
              <ReactSelect
                className="block w-2/12   text-gray-900 shadow-sm  border-0 max-[1050px]:hidden "
                options={categery}
                styles={colourStyles}
                placeholder="All"
                maxMenuHeight={500}
                // value={reactSelectCatagorySelectedOption}
                components={{
                  IndicatorSeparator: () => null
                }}
              />
              {/* 
            <input
              type="search"
              name="search"
              id="search"
              onChange={(e) => fetchData(`${e.target.value} `)}
              placeholder="Search for mentors,creators,industry,sector..."
              className="block w-full border-x-0 border-y-0 h-10 bg-white rounded-md border-0 py-1.5 pl-3 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-2xl focus:scale-105 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> */}
              {/* <p>Custom Search bar</p> */}
              <CustomSearchBox />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button className="inline-flex items-center   border-0 px-1 font-sans text-xs text-gray-400 hover:bg-transparent ">
                  <MagnifyingGlassCircleIcon className="h-8 w-8 text-gray-300 hover:text-blue-500 hover:bg-transparent hover:scale-105 rounded-full hover:shadow" />
                </button>
              </div>
            </div>
          </JustifyBetween>
          <RefinementList attribute="documentdata.personalinfo.gender" />
          <ActiveFilters />
          <CustomHits />
          {/* <RefinementList attribute="documentdata.personalinfo.gender" /> */}
          {/* {results && results.map(() => <p>hello</p>)} */}
          <UserProfile />
        </div>
      </InstantSearch>
    </div>
  )
}