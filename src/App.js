import './App.css';
import React, { useState } from 'react';
import Filter from './Filter.js';
import Body from './Body.js';
import data from './data/data.json'
import cities from './data/tinh_tp.json'
import districts from './data/quan_huyen.json'

function App() {

  const [items, setItems] = useState(data)

  const [cityCode, setCityCode] = useState('all')
  const [districtCode, setDistrictCode] = useState('all')
  const [areaCode, setAreaCode] = useState('all')
  const [moneyCode, setMoneyCode] = useState('all')

  console.log(moneyCode)

  function handleFilter() {
    const cityFiltered = data.filter(item => {
      if (cityCode === 'all') {
        return item
      } else {
        return item.city === cityCode
      }
    })

    const districtFiltered = data.filter(item => {
      if (districtCode === 'all') {
        return item
      } else {
        return item.district === districtCode
      }
    })

    const areaFiltered = data.filter(item => {
      if (areaCode == 'all') {
        return item
      }
      if (areaCode == 1) {
        return item.area <= 30
      }
      if (areaCode == 2) {
        return item.area <= 40 && item.area > 30
      }
      if (areaCode == 3) {
        return item.area >= 40
      }
    })

    const moneyFiltered = data.filter(item => {
      if (moneyCode == 'all') {
        return item
      }
      if (moneyCode == 1) {
        return item.price <= 3000000
      }
      if (moneyCode == 2) {
        return item.price <= 5000000 && item.price > 3000000
      }
      if (moneyCode == 3) {
        return item.price >= 5000000
      }
    })

    const lastFiltered = cityFiltered.filter(e => districtFiltered.indexOf(e) !== -1)
      .filter(e => areaFiltered.indexOf(e) !== -1)
      .filter(e => moneyFiltered.indexOf(e) !== -1)

    setItems(lastFiltered)
  }


  return (
    <div className="App">
      <Filter
        cities={cities}
        districts={districts}
        setCityCode={setCityCode}
        setDistrictCode={setDistrictCode}
        handleFilter={handleFilter}
        setAreaCode={setAreaCode}
        setMoneyCode={setMoneyCode}
      />


      <div className='container-item'>

        {items.map((item, index) => (
          <Body
            key={index}
            {...item}
            cities={cities}
            districts={districts}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
