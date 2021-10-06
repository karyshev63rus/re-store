
export default class BookstoreService {
    getBooks () {
        return [
            {
                id: 1, 
                title: 'Морские рассказы', 
                author: 'Станюкович',
                price: 42, 
                coverImage: 'https://i.pinimg.com/736x/3e/0c/57/3e0c57cfadd239c79f1ddb1f50cc86dd--animation-movies-comedy-movies.jpg'
            },
            {
                id: 2, 
                title: 'Рассказы', 
                author: 'Чехов',
                price: 45,
                coverImage: 'https://i.pinimg.com/736x/49/3d/59/493d59221ff8f0ddd3cf9001efea9f72--robots.jpg'
        }
        ]
    }
}
