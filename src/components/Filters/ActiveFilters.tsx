import { categery } from '@/constants/filters'
import { useSelected } from '@/zustand'
import React from 'react'

const ActiveFilters = () => {
  const {
    gender,
    setGender,
    setSocialMedia,
    socialMedia,
    verified,
    setVerified,
    checkedBoxes,
    setCheckedBoxex
  } = useSelected()
  const updateArray = (itemsArray: any, id: any) => {
    const filterSelected = checkedBoxes.filter((v: any) => v.id !== id)
    setCheckedBoxex(filterSelected)
    const filteredArray = itemsArray.map((v: any) => ({
      ...v,
      checkstatus: v.id === id ? false : v.checkstatus
    }))

    return filteredArray
  }
  const removeFilter = (id: number, type: string) => {
    if (type == 'verification') {
      setVerified(updateArray(verified, id))
    } else if (type == 'gender') {
      setGender(updateArray(gender, id))
    } else if (type == 'social') {
      setSocialMedia(updateArray(socialMedia, id))
    }
  }
  return (
    <div>
      <section className="flex items-center justify-center mt-5">
        <div className="bg-gray-100 rounded-md w-full">
          <div className="mx-auto max-w-7xl py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
            <h3 className="text-sm font-medium text-gray-500">
              Active Filters
            </h3>

            <div
              aria-hidden="true"
              className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
            />

            <div className="mt-2 sm:mt-0 sm:ml-4">
              <div className="-m-1 flex flex-wrap items-center">
                {checkedBoxes &&
                  checkedBoxes.map((value) => (
                    <span
                      key={value.label}
                      className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                    >
                      <span>{value.name}</span>

                      <button
                        type="button"
                        id="uniqbutto"
                        //   target={'uniqbutto'}
                        value={value.label}
                        //   cboxheading={activeFilter.cbheading}
                        className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-300 hover:text-gray-500"
                        onClick={() => removeFilter(value.id, value.type)}
                        //   onClick={(e) => {
                        //     if (e.target.getAttribute('cboxheading') != null) {
                        //       props.onclickingxbutton(
                        //         e.target.value,
                        //         false,
                        //         e.target.getAttribute('cboxheading')
                        //       )
                        //     }
                        //   }}
                      >
                        <svg
                          className="h-2 w-2"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 8 8"
                          style={{ pointerEvents: 'none' }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeWidth="1.5"
                            d="M1 1l6 6m0-6L1 7"
                            style={{ pointerEvents: 'none' }}
                          />
                        </svg>
                      </button>
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ActiveFilters
