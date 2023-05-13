import { useSelected } from '@/zustand'
import React from 'react'

const CheckBoxes = ({ items, label, icon, setChange }: any) => {
  const { checkedBoxes, setCheckedBoxex } = useSelected()
  const updateChecked = (id: any, value: boolean) => {
    const findItem = items.find((v: any) => v.id == id)
    const filteredItem = checkedBoxes.filter((v: any) => v.id !== id)
    if (value) {
      setCheckedBoxex([...checkedBoxes, findItem])
    } else {
      setCheckedBoxex([...filteredItem])
    }
    setChange(
      items.map((v: any) => ({
        ...v,
        checkstatus: id == v.id ? value : v.checkstatus
      }))
    )
  }
  return (
    <fieldset className="mt-4">
      <legend className="text-base flex space-x-2 font-semibold leading-6 text-gray-900">
        {icon}
        {label}
      </legend>
      <div className="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
        {items &&
          items.map((person: any, personIdx: number) => (
            <div key={personIdx} className="relative flex items-start py-4">
              <div className="min-w-0 flex-1 text-sm leading-6">
                <label
                  htmlFor={`person-${person.id}`}
                  className="select-none font-medium text-gray-900"
                >
                  {person.name}
                </label>
              </div>
              <div className="ml-3 flex h-6 items-center">
                <input
                  id={`person-${person.id}`}
                  name={`person-${person.id}`}
                  checked={person.checkstatus}
                  type="checkbox"
                  onClick={() => updateChecked(person.id, !person.checkstatus)}
                  key={person.name}
                  value={person.name}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
            </div>
          ))}
      </div>
    </fieldset>
  )
}

export default CheckBoxes
