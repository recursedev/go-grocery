const SHOP_DATA = {
    vegetables: {
      id: 1,
      title: 'vegetables',
      routeName: 'vegetables',
      items: [
        {
          id: 1,
          name: 'Egg Plant',
          imageUrl: 'https://i.ibb.co/vcKWS9Y/egg-plant.jpg',
          price: 2.49
        },
        {
          id: 2,
          name: 'Okra',
          imageUrl: 'https://i.ibb.co/thfBw6F/Okra.jpg',
          price: 1.69
        },
        {
          id: 3,
          name: 'Cauliflower',
          imageUrl: 'https://i.ibb.co/sQMjX6x/Cauliflower.jpg',
          price: 5.49
        },
        {
          id: 4,
          name: 'Raddish',
          imageUrl: 'https://i.ibb.co/F7RGgzD/Raddish.jpg',
          price: 2.00
        },
        {
          id: 5,
          name: 'Bell peppers',
          imageUrl: 'https://i.ibb.co/SfMZBHQ/Bell-pepper.jpg',
          price: 3.49
        },
        {
          id: 6,
          name: 'Onions',
          imageUrl: 'https://i.ibb.co/FBHz0Dh/Fresh-onion-bulb-isolated-on-white-With-clipping-path.jpg',
          price: 8.49
        },
        {
          id: 7,
          name: 'Potato',
          imageUrl: 'https://i.ibb.co/6YQLZn3/Potatoes.png',
          price: 6.49
        },
        {
          id: 8,
          name: 'Spinach',
          imageUrl: 'https://i.ibb.co/hHbXbtc/Spinach.jpg',
          price: 4.50
        },
        {
          id: 9,
          name: 'Coriander',
          imageUrl: 'https://i.ibb.co/hRbjTCw/Coriander.jpg',
          price: 2.69
        }
      ]
    },
    fruits:{
      id: 2,
      title: 'fruits',
      routeName: 'fruits',
      items: [
        {
          id: 10,
          name: 'Kiwi',
          imageUrl: 'https://i.ibb.co/Syj8Zk7/Kiwi.jpg',
          price: 3.59
        },
        {
          id: 11,
          name: 'Banana',
          imageUrl: 'https://i.ibb.co/z8pKPgY/Banana.jpg',
          price: .89
        },
        {
          id: 12,
          name: 'Apple',
          imageUrl: 'https://i.ibb.co/mNQGzDZ/Apple.jpg',
          price: 2.49
        },
        {
          id: 13,
          name: 'Cherry',
          imageUrl: 'https://i.ibb.co/Xk8xsKr/Cherry.jpg',
          price: 5.50
        },
        {
          id: 14,
          name: 'Avocado',
          imageUrl: 'https://i.ibb.co/bFrdFCm/Avocado.jpg',
          price: 1.20
        },
        {
          id: 15,
          name: 'Blueberries',
          imageUrl: 'https://i.ibb.co/0ct6vH1/Blueberries.png',
          price: 160
        },
        {
          id: 16,
          name: 'Orange',
          imageUrl: 'https://i.ibb.co/X3Vg3Zk/Orange.jpg',
          price: 2.20
        },
        {
          id: 17,
          name: 'Grapefruit',
          imageUrl: 'https://i.ibb.co/CtjS41h/Grapefruit.jpg',
          price: 1.29
        }
      ]
    },
    dairy: {
      id: 3,
      title: 'dairy',
      routeName: 'dairy',
      items: [
        {
          id: 18,
          name: 'Eggs',
          imageUrl: 'https://i.ibb.co/FmVFYps/Eggs.jpg',
          price: 3.49
        },
        {
          id: 19,
          name: 'Milk',
          imageUrl: 'https://i.ibb.co/XYXJR5P/Milk.jpg',
          price: 3.48
        },
        {
          id: 20,
          name: 'Butter',
          imageUrl: 'https://i.ibb.co/db7S74X/Butter.jpg',
          price: 5.89
        },
        {
          id: 21,
          name: 'Yogurt',
          imageUrl: 'https://i.ibb.co/2YzjWCn/Yogurt.jpg',
          price: 3.27
        },
        {
          id: 22,
          name: 'Cheese',
          imageUrl: 'https://i.ibb.co/r7tDPRM/Cheese.jpg',
          price: 4.89
        }
      ]
    },
    frozen: {
      id: 4,
      title: 'frozen',
      routeName: 'frozen',
      items: [
        {
          id: 23,
          name: 'Hashbrown',
          imageUrl: 'https://i.ibb.co/9TJJGyt/Hash-Brown.png',
          price: 4.27
        },
        {
          id: 24,
          name: 'Spring Rolls',
          imageUrl: 'https://i.ibb.co/3RfGRf8/Spring-rolls.jpg',
          price: 3.45
        },
        {
          id: 25,
          name: 'Fries',
          imageUrl: 'https://i.ibb.co/ysYpPF6/Fries.jpg',
          price: 4.49
        },
        {
          id: 26,
          name: 'Frozen pizza',
          imageUrl: 'https://i.ibb.co/3pf7SjG/Frozen-Pizza.jpg',
          price: 3.50
        },
        {
          id: 27,
          name: 'Frozen Corn',
          imageUrl: 'https://i.ibb.co/CtTWQfF/Frozen-Corn.jpg',
          price: 3.69
        },
        {
          id: 28,
          name: 'Haegan Dazs Almond',
          imageUrl: 'https://i.ibb.co/GR81XFc/Haegan-dazs.jpg',
          price: 6.57
        },
        {
          id: 29,
          name: 'Pizza pops',
          imageUrl: 'https://i.ibb.co/GC9FH6w/Pizza-pops.jpg',
          price: 4.59
        }
      ]
    },
    snacks:{
      id: 5,
      title: 'snacks',
      routeName: 'snacks',
      items: [
        {
          id: 30,
          name: 'Cheetos',
          imageUrl: 'https://i.ibb.co/CJW3nFn/Cheetos.jpg',
          price: 4.57
        },
        {
          id: 31,
          name: 'Humpty Dumpty',
          imageUrl: 'https://i.ibb.co/vQxm638/Humpty-Dumpty.jpg',
          price: 4.57
        },
        {
          id: 32,
          name: 'Pringles',
          imageUrl: 'https://i.ibb.co/k2NpnM3/Pringles.jpg',
          price: 3.27
        },
        {
          id: 33,
          name: 'Lays',
          imageUrl: 'https://i.ibb.co/WDQWFh5/Lays.jpg',
          price: 4.27
        },
        {
          id: 34,
          name: 'Miss-Vickies',
          imageUrl: 'https://i.ibb.co/GCP65xp/Miss-Vickies.jpg',
          price: 3.78
        },
        {
          id: 35,
          name: 'Ruffles',
          imageUrl: 'https://i.ibb.co/QjQs9st/Ruffles.jpg',
          price: 3.98
        }
      ]
    }
};

  export default SHOP_DATA;