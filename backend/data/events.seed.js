const mongoose = require('mongoose');
const Event = require('./../models/Events');
require('dotenv').config()

mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/m77events?authSource=admin`,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie pour seed !'))
    .catch(() => console.log('Connexion à MongoDB échouée pour seed !'));
const date = new Date(Date.now());
const seedEvents = [
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "User&product MixUsers",
        cover: "http://localhost/images/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg",
        description: "Présentation des nouveaux usages UX.",
        nb_guest: 900,
        periode: "14-15-16",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "1 espace de restaurations"
        ]
    },
    {
        type: "expérience digitale",
        date: new Date("2022-01-29T20:28:45.744Z"),
        title: "#DigitonPARIS",
        cover: "http://localhost/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "1 site web dédié"
        ]
    },
    {

        type: "conférence",
        date: new Date("2022-03-29T20:28:45.744Z"),
        title: "Conférence &co-responsable",
        cover: "http://localhost/images/chuttersnap-Q_KdjKxntH8-unsplash.jpg",
        description: "Débats et échanges autour des collaborations eco-responsable.",
        nb_guest: 600,
        periode: "24-25-26",
        prestations: [
            "1 scéne principale",
            "1 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "conférence",
        date: new Date("2022-08-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/headway-F2KRf_QfCqw-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "expérience digitale",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "expérience digitale",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/product-school-dJICd7b_LlE-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/product-school-nOvIa_x_tfo-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "expérience digitale",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/stem-list-EVgsAbL51Rk-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "soirée entreprise",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "User&product MixUsers",
        cover: "http://localhost/images/alexandre-pellaes-6vAjp0pscX0-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "conférence",
        date: new Date("2022-01-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "soirée entreprise",
        date: new Date("2022-03-29T20:28:45.744Z"),
        title: "Mega Event",
        cover: "http://localhost/images/chuttersnap-Q_KdjKxntH8-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "conférence",
        date: new Date("2022-08-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/headway-F2KRf_QfCqw-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/pablo-heimplatz-ZODcBkEohk8-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "soirée entreprise",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/product-school-dJICd7b_LlE-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "conférence",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/product-school-nOvIa_x_tfo-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        type: "soirée entreprise",
        date: new Date("2022-04-29T20:28:45.744Z"),
        title: "Conférence #productCON",
        cover: "http://localhost/images/stem-list-EVgsAbL51Rk-unsplash.jpg",
        description: "Présentation des outils analytics aux professionnels du secteur ",
        nb_guest: 1300,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        title: "World economic forum",
        description: "Oeuvre à la coopération entre le secteur public et le privé.",
        date: new Date(date.setMonth(date.getMonth()+2)),
        cover: "http://localhost/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.jpg",
        type: "world forum",
        nb_guest: 1200,
        periode: "24-25-26",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
    },
    {
        title: "conférence",
        description: "Conférences sur le design de demain dans le digital",
        date: new Date(date.setMonth(date.getMonth()+1)),
        cover: "http://localhost/images/teemu-paananen-bzdhc5b3Bxs-unsplash1.jpg",
        type: "world forum",
        nb_guest: 800,
        periode: "14-15-16",
        prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "1 site web dédié"
        ]
    },
    {
        title: "Sneakercraze market",
        description: "Rencontres de spécialistes des Sneakers Européens.",
        date: new Date(date.setMonth(date.getMonth()+1)),
        cover: "http://localhost/images/jakob-dalbjorn-cuKJre3nyYc-unsplash1.jpg",
        type: "Marché",
        nb_guest: 2000,
        periode: "10-11-12",
        prestations: [
            "1 espace d’exposition",
            "2 espaces de restaurations",
            "1 site web dédié"
        ]
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