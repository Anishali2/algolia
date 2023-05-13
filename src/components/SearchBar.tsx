import { useState } from 'react'

const SearchBar = ({ refine }: any) => {
  const [searchData, setSearchData] = useState('')
  return (
    <input
      style={{
        height: '40px',
        borderLeft: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderRight: 0
      }}
      type="search"
      name="search"
      id="search"
      placeholder="Search for mentors,creators,industry,sector..."
      onChange={(e) => {
        refine(e.currentTarget.value)
        setSearchData(e.target.value)

        //   const totalsearchandfilterdata = allcheckboxes
        //   totalsearchandfilterdata['search'] = e.target.value

        //   props.senddatatoexplore(totalsearchandfilterdata)
      }}
      value={searchData}
      className="block w-full px-3 bg-white rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-2xl focus:scale-105 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  )
}

export default SearchBar
