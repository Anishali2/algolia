import { allCheckBoxes, categery, language } from '@/constants/filters'
import { useSelected } from '@/zustand'
import { Popover, Transition } from '@headlessui/react'
import {
  CheckBadgeIcon,
  CursorArrowRippleIcon,
  FunnelIcon,
  InboxStackIcon,
  LanguageIcon,
  UserIcon
} from '@heroicons/react/20/solid'
import React, { Fragment, useState } from 'react'
import { RefinementList } from 'react-instantsearch-dom'
import ReactSelect from 'react-select'
import CheckBoxes from './CheckBoxes'

const FilterButton = ({ children }: { children: React.ReactNode }) => {
  const {
    gender,
    setGender,
    setSocialMedia,
    socialMedia,
    verified,
    setVerified
  } = useSelected()
  return (
    <div className="bg-white">
      <div className="flex justify-center">
        <div className="relative mt-2 flex items-center justify-start ">
          <Popover className="   relative  inline-block    ">
            <Popover.Button
              type="button"
              className="rounded-md justify-self-start border border-gray-500 bg-white py-2.5 px-4 text-sm font-semibold text-gray-900 shadow-sm ring-0"
            >
              Filter{' '}
              <FunnelIcon
                className="h-3.5 w-3.5 text-gray-500"
                style={{ display: 'inline-block' }}
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-16 flex w-screen top-16 max-w-min lg:-translate-x-[14%] max-[390px]:-translate-x-[22%] -translate-x-[19%] px-4  ">
                <div className="w-96 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5  h-64 overflow-y-auto  ">
                  <legend className="text-base font-semibold leading-6 text-gray-900">
                    <InboxStackIcon
                      className="h-5 w-5 text-gray-500"
                      style={{ display: 'inline-block' }}
                    />
                    Category{' '}
                  </legend>

                  <ReactSelect
                    className=" w-full   mt-2 text-gray-900 shadow-sm  border-0   "
                    options={categery}
                    placeholder="All Category"
                    maxMenuHeight={200}
                  />
                  <legend className="text-base mt-3 font-semibold leading-6 text-gray-900">
                    <LanguageIcon
                      className="h-5 w-5 text-gray-500"
                      style={{ display: 'inline-block' }}
                    />{' '}
                    Language{' '}
                  </legend>

                  <ReactSelect
                    className=" w-full   mt-2 text-gray-900 shadow-sm  border-0   "
                    options={language}
                    placeholder="All Language"
                    maxMenuHeight={200}
                  />
                  {children}
                  {/* <CheckBoxes
                    items={gender}
                    setChange={setGender}
                    label="Genders"
                    icon={<UserIcon className="h-5 w-5 text-gray-500" />}
                  /> */}

                  <CheckBoxes
                    items={socialMedia}
                    setChange={setSocialMedia}
                    label="Social Search"
                    icon={
                      <CursorArrowRippleIcon className="h-5 w-5 text-gray-500" />
                    }
                  />
                  <CheckBoxes
                    items={verified}
                    setChange={setVerified}
                    label="Verifation"
                    icon={<CheckBadgeIcon className="h-5 w-5 text-gray-500" />}
                  />
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default FilterButton
