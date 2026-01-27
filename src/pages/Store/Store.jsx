import React from 'react'
import './Store.css'

import Products from '../../components/Products/Products'

import Product from '../../pages/Product/Product'

function Store() {

    const products = [
        {
            id: '001',
            title: 'Becoplex',
            description: 'test',
            image: 'src/images/Becoplex.jpg',
        },
        {
            id: '002',
            title: 'Becoplex Iron',
            description: 'test',
            image: 'src/images/BecoplexIron.jpg',
        },
        {
            id: '003',
            title: 'Canadian Oil',
            description: 'test',
            image: 'src/images/CanadianOil.jpg',
        },
        {
            id: '004',
            title: 'Cetamol',
            description: 'test',
            image: 'src/images/CetamolCold.jpg',
        },
        {
            id: '005',
            title: 'Cetamol (Night-time)',
            description: 'test',
            image: 'src/images/CetamolNight.jpg',
        },
        {
            id: '006',
            title: 'Fishermans Friend',
            description: 'test',
            image: 'src/images/FishermansFriend.jpg',
        },
        {
            id: '007',
            title: 'Gravinate',
            description: 'test',
            image: 'src/images/Gravinate.jpg',
        },
        {
            id: '008',
            title: 'Histal Non-Drowsy',
            description: 'test',
            image: 'src/images/HistalOrng.jpg',
        },
        {
            id: '009',
            title: 'Histal Antihistamine Therapy',
            description: 'test',
            image: 'src/images/HistalPnk.jpg',
        },
        {
            id: '010',
            title: 'Histal Decongestant',
            description: 'test',
            image: 'src/images/HistalRed.jpg',
        },
        {
            id: '011',
            title: 'Histaussin',
            description: 'test',
            image: 'src/images/Histaussin.jpg',
        },
        {
            id: '012',
            title: 'Salve',
            description: 'test',
            image: 'src/images/Salve.jpg',
        },
        {
            id: '013',
            title: 'S.S.S',
            description: 'test',
            image: 'src/images/SSS.jpg',
        }
    ]

    return (
        <div>
            {products.map(items => (
                <div>
                    <Products data={items} />
                    <Product data={items} />
                </div>
            ))}

             {/* {
                products.map((items) => <Products data={items} />)
            } */}
        </div>
    )
}

export default Store