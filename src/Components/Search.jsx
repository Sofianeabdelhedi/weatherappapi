import React from 'react'




const Search = ({handleChange,handleSubmit,city}) => {
    return (
    <div className='nav'>
      <div className='search'>
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="enter the city name"
            />
            <button className='btn' type="submit">Search</button>
        </form>
      </div>
    </div>
    )
}

export default Search
