import React from 'react'
import './Store.css'

import Products from '../../components/Products/Products'

function Store() {

    const products = [
        {
            title: 'Becoplex',
            description: 'test',
            image: 'src/images/Becoplex.jpg',
        },
        {
            title: 'Becoplex Iron',
            description: 'test',
            image: 'src/images/BecoplexIron.jpg',
        },
        {
            title: 'Canadian Oil',
            description: 'test',
            image: 'src/images/CanadianOil.jpg',
        },
        {
            title: 'Cetamol',
            description: 'test',
            image: 'src/images/CetamolCold.jpg',
        },
        {
            title: 'Cetamol (Night-time)',
            description: 'test',
            image: 'src/images/CetamolNight.jpg',
        },
        {
            title: 'Fishermans Friend',
            description: 'test',
            image: 'src/images/FishermansFriend.jpg',
        },
        {
            title: 'Gravinate',
            description: 'test',
            image: 'src/images/Gravinate.jpg',
        },
        {
            title: 'Histal Non-Drowsy',
            description: 'test',
            image: 'src/images/HistalOrng.jpg',
        },
        {
            title: 'Histal Antihistamine Therapy',
            description: 'test',
            image: 'src/images/HistalPnk.jpg',
        },
        {
            title: 'Histal Decongestant',
            description: 'test',
            image: 'src/images/HistalRed.jpg',
        },
        {
            title: 'Histaussin',
            description: 'test',
            image: 'src/images/Histaussin.jpg',
        },
        {
            title: 'Salve',
            description: 'test',
            image: 'src/images/Salve.jpg',
        },
        {
            title: 'S.S.S',
            description: 'test',
            image: 'src/images/SSS.jpg',
        }
    ]

    return (
        <div>
             {
                products.map((items) => <Products data={items} />)
            }
        </div>
    )
}

export default Store