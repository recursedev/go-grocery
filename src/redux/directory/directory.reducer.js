const INITIAL_STATE ={
    sections: [{
        title: 'Vegetables',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/vegetables'
    },
    {
        title: 'Fruits',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/fruits'
    },
    {
        title: 'Dairy',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/dairy'
    },
    {
        title: 'Frozen',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/frozen'
    },
    {
        title: 'Snacks',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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