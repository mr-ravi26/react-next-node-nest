import React from 'react'

import Sidebar from './Sidebar'

export default {
  component: Sidebar,
  title: 'Sidebar',
}

export const Default = () => {
  return <Sidebar filters={getData()}></Sidebar>
}

function getData() {
  return {
    Price: [199, 6499],
    filterOrder: [
      'Price',
    ],
    sliders: ['Price'],
  }
}
