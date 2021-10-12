import React from 'react'
import { BooksContextConsumer } from "../bookstore-service-context"

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BooksContextConsumer>
            {
                (bookstoreService) => {
                     return <Wrapped {...props} 
                        bookstoreService={bookstoreService}/>
                }
            }
        </BooksContextConsumer>
        )
    }    
}

export default withBookstoreService
