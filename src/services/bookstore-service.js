export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Повести',
            author: 'Куприн',
            image: 'http://russkievesti.ru/assets/images/resources/12444/rossijskim-kosmicheskim-korablem-budet-upravlyat-robot-video-01.jpg',
            price: 45    
        },
        {
            id: 2,
            title: 'Рассказы',
            author: 'Чехов',
            image: 'http://russkievesti.ru/assets/images/resources/12444/rossijskim-kosmicheskim-korablem-budet-upravlyat-robot-video-01.jpg',
            price: 47    
        },
        {
            id: 3,
            title: 'Романы',
            author: 'Толстой',
            image: 'http://russkievesti.ru/assets/images/resources/12444/rossijskim-kosmicheskim-korablem-budet-upravlyat-robot-video-01.jpg',
            price: 50    
        },
    ]
    
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > .75) {
                    (reject(new Error('!!!')))
                } else {
                    resolve(this.data)
                }
            }, 700)
            })
        }
    }
