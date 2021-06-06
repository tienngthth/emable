import * as React from 'react'
import { SyntheticEvent, useState, useEffect } from 'react'
import type { DropdownItemProps, DropdownProps, InputOnChangeData } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { companies } from './companies'

type Props = {
  selectedText: string,
  selectedOption: string,
  setSelectedOption: any, 
}

export const Searchbox = (props: Props) => {
  const { selectedText, selectedOption, setSelectedOption } = props
  const [searchField, setSearchField] = useState('')
  const [options, setOptions] = useState([{ text: '', value: '' }])
  
  useEffect(() => {
    setOptions(companies.map(key => ({ value: key, text: key })))
    setSearchField(selectedText || '')
    setSelectedOption('')
  }, [selectedText])

  const searchOptions = (keyword: string) => {
    return  options
      .filter((field: DropdownItemProps) => {
        return (typeof field.value == 'string') ? keyword !== '' && field.value.includes(keyword.toUpperCase()) : false
      })
      .slice(0, 500)
  }

  const handleFieldChange = (event: SyntheticEvent<HTMLElement>, data: InputOnChangeData | DropdownProps) => {
    if (typeof data.value === 'string') {
      setSelectedOption(data.value)
    }
  }

  const updateSearchField = (event: SyntheticEvent<HTMLElement>, data: InputOnChangeData | DropdownProps) => {
    setSearchField(data.searchQuery)
  }

  const resetFields = () => {
    setSearchField('')
  }

  return (
    <Dropdown
      fluid
      lazyLoad
      selection
      search
      placeholder={selectedOption || searchField || 'Điền tên công ty bạn cần tìm vào đây'}
      selectOnBlur={false}
      options={searchOptions(searchField)}
      onChange={handleFieldChange}
      onSearchChange={updateSearchField}
      value={selectedText}
      onclick={resetFields}
      style={{ marginBottom: '20px' }}
    />
  )

}