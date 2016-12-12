import React, { PropTypes } from 'react'
import './Terminal.css'

const Terminal = ({ guid, attacks }) => (
  <div className='terminal'>
    <div className='terminal__name'>{guid}</div>
    <div className='terminal__graph'>
      {attacks.files.map((file, index) =>
        <div key={index} className='terminal__bar'>
          <div className='terminal__file' style={{ height: `${file/5}px`}}/>
          <div className='terminal__network' style={{ height: `${attacks.network[index]/5}px`}}/>
          <div className='terminal__registry' style={{ height: `${attacks.registry[index]/5}px`}}/>
          <div className='terminal__process' style={{ height: `${attacks.process[index]/5}px`}}/>
          <div className='terminal__suspicios' style={{ height: `${attacks.suspicios[index]/5}px`}}/>
        </div>
      )}
    </div>
  </div>
)

Terminal.propTypes = {

}

export default Terminal
