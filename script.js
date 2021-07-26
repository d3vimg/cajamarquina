var title_header = new Vue({
    el: '#title_header',
    data: {
        title: 'La Cajamarquina'
    }
});

var products = new Vue({
    el: '#products',
    data: {
        products: [
            {
                name: 'Queso Suizo',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                image_url: 'https://s.cornershopapp.com/product-images/2117594.jpg?versionId=j7crub51dfOKaDTHuR8hM47gzU.bO6Ju'
            },
            {
                name: 'Manjar Pote',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                image_url: 'https://s.cornershopapp.com/product-images/2117594.jpg?versionId=j7crub51dfOKaDTHuR8hM47gzU.bO6Ju'
            },
            {
                name: 'Queso Mozarela',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                image_url: 'https://s.cornershopapp.com/product-images/2117594.jpg?versionId=j7crub51dfOKaDTHuR8hM47gzU.bO6Ju'
            },
        ]
    }
});