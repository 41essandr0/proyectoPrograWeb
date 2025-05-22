const games = [
    {
        id: 1,
        title: "Gran Turismo 7",
        price: 59.99,
        sales: 1200,
        rating: 4.8,
        image: "top10/gran-turismo.jpg",
        platforms: ["PS5"],
        description: "Una experiencia de simulación de carreras ultrarrealista con una amplia colección de autos y circuitos.",
    trailer: "https://www.youtube.com/watch?v=1tBUsXIkG1A",
    images: [
      "top10/gran-turismo.jpg",
      "top10/gran-turismo-2.jpg",
      "top10/gran-turismo-3.jpg"
    ],
    reviews: [
      { user: "Carlos", comment: "¡Gráficos increíbles y jugabilidad fluida!" },
      { user: "Luisa", comment: "Perfecto para los amantes del automovilismo." }
    ]
    },
    {
        id: 2,
        title: "Spiderman",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/spiderman.jpg",
        platforms: ["PS5", "PC"],
        description: "Conviértete en el Hombre Araña y salva la ciudad de Nueva York en esta aventura llena de acción.",
    trailer: "https://www.youtube.com/watch?v=b5_-I6Z-QRA",
    images: [
      "top10/spiderman.jpg",
      "top10/spiderman-2.jpg",
      "top10/spiderman-3.jpg"
    ],
    reviews: [
      { user: "Andrea", comment: "La historia me atrapó desde el inicio." },
      { user: "Miguel", comment: "Las mecánicas de movimiento son brutales." }
    ]
    },
    {
        id: 3,
        title: "The Last of Us",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/the-last-of-us.jpg",
        platforms: ["PS4", "PS5", "PC"],
        description: "Un viaje emocional a través de un mundo post-apocalíptico, con narrativa profunda y personajes inolvidables.",
    trailer: "https://www.youtube.com/watch?v=W2Wnvvj33Wo",
    images: [
      "top10/the-last-of-us.jpg",
      "top10/the-last-of-us-2.jpg",
      "top10/the-last-of-us-3.jpg"
    ],
    reviews: [
      { user: "Pedro", comment: "Una obra maestra narrativa." },
      { user: "Rosa", comment: "Te hace llorar y amar a los personajes." }
    ]
    },
    {
        id: 4,
        title: "Uncharted",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/uncharted.jpg",
        platforms: ["PS4", "PS5", "PC"],
        description: "Explora ruinas antiguas y vive aventuras épicas con Nathan Drake en esta saga de acción y exploración.",
    trailer: "https://www.youtube.com/watch?v=hh5HV4iic1Y",
    images: [
      "top10/uncharted.jpg",
      "top10/uncharted-2.jpg",
      "top10/uncharted-3.jpg"
    ],
    reviews: [
      { user: "Leo", comment: "¡Siente como estar en una película!" },
      { user: "Valentina", comment: "Acción y humor bien equilibrados." }
    ]
    },
    {
        id: 5,
        title: "Ghost of Tsushima",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/ghost-of-tsushima.jpg",
        platforms: ["PS5", "PC"],
        description: "Lucha como un samurái y protege tu tierra de la invasión mongola en este bello mundo abierto.",
    trailer: "https://www.youtube.com/watch?v=Zbq7BnsQhrw",
    images: [
      "top10/ghost-of-tsushima.jpg",
      "top10/ghost-of-tsushima-2.jpg",
      "top10/ghost-of-tsushima-3.jpg"
    ],
    reviews: [
      { user: "Keiko", comment: "Una joya visual con combate épico." },
      { user: "Tomás", comment: "Explorar Japón feudal nunca fue tan genial." }
    ]
    },
    {
        id: 6,
        title: "Death Stranding",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/death-stranding.jpg",
        platforms: ["PS5", "PC"],
         description: "Una experiencia única de entrega en un mundo post-colapso, con una narrativa envolvente de Hideo Kojima.",
    trailer: "https://www.youtube.com/watch?v=tCI396HyhbQ",
    reviews: [
      { user: "Sandra", comment: "Extraño y fascinante a la vez." },
      { user: "Mauricio", comment: "No es para todos, pero a mí me encantó." }
    ]
    },
    {
        id: 7,
        title: "Days Gone",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/days-gone.jpg",
        platforms: ["PS5", "PC"],
        description: "Sobrevive en un mundo lleno de infectados como un motoquero solitario en busca de esperanza.",
    trailer: "https://www.youtube.com/watch?v=FKtaOY9lMvM",
    reviews: [
      { user: "Renzo", comment: "Gran historia y exploración libre." },
      { user: "Estela", comment: "¡Las hordas de zombies son aterradoras!" }
    ]
    },
    {
        id: 8,
        title: "God of War",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/god-of-war.png",
        platforms: ["PS5", "PC"],
        description: "Kratos vuelve con una historia épica entre dioses nórdicos y emociones humanas intensas.",
    trailer: "https://www.youtube.com/watch?v=K0u_kAWLJOA",
    reviews: [
      { user: "Martín", comment: "Combate increíble y narrativa poderosa." },
      { user: "Ivana", comment: "Kratos y Atreus son lo mejor." }
    ]
    },
    {
        id: 9,
        title: "Sackboy",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/sackboy.jpg",
        platforms: ["PS4", "PS5"],
        description: "Divertido juego de plataformas en 3D con niveles creativos y multijugador local o en línea.",
    trailer: "https://www.youtube.com/watch?v=mUwI6e-em3o",
     reviews: [
      { user: "Julia", comment: "Súper divertido para jugar con amigos." },
      { user: "Diego", comment: "Estilo visual encantador." }
    ]
    },
    {
        id: 10,
        title: "Bloodborne",
        price: 49.99,
        sales: 1800,
        rating: 4.9,
        image: "top10/bloodborne.jpg",
        platforms: ["PS4"],
        description: "Un juego de acción gótica intensa y retadora, con combates brutales y ambientación única.",
    trailer: "https://www.youtube.com/watch?v=G203e1HhixY",
    reviews: [
      { user: "Luis", comment: "Difícil pero adictivo." },
      { user: "Isabel", comment: "Estética oscura y misteriosa." }
    ]
    },
];


function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function setCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getGameByTitle(title) {
    return games.find(game => game.title === title);
}