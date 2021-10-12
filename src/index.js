import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import ErrorBoundry from './components/error-boundry/'
import { BooksContextProvider } from './components/bookstore-service-context'
import BookstoreService from './services/bookstore-service'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/app'

const bookstoreService = new BookstoreService()

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BooksContextProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BooksContextProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)
