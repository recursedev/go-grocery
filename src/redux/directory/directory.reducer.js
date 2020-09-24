const INITIAL_STATE ={
    sections: [{
        title: 'Vegetables',
        imageUrl: 'https://i.ibb.co/2Sq8FMb/Vegetables.jpg',
        id: 1,
        linkUrl: 'shop/vegetables'
    },
    {
        title: 'Fruits',
        imageUrl: 'https://i.ibb.co/DCBz7sz/Fruits.jpg',
        id: 2,
        linkUrl: 'shop/fruits'
    },
    {
        title: 'Dairy',
        imageUrl: 'https://i.ibb.co/sqyXfWh/Dairy.jpg',
        id: 3,
        linkUrl: 'shop/dairy'
    },
    {
        title: 'Frozen',
        imageUrl: 'https://i.ibb.co/QNHLGrz/Frozen-food.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/frozen'
    },
    {
        title: 'Snacks',
        imageUrl: 'https://i.ibb.co/WHtts32/Snacks.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/snacks'
    }]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        default:
            return state;
    }
}

export default directoryReducer;