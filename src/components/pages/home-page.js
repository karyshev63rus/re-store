import React from 'react'
import ShopHeader from '../shop-header'
import BookList from '../book-list'
import ShopCartTable from '../shop-cart-table'

const HomePage = () => {
    return(
        <div>
            <ShopHeader numItems={2} total={250}/>
            <BookList />
            <ShopCartTable />
        </div>
    )
}

export default HomePage
