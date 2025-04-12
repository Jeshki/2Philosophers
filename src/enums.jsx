// src/enums.jsx

// Enum geografiniam filtravimui (naudojamas Filters.jsx)
// Raktai gali būti naudojami vidinėje logikoje, reikšmės rodomos UI ir saugomos App state'e
export const GeographicalOrderEnum = {
  GREECE: 'Greece',
  EUROPE: 'Europe', // Apima Romą, Vokietiją, Prancūziją, Italiją, Olandiją, Čekiją etc.
  BRITISH_ISLES: 'British Isles', // Apima Angliją, UK
  NORTH_AMERICA: 'North America', // Apima USA
  MIDDLE_EAST: 'Middle East', // Apima Persiją, Centrinę Aziją
  NORTH_AFRICA: 'North Africa', // Apima Tunisą
  INDIA: 'India',
  CHINA: 'China',
  TIBET: 'Tibet',
  // Galima pridėti daugiau regionų ar šalių pagal poreikį
};

// Grupuoja ideologijas filtravimui
// Masyvuose esančios reikšmės turi TIKSLIAI atitikti IdeologicalOrder lauką data.js
export const IdeologicalGroups = {
  "Ancient/Classical Western": [
    'Socratic Method',
    'Idealism',
    'Empiricism', // Locke'o empiricizmas čia ar Modern? Pagalvoti.
    'Stoicism',
    'Cynicism',
    'Epicureanism',
    'Pythagoreanism',
    'Roman Republicanism'
  ],
  "Medieval European/Christian": [
     'Christian Neoplatonism',
     'Scholasticism',
     'Reformation', // Hus
     'Reformation Theology', // Calvin
     'Christian Humanism', // Erasmus
     'Christian Apologetics', // Lewis (nors vėlesnis)
     'Christian Existentialism' // Pascal (nors vėlesnis)
  ],
  "Modern European": [
    'Rationalism', // Leibniz, Spinoza, Descartes
    'German Idealism', // Schelling
    'Dialectics', // Hegel
    'Enlightenment', // Diderot, Voltaire
    'Political Liberalism', // Montesquieu
    'Pessimism', // Schopenhauer
    'Existentialism', // Nietzsche (Husserl?)
    'Deontological Ethics', // Kant
    'Phenomenology', // Husserl
  ],
  "Political/Social": [
     'Liberalism', // Jefferson
     'Marxism', // Marx
     'Socialism', // Engels
     'Political Realism', // Machiavelli
     'Historical Sociology' // Ibn Khaldun
  ],
  "Indian": [
    'Vedic Philosophy',
    'Vedanta', // Vyasa, Gaudapada
    'Advaita Vedanta', // Shankara
    'Qualified Non-Dualism', // Ramanuja
    'Dvaita Vedanta', // Madhva
    'Yoga Philosophy', // Patanjali
    'Integral Yoga', // Aurobindo
  ],
  "Buddhist": [
    'Mahayana Buddhism', // Ashvaghosha
    'Madhyamaka Buddhism', // Nagarjuna
    'Bodhisattva Path', // Shantideva
    'Buddhist Logic', // Dignaga
    'Gelugpa Buddhism', // Tsongkhapa
  ],
  "Islamic": [
    'Islamic Philosophy', // Al-Farabi
    'Avicennism', // Avicenna
    'Islamic Theological Philosophy', // Al-Ghazali
  ],
  "Eastern/Mystical (Other)": [
     'Daoism', // Laozi
     'Eastern Philosophy', // Alan Watts
     'Mystical Humanism' // Huxley, Tagore
  ]
};


// Šie enum'ai paliekami, jei būtų naudingi ateityje, bet tiesiogiai nenaudojami filtrų logikoje dabar
export const ChronologicalOrderEnum = {
  ANCIENT: 'Ancient', // ~Before 500 BC
  CLASSICAL: 'Classical', // ~500 BC - 500 AD
  MEDIEVAL: 'Medieval', // ~500 AD - 1500 AD
  RENAISSANCE: 'Renaissance', // ~1400 - 1600 AD (persidengia)
  EARLY_MODERN: 'Early Modern', // ~1500 - 1800 AD
  MODERN: 'Modern', // ~1800 - 1950 AD
  CONTEMPORARY: 'Contemporary' // ~1950 AD - Present
};

export const IdeologicalOrderEnum = {
  // Čia galėtų būti VISŲ IdeologicalOrder reikšmių sąrašas iš data.js,
  // jei norėtumėte jas naudoti kitur kaip konstantas.
  // Pavyzdžiui:
  STOICISM: 'Stoicism',
  CYNICISM: 'Cynicism',
  SOCRATIC_METHOD: 'Socratic Method',
  IDEALISM: 'Idealism',
  EMPIRICISM: 'Empiricism',
  // ... ir t.t. ...
};