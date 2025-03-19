import axios from 'axios'
import React, { useState } from 'react'
import './ChildPage.css'

function ChildPage() {


    let [item, setItem] = useState([])
    let [pageNumbers, setPageNumbers] = useState(0)

    useState(() => {
        axios.get('https://dummyjson.com/products?limit=150').then((result) => {

            setItem(result.data.products)
            console.log(result.data.products);

        }).catch((err) => {
            console.log(err);

        })
    }, [])

    const totalItem = item.length;
    const ITEM_SINGLEPAGE = 10;

    let start = pageNumbers * ITEM_SINGLEPAGE

    let end = start + ITEM_SINGLEPAGE

    const noOfPage = Math.ceil(totalItem / ITEM_SINGLEPAGE);


    const changePage = (n) => {
        setPageNumbers(n)
    }

    const previousPage = () => {
        setPageNumbers(prev => prev - 1)

    }
    const nextPage = () => {
        setPageNumbers(prev => prev + 1)

    }
    return (
        <div className='main-container'>

            <div className='top'>
                <h1 style={{ textAlign: "center" }}>Second Pagination</h1>
                <div>
                    <button disabled={pageNumbers === 0} onClick={() => previousPage()}>⬅️</button>
                    {[...Array(noOfPage).keys()].map((n) => (
                        <button
                            onClick={() => changePage(n)}
                            className={"page-no " + (n === pageNumbers ? "active" : '')}
                            key={n}>{n}</button>
                    ))}
                    <button disabled={pageNumbers === noOfPage - 1} onClick={() => nextPage()}>➡️</button>
                </div>
            </div>

            <div className='bottum'>
                {
                    item.slice(start, end).map((obj, idx) => {
                        return (
                            <div className='product-cont' key={idx}>
                                <p>{obj.title}</p>
                                <img src={obj.images} alt="product image" width={"120px"} />

                            </div>
                        )

                    })
                }

            </div>

        </div >
    )
}

export default ChildPage;