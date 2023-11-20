import React from 'react'
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import { useContext } from 'react'
import DataContext from './Context/dataContext'

const Header = ({ title }) => {

  const {width} = useContext(DataContext);

  return (
    <div className='Header'>
      <h1>{title}</h1>
      {
        width < 768 ?
          <FaMobileAlt />
          : width < 992 ?
            <FaTabletAlt />
            : <FaLaptop />
      }
    </div>
  )
}

export default Header