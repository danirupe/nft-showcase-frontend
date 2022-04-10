import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <div className='searchBar__container container'>
        <div className='searchBar__content'>
          <div className='search'>
            <AiOutlineSearch size={25} className='search__icon' />
            <input type='search' className='search__input' />
          </div>

          <div className='release'>Release date in the next</div>

          <div className='platforms'>
            <label>Platform:</label>
            <select name='platforms'>
              <option value='android'>Android</option>
              <option value='ios'>IOS</option>
              <option value='windows'>Windows</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
