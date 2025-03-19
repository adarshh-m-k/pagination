import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './pageNation.css'

function PageNation() {

    let [product, setProduct] = useState([])
    let [currentPage, setCurrentPage] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=200').then((result) => {

            console.log(result.data.products);
            setProduct(result.data.products)

        }).catch((err) => {
            console.log(err);


        })

    }, [])

    const SINGLE_PAGE_SIZE = 10;
    const totalProducts = product.length;
    const noOfPages = Math.ceil(totalProducts / SINGLE_PAGE_SIZE)
    let start = currentPage * SINGLE_PAGE_SIZE
    let end = start + SINGLE_PAGE_SIZE

    function handleChange(n) {
        setCurrentPage(n)
    }

    function goToNext() {
        setCurrentPage((prev) => prev + 1)
    }

    function goToPrev() {
        setCurrentPage((prev) => prev - 1)
    }

    return !totalProducts ? (
        <h1>No Products Found</h1>
    ) : (
        <div className='main-container'>
            <div >
                <h1>
                    Pagination
                </h1>
            </div>
            <div className='array-of-number'>
                <h4>
                    <button
                        className='page-numbers'
                        disabled={currentPage === 0}
                        onClick={() => goToPrev()}>
                        ⬅️
                    </button>

                    {[...Array(noOfPages).keys([]).map((n) => (
                        <button
                            key={n}
                            className={"page-numbers " + (n === currentPage ? "active" : "")}
                            onClick={() => handleChange(n)}>
                                {n}
                        </button>

                    ))]}

                    <button
                        className='page-numbers'
                        disabled={currentPage === noOfPages - 1}
                        onClick={() => goToNext()}>
                        ➡️
                    </button>
                </h4>
            </div>

            <div className='product-container'>
                {
                    product?.slice(start, end).map((obj, idx) => {
                        return (

                            <div key={idx} className='product-card'>
                                <h1 style={{ fontSize: "15px" }}>{obj.title}</h1>
                                <img src={obj.images} alt="" width={"200px"} />
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default PageNation