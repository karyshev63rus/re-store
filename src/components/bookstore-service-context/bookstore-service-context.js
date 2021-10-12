import { createContext } from "react"

const {
    Provider: BooksContextProvider,
    Consumer: BooksContextConsumer
} = createContext()

export {
    BooksContextProvider,
    BooksContextConsumer
}
