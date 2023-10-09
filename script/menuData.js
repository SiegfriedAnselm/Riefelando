let pizzas = [
    {
        'sorts': 'Pizza Magherita',
        'ingreeds': 'Tomatensauce, Mozzarella-Käse, etwas Basilikum und Olivenöl',
        'price': 7.99,
        'amount': 1,
    },
    {
        'sorts': 'Pizza Salami',
        'ingreeds': 'Tomatensauce, Mozzarella-Käse, Salami, frisch geriebener Parmesan',
        'price': 9.99,
        'amount': 1,
    },
    {
        'sorts': 'Pizza Mix',
        'ingreeds': 'Tomatensauce, Mozzarella-Käse, Champignons, Salami, Schinken(gekocht)',
        'price': 10.99,
        'amount': 1,
    },
    {
        'sorts': 'Pizza Diavolo',
        'ingreeds': 'Tomatensauce, Mozzarella-Käse, geriebene Knoblauch, Peperoni(scharf), Zwiebel und Salami',
        'price': 10.99,
        'amount': 1,
    },
    {
        'sorts': 'Pizza Quattro Formaggi',
        'ingreeds': 'Tomatensauce, Vier verschiederne Käsesorten',
        'price': 10.99,
        'amount': 1,
    }
]

let burgers = [
    {
        'sorts': 'Hamburger',
        'ingreeds': 'Gewürzgurke, Blattsalat, Rindfleisch, 1 Scheibe Käse, Zwiebel und Burgersoße',
        'price': 4.99,
        'amount': 1,
    },
    {
        'sorts': 'Cheeseburger',
        'ingreeds': 'Rindfleisch, Cheddar-Käse Gewürzgurke, Speck, Tomate, Salatblatt, Burgersoße',
        'price': 5.99,
        'amount': 1,
    },
    {
        'sorts': 'Chickenburger',
        'ingreeds': 'Hähnchenschnitzel(paniert), Tomate, Salatblatt, Mayonnaise',
        'price': 5.99,
        'amount': 1,
    },
    {
        'sorts': 'Barbeque-Burger',
        'ingreeds': 'Hackfleisch-Patty, Cheddar-Käse, Bacon-Streifen, Zwiebel, Tomate, Balsamico und BBQ Soße',
        'price': 5.99,
        'amount': 1,
    }
]

let salads = [
    {
        'sorts': 'Nudelsalat mit Rucola',
        'ingreeds': 'Nudeln, Tomaten, Rucola, Oliven, Pinienkerne, Parmesan, Zwiebel, Knoblauch und Olivenöl in der Soße',
        'price': 5.99,
        'amount': 1,
    },
    {
        'sorts': 'Nudelsalat mit Schafskäse',
        'ingreeds': 'Nudeln, Tomaten, Oliven, Knoblauch, Schafskäse, Pinienkerne, Rucola und Olivenöl',
        'price': 6.49,
        'amount': 1,
    },
    {
        'sorts': 'Brotsalat',
        'ingreeds': 'Baguette, Salami, Rucola, Tomaten, Balsamico, Rosamrin und Parmesan',
        'price': 6.49,
        'amount': 1,
    },
    {
        'sorts': 'Couscous-Salat',
        'ingreeds': 'Couscous, Paprikaschote, Mais, Chilipulver, Lauchzwiebel und Gemüsebrühe',
        'price': 6.99,
        'amount': 1,
    }
];

let menu = {
    pizzas,
    burgers,
    salads
};

let basket = {
    sorts: [],
    price: [],
    amount: [],
};