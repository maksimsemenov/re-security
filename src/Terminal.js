import React, { PropTypes } from 'react'
import './Terminal.css'

const Terminal = ({ guid, attacks }) => (
  <div className='terminal'>
    <div className='terminal__name'>{guid}</div>
    <div className='terminal__graph'>
      {attacks.map((attack, index) =>
        <div key={index} className='terminal__bar'>
          <div className='terminal__file' style={{ height: `${attack.file}px`}}/>
          <div className='terminal__network' style={{ height: `${attack.network}px`}}/>
          <div className='terminal__registry' style={{ height: `${attack.registry}px`}}/>
          <div className='terminal__process' style={{ height: `${attack.process}px`}}/>
          <div className='terminal__suspicios' style={{ height: `${attack.suspicios}px`}}/>
        </div>
      )}
    </div>
  </div>
)

Terminal.propTypes = {

}

export default Terminal
