import React from 'react'
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import useWindowSize from './Hooks/useWindowSize';

const Header = ({ title }) => {

  const {width} = useWindowSize();

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