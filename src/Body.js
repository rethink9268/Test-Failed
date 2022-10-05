import React from 'react'
import { Card } from 'react-bootstrap'


export default function Body({ area, city, content, district, price, thumbnail, title, cities, districts }) {

    let cityName
    Object.entries(cities).forEach(c => {
        if (c[0] === city) {
            cityName = c[1]
        }
    })

    let districtName

    Object.entries(districts).forEach(d => {
        if (d[0] === district) {
            districtName = d[1]
        }
    })

    return (
        <>
            <Card className='card_item'>
                <Card.Img className='item_image' src={thumbnail} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className='text-start'>{content}</Card.Text>
                    <Card.Text className='text-start'>Giá: {price}</Card.Text>
                    <Card.Text className='text-start'>Diện tích: {area} m2</Card.Text>
                    <Card.Text className='text-start'>Quận: {districtName.name_with_type}</Card.Text>
                    <Card.Text className='text-start'>Thành Phố: {cityName.name_with_type}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
