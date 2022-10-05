import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Filter({ cities, districts, setCityCode, setDistrictCode, handleFilter, setAreaCode, setMoneyCode }) {

    const [districtFilter, setDistrictFilter] = useState('')

    function handleChangeCity(e) {
        const newDistricts = Object.entries(districts).filter(d => d[1].parent_code === e)
        setDistrictFilter(newDistricts)
        setCityCode(e)
    }

    function handleChangeDistrict(e) {
        setDistrictCode(e)
    }

    function handleChangeS(e) {
        setAreaCode(e)
    }

    function handleChangeMoney(e) {
        setMoneyCode(e)
    }

    return (
        <div className='d-inline-flex mb-4 mt-4'>
            <Form.Select
                className='me-2'
                onChange={(e) => handleChangeCity(e.target.value)}>
                <option value="all" selected>Thành phố</option>
                {Object.entries(cities).map(c => {
                    return (
                        <option value={c[0]}>{c[1].name}</option>
                    )
                })}
            </Form.Select>
            <Form.Select
                className='me-2'
                onChange={(e) => handleChangeDistrict(e.target.value)}>
                <option value="all" selected>Quận, huyện</option>
                {districtFilter.length > 0 && districtFilter.map(d => {
                    return (
                        <option value={d[0]}>{d[1].name}</option>
                    )
                })}
            </Form.Select>
            <Form.Select
                className='me-2'
                onChange={(e) => handleChangeS(e.target.value)}>
                <option value="all" selected>Diện tích</option>
                <option value='1'>Nhỏ hơn 30 m2</option>
                <option value='2'>30-40 m2</option>
                <option value='3'> Lớn hơn 40 m2</option>

            </Form.Select>
            <Form.Select
                className='me-2'
                onChange={(e) => handleChangeMoney(e.target.value)}>
                <option value="all" selected>Giá</option>
                <option value='1'>Nhỏ hơn 3 triệu</option>
                <option value='2'>3-5 triệu</option>
                <option value='3'> trên 5 triệu</option>

            </Form.Select>
            <Button onClick={handleFilter} >Filter</Button>
        </div>
    )
}
