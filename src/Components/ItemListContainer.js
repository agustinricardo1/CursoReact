import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'



const ItemListContainer = () => {
    const [  arrayItems, setArrayItems ] = useState([])
    useEffect(()=>{
        const productos = [
            {
                id: 'agaskgabjhkfghfga',
                title: 'Remera',
                precio: '$2500',
                img: 'https://www.guantexindustrial.com.ar/700-large_default/remera-algodon-jersey-azul-talle-xxxl.jpg',
                stock: 7,
            },
            {
                id: 'agaskgabjewethka',
                title: 'Pantalón',
                precio: '$2000',
                img: 'https://www.clementdesign.com/es/wp-content/uploads/sites/4/products/06CCYCL/06CCYCLNOIR/p_vface.png',
                stock: 10,
            },
            {
                id: 'agaskgaasdbjhka',
                title: 'Campera',
                precio: '$4500',
                img: 'https://d2r9epyceweg5n.cloudfront.net/stores/143/626/products/campera-undead1-21373735edc521da4815450885284633-1024-1024.png',
                stock: 4,
            }
        ]
        const productosPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        })
        productosPromise.then((res)=>{
            setArrayItems(res)
        })
        .catch(()=>{
            console.log('Hubo un problema');
        })
        .finally(()=>{
            console.log('Se ha finalizado');
        })
    }, [])

    return (
        <div>
            <ItemList productos={arrayItems}/>
        </div>
    )
}

export default ItemListContainer

