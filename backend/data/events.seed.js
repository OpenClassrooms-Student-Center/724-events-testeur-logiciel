const mongoose = require('mongoose');
const Event = require('./../models/Events');
require('dotenv').config()

mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/m77events?authSource=admin`,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie pour seed !'))
    .catch(() => console.log('Connexion à MongoDB échouée pour seed !'));
const seedEvents = [
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "User&product MixUsers",
        cover: `http://localhost:${process.env.PORT}/images/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg`,
        description: "Présentation des nouveaux usages UX.",
        nb_guest: 900,
        periode: "14-15-16",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "1 espace de restaurations"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641.686438513205!2d2.238008572044138!3d48.890337143184446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66502f6012a89%3A0x31d9bac0d2b5f5!2zVUdDIENpbsOpIENpdMOpIExhIETDqWZlbnNl!5e0!3m2!1sfr!2sec!4v1675261446781!5m2!1sfr!2sec"
    },
    {
        type: "expérience digitale",
        date: new Date("2022-01-29T20:28:45.744Z"),
        title: "#DigitonPARIS",
        cover: `http://localhost:${process.env.PORT}/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9343.21610700165!2d2.2369483924575335!3d48.889368578651045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6650919830f81%3A0xd9b29faf76e24816!2sH%C3%B4tel%20Mercure%20Paris%20La%20D%C3%A9fense!5e0!3m2!1sfr!2sec!4v1675262233243!5m2!1sfr!2sec"
    },
    {

        type: "conférence",
        date: new Date("2022-03-29T20:28:45.744Z"),
        title: "Conférence &co-responsable",
        cover: `http://localhost:${process.env.PORT}/images/chuttersnap-Q_KdjKxntH8-unsplash.jpg`,
        description: "Débats et échanges autour des collaborations eco-responsable.",
        nb_guest: 600,
        periode: "24-25-26",
        prestations: [
            "1 scéne principale",
            "1 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8665.536149626312!2d2.359736684840642!3d48.84185454597531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721743fa0af9%3A0x989bfc2771543869!2sAccor%20Arena!5e0!3m2!1sfr!2sec!4v1675262504801!5m2!1sfr!2sec"
    },
    {
        type: "conférence",
        date: new Date("2022-08-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/headway-F2KRf_QfCqw-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641.686438513205!2d2.238008572044138!3d48.890337143184446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66502f6012a89%3A0x31d9bac0d2b5f5!2zVUdDIENpbsOpIENpdMOpIExhIETDqWZlbnNl!5e0!3m2!1sfr!2sec!4v1675261446781!5m2!1sfr!2sec"
    },
    {
        type: "expérience digitale",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9343.21610700165!2d2.2369483924575335!3d48.889368578651045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6650919830f81%3A0xd9b29faf76e24816!2sH%C3%B4tel%20Mercure%20Paris%20La%20D%C3%A9fense!5e0!3m2!1sfr!2sec!4v1675262233243!5m2!1sfr!2sec"
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8665.536149626312!2d2.359736684840642!3d48.84185454597531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721743fa0af9%3A0x989bfc2771543869!2sAccor%20Arena!5e0!3m2!1sfr!2sec!4v1675262504801!5m2!1sfr!2sec"
    },
    {
        type: "expérience digitale",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/product-school-dJICd7b_LlE-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641.686438513205!2d2.238008572044138!3d48.890337143184446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66502f6012a89%3A0x31d9bac0d2b5f5!2zVUdDIENpbsOpIENpdMOpIExhIETDqWZlbnNl!5e0!3m2!1sfr!2sec!4v1675261446781!5m2!1sfr!2sec"
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/product-school-nOvIa_x_tfo-unsplash.jpg`,
        description: "Présentation des outils products aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "26-27-28",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9343.21610700165!2d2.2369483924575335!3d48.889368578651045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6650919830f81%3A0xd9b29faf76e24816!2sH%C3%B4tel%20Mercure%20Paris%20La%20D%C3%A9fense!5e0!3m2!1sfr!2sec!4v1675262233243!5m2!1sfr!2sec"
    },
    {
        type: "expérience digitale",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/stem-list-EVgsAbL51Rk-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8665.536149626312!2d2.359736684840642!3d48.84185454597531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721743fa0af9%3A0x989bfc2771543869!2sAccor%20Arena!5e0!3m2!1sfr!2sec!4v1675262504801!5m2!1sfr!2sec"
    },
    {
        type: "soirée entreprise",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "User&product MixUsers",
        cover: `http://localhost:${process.env.PORT}/images/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg`,
        description: "Présentation des outils UXDesigns aux professionnels du secteur",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641.686438513205!2d2.238008572044138!3d48.890337143184446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66502f6012a89%3A0x31d9bac0d2b5f5!2zVUdDIENpbsOpIENpdMOpIExhIETDqWZlbnNl!5e0!3m2!1sfr!2sec!4v1675261446781!5m2!1sfr!2sec"
    },
    {
        type: "conférence",
        date: new Date("2022-01-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8665.536149626312!2d2.359736684840642!3d48.84185454597531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721743fa0af9%3A0x989bfc2771543869!2sAccor%20Arena!5e0!3m2!1sfr!2sec!4v1675262504801!5m2!1sfr!2sec"
    },
    {
        type: "soirée entreprise",
        date: new Date("2022-03-29T20:28:45.744Z"),
        title: "Mega Event",
        cover: `http://localhost:${process.env.PORT}/images/chuttersnap-Q_KdjKxntH8-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://goo.gl/maps/4AsCTGNtiDERQosz6"
    },
    {
        type: "conférence",
        date: new Date("2022-08-29T20:28:45.744Z"),
        title: "Conférence #coDeCON",
        cover: `http://localhost:${process.env.PORT}/images/headway-F2KRf_QfCqw-unsplash.jpg`,
        description: "Présentation des outils Python aux professionnels du secteur ",
        nb_guest: 467,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641.686438513205!2d2.238008572044138!3d48.890337143184446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66502f6012a89%3A0x31d9bac0d2b5f5!2zVUdDIENpbsOpIENpdMOpIExhIETDqWZlbnNl!5e0!3m2!1sfr!2sec!4v1675261446781!5m2!1sfr!2sec"
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9343.21610700165!2d2.2369483924575335!3d48.889368578651045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6650919830f81%3A0xd9b29faf76e24816!2sH%C3%B4tel%20Mercure%20Paris%20La%20D%C3%A9fense!5e0!3m2!1sfr!2sec!4v1675262233243!5m2!1sfr!2sec"
    },
    {
        type: "soirée entreprise",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18635.88274941813!2d2.346354220353101!3d48.851493228955626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1aa6c84435%3A0x772045ec563b1de2!2sMus%C3%A9e%20des%20Arts%20et%20M%C3%A9tiers!5e0!3m2!1sfr!2sec!4v1675262626727!5m2!1sfr!2sec"
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/product-school-dJICd7b_LlE-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641.686438513205!2d2.238008572044138!3d48.890337143184446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66502f6012a89%3A0x31d9bac0d2b5f5!2zVUdDIENpbsOpIENpdMOpIExhIETDqWZlbnNl!5e0!3m2!1sfr!2sec!4v1675261446781!5m2!1sfr!2sec"
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/product-school-nOvIa_x_tfo-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9343.21610700165!2d2.2369483924575335!3d48.889368578651045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6650919830f81%3A0xd9b29faf76e24816!2sH%C3%B4tel%20Mercure%20Paris%20La%20D%C3%A9fense!5e0!3m2!1sfr!2sec!4v1675262233243!5m2!1sfr!2sec"
    },
    {
        type: "soirée entreprise",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: `http://localhost:${process.env.PORT}/images/stem-list-EVgsAbL51Rk-unsplash.jpg`,
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8665.536149626312!2d2.359736684840642!3d48.84185454597531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721743fa0af9%3A0x989bfc2771543869!2sAccor%20Arena!5e0!3m2!1sfr!2sec!4v1675262504801!5m2!1sfr!2sec"
    },
    {
        title: "World economic forum",
        description: "Oeuvre à la coopération entre le secteur public et le privé.",
        date: new Date("2027-04-24T20:28:45.744Z"),
        cover: `http://localhost:${process.env.PORT}/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.jpg`,
        type: "world forum",
        nb_guest: 1200,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7641.686438513205!2d2.238008572044138!3d48.890337143184446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66502f6012a89%3A0x31d9bac0d2b5f5!2zVUdDIENpbsOpIENpdMOpIExhIETDqWZlbnNl!5e0!3m2!1sfr!2sec!4v1675261446781!5m2!1sfr!2sec"
    },
    {
        title: "conférence",
        description: "Conférences sur le design de demain dans le digital",
        date: new Date("2027-05-14T20:28:45.744Z"),
        cover: `http://localhost:${process.env.PORT}/images/teemu-paananen-bzdhc5b3Bxs-unsplash1.jpg`,
        type: "world forum",
        nb_guest: 800,
        periode: "14-15-16",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9343.21610700165!2d2.2369483924575335!3d48.889368578651045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6650919830f81%3A0xd9b29faf76e24816!2sH%C3%B4tel%20Mercure%20Paris%20La%20D%C3%A9fense!5e0!3m2!1sfr!2sec!4v1675262233243!5m2!1sfr!2sec"
    },
    {
        title: "Sneakercraze market",
        description: "Rencontres de spécialistes des Sneakers Européens.",
        date: new Date("2027-06-10T20:28:45.744Z"),
        cover: `http://localhost:${process.env.PORT}/images/jakob-dalbjorn-cuKJre3nyYc-unsplash1.jpg`,
        type: "Marché",
        nb_guest: 2000,
        periode: "10-11-12",
        prestations: [
            "1 espace d’exposition",
            "2 espaces de restaurations",
            "1 site web dédié"
        ],
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8665.536149626312!2d2.359736684840642!3d48.84185454597531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6721743fa0af9%3A0x989bfc2771543869!2sAccor%20Arena!5e0!3m2!1sfr!2sec!4v1675262504801!5m2!1sfr!2sec"
    }

]

const seedDB = async () =>{
    const events = await Event.find()
    if(events.length > 0){
        await Event.deleteMany({})
    }
    await Event.insertMany(seedEvents)
}

seedDB().then(()=>{
    mongoose.connection.close();
    console.log('Database Seeded')
}).catch(error => {
    console.log(error)
})