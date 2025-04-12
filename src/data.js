import sokratesImg from './pages/img/sokrates.png';
import platonImg from './pages/img/platon.png';
import aristotelImg from './pages/img/aristotel.png';
import senekaImg from './pages/img/seneka.png';
import schellingImg from './pages/img/schellingas.png';
import leibnizImg from './pages/img/leibnizis.png';
import husserlImg from './pages/img/huserlis.png';
import hegelImg from './pages/img/hegelis.png';
import diderotImg from './pages/img/diderotas.png';
import dignagaImg from './pages/img/dignagas.png';
import gaudapadaImg from './pages/img/gaudapadas.png';
import ghoshasImg from './pages/img/ghoshas.png';
import jeffersonImg from './pages/img/jefersonas.png';
import lockeImg from './pages/img/lokas.png';
import montesqueImg from './pages/img/montesque.png';
import ramanujaImg from './pages/img/ramanudzis.png';
import sankaraImg from './pages/img/sankaras.png';
import schopenhauerImg from './pages/img/sopenhauer.png';
import spinozaImg from './pages/img/spinoza.png';
import voltaireImg from './pages/img/volteras.png';
import descartesImg from './pages/img/dekartas.png';
import husImg from './pages/img/husas.png';
import wattsImg from './pages/img/watts.png';
import epicurusImg from './pages/img/epikiuras.png';
import pythagorasImg from './pages/img/pitagoras.png';
import marxImg from './pages/img/marxas.png';
import laoziImg  from './pages/img/laodzi.png';
import huxleyImg from './pages/img/huxlis.png';
import nietzscheImg from './pages/img/nyce.png';
import kantImg from './pages/img/kantas.png';
import engelsImg from './pages/img/engelsas.png';
import aquinasImg from './pages/img/akvinietis.png';
import ashvaghoshaImg from './pages/img/ashvagosha.png';
import machiavelliImg from './pages/img/makevelis.png';
import calvinImg from './pages/img/kalvinas.png';
import erasmusImg from './pages/img/roterdamas.png';
import aureliusImg from './pages/img/antonijus.png';
import ciceroIMG from './pages/img/ciceronas.png';
import lewisImg from './pages/img/lewis.png';
import farabiImg from './pages/img/alfarabis.png';
import ibnSinaImg from './pages/img/avicenas.png';
import gazaliImg from './pages/img/ghazalis.png';
import khaldunImg from './pages/img/khaldunas.png';
import vyasaImg from './pages/img/vyasa.png';
import patanjaliImg from './pages/img/patanjali.png';
import nagarjunaImg from './pages/img/nagarjuna.png';
import madhvaImg from './pages/img/madhva.png';
import aurobindoImg from './pages/img/aribondo.png';
import tagoreImg from './pages/img/tagore.png';
import shantidevaImg from './pages/img/santidevas.png';
import tsongkhapaImg from './pages/img/tsongkhapas.png';
import boethiusImg from './pages/img/boecijus.png';
import anselmImg from './pages/img/anzelmas.png';
import pascalImg from './pages/img/pascalis.png';
import diogenesImg from './pages/img/diogenas.png';
import zenoImg from './pages/img/zenius.png';
import augustineImg from './pages/img/augustinas.png';
import confuciusImg from './pages/img/Konfucijus.png';
import danteImg from './pages/img/dante.png';
import lutherImg from './pages/img/luther.png';
import debeauvoirImg from './pages/img/beuvoir.png';
import sartreImg from './pages/img/sarte.png';
import democritusImg from './pages/img/democrit.png';

export const philosophers = [
  {
    name: "Socrates",
    years: "(BC 470–399)",
    quote: "The unexamined life is not worth living.",
    bio: "In the sunlit streets of ancient Athens, Socrates walked barefoot, questioning everyone he met. He didn’t write books or start a school—he just asked questions that shook the foundations of belief. Living from 470 to 399 BC, he believed the unexamined life wasn't worth living. For him, wisdom began with admitting ignorance. He died by drinking poison, choosing truth over escape.",
    img: sokratesImg,
    id: 1,
    country: "Greece",
    shortStory: "Barefoot sage of Athens who chose truth over life.",
    ChronologicalOrder: 1, // Ancient
    geographicalOrder: "Greece", // Pataisyta
    IdeologicalOrder: "Socratic Method"
  },
  {
    name: "Plato",
    years: "(BC 428–348)",
    quote: "Wise men speak because they have something to say.",
    bio: "Socrates' student, Plato, turned thought into dialogue. Born in 428 BC, he founded the Academy—perhaps the first university. His writings explored justice, love, and the ideal society. In the shadows of Athens, he dreamed of a world where philosopher-kings ruled, guided not by power, but by reason.",
    img: platonImg,
    id: 2,
    country: "Greece",
    shortStory: "Visionary who built philosophy's first academy.",
    ChronologicalOrder: 2, // Ancient/Classical
    geographicalOrder: "Greece", // Pataisyta
    IdeologicalOrder: "Idealism" // Patikrinti casing enums.jsx
  },
  {
    name: "Aristotle",
    years: "(BC 384–322)",
    quote: "Knowing yourself is the beginning of all wisdom.",
    about: "Aristotle, Plato’s student, was more grounded. Born in 384 BC in northern Greece, he loved nature, logic, and categories. He tutored Alexander the Great, and his mind ranged across science, politics, and ethics. He believed in moderation—a life of virtue balanced between extremes.",
    img: aristotelImg,
    id: 3,
    country: "Greece",
    shortStory: "The balanced thinker who taught an empire.",
    ChronologicalOrder: 3, // Classical
    geographicalOrder: "Greece", // Pataisyta
    IdeologicalOrder: "Empiricism" // Patikrinti casing enums.jsx
  },
  {
    name: "Seneca",
    years: "(BC 4–65)",
    quote: "Luck is what happens when preparation meets opportunity.",
    about: "In imperial Rome, Seneca stood at the heart of power as a statesman and advisor to Nero. Born around 4 BC, he was a Stoic, believing that true strength comes from within. Life is short, he said—don’t waste it. Prepare your mind, and fortune cannot shake you.",
    img: senekaImg,
    id: 4,
    country: "Rome",
    shortStory: "Stoic statesman who mastered fortune.",
    ChronologicalOrder: 4, // Classical (Roman)
    geographicalOrder: "Europe", // Pataisyta (Rome priskirta Europe)
    IdeologicalOrder: "Stoicism"
  },
  {
    name: "Friedrich Schelling",
    years: "(1775–1854)",
    quote: "The history of the world is the discipline of the human race.",
    about: "Schelling, born in 1775 in Germany, looked into nature and saw spirit. He believed that the universe was alive and creativity was divine. As a post-Kantian idealist, he merged art, nature, and philosophy, seeking unity in a world of dualities.",
    img: schellingImg,
    id: 5,
    country: "Germany",
    shortStory: "Nature mystic who wove spirit into science.",
    ChronologicalOrder: 35, // Modern (Pataisytas apytiksliai)
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "German Idealism"
  },
  {
    name: "Gottfried Wilhelm Leibniz",
    years: "(1646–1716)",
    quote: "Music is the pleasure the human mind experiences from counting without being aware that it is counting.",
    about: "Born in 1646 in Leipzig, Leibniz was a genius who saw the world as a perfectly ordered machine. He co-invented calculus (independently of Newton) and believed that we live in the best of all possible worlds. For him, logic, math, and metaphysics were intertwined—every small part reflected the whole.",
    img: leibnizImg,
    id: 6,
    country: "Germany",
    shortStory: "Harmony-seeking inventor of optimism and logic.",
    ChronologicalOrder: 26, // Early Modern (Pataisytas apytiksliai)
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Rationalism"
  },
  {
    name: "Saint Augustine",
    years: "(354–430)",
    quote: "Our hearts are restless until they find their rest in Thee.",
    bio: "Augustine of Hippo was a Roman African theologian and philosopher from Numidia whose writings influenced the development of Western Christianity and Western philosophy. As bishop of Hippo Regius, he was involved in the Donatist controversy. His major works, including 'Confessions' and 'City of God', explored concepts like original sin, divine grace, and the nature of God, profoundly shaping medieval and modern thought.",
    img: augustineImg,
    id: 7, // Tęsiame ID eilę
    country: "North Africa (Roman Empire)",
    shortStory: "Architect of Christian doctrine and finder of restless peace.",
    ChronologicalOrder: 8, // Apytiksliai tarp Senekos/Cicero ir Boethius/Dignaga
    geographicalOrder: "North Africa", // Atitinka enums.jsx
    IdeologicalOrder: "Christian Neoplatonism" // Atitinka enums.jsx
  },
  {
    name: "Edmund Husserl",
    years: "(1859–1938)",
    quote: "The only world that exists is the one we experience.",
    about: "In the early 20th century, Husserl wanted to clear away assumptions and look at experience itself. Born in 1859 in what’s now the Czech Republic, he founded phenomenology—the study of consciousness from the first-person view. He asked: What is it like to experience something? His thinking laid the groundwork for existentialism.",
    img: husserlImg,
    id: 8,
    country: "Austria-Hungary",
    shortStory: "The first-person scientist of consciousness.",
    ChronologicalOrder: 40, // Modern/Contemporary
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Phenomenology"
  },
  {
    name: "Confucius",
    years: "(BC 551–479)",
    quote: "Do not impose on others what you do not wish for yourself.",
    bio: "Confucius was a Chinese philosopher, politician, and teacher whose beliefs, preserved in the Analects, deeply influenced Chinese and East Asian thought and life. His philosophy emphasized personal and governmental morality, correctness of social relationships, justice, kindness, and sincerity. He championed strong family loyalty, ancestor veneration, and respect of elders by their children and of husbands by their wives, recommending family as a basis for ideal government.",
    img: confuciusImg,
    id: 9, // Tęsiame ID eilę
    country: "China",
    shortStory: "Sage of harmony who shaped Chinese civilization.",
    ChronologicalOrder: 2, // Apytiksliai tarp Pythagoras/Zeno ir Socrates/Laozi
    geographicalOrder: "China", // Atitinka enums.jsx
    IdeologicalOrder: "Confucianism" // Atitinka enums.jsx
  },
  {
    name: "Denis Diderot",
    years: "(1713–1784)",
    quote: "Man will never be free until the last king is strangled with the entrails of the last priest.",
    about: "In 18th-century France, Diderot dreamed of gathering all knowledge in one place. Born in 1713, he co-created the Encyclopédie—a radical act at the time. He believed reason and science could liberate humanity from superstition. Witty, bold, and rebellious, he helped light the fire of the Enlightenment.",
    img: diderotImg,
    id: 10,
    country: "France",
    shortStory: "The rebellious mind of the Enlightenment.",
    ChronologicalOrder: 28, // Enlightenment/Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Enlightenment"
  },
 {
    name: "Dignaga",
    years: "(480–540)", // Patikslinta
    quote: "Only perception and inference are valid means of knowledge.",
    about: "In 5th-century India, Dignaga transformed Buddhist thought by focusing on logic and perception. He believed there are only two valid paths to knowledge: what we see, and what we logically infer. His work laid the foundation for centuries of philosophical debate in India and Tibet.",
    img: dignagaImg,
    id: 11,
    country: "India",
    shortStory: "The logician who revolutionized Buddhist epistemology.",
    ChronologicalOrder: 8, // Medieval (Pataisyta apytiksliai)
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Buddhist Logic"
  },
  {
    name: "Gaudapada",
    years: "(6th century)",
    quote: "The self is unborn, eternal, and beyond time.",
    about: "A quiet mystic of 6th-century India, Gaudapada meditated on reality and came to a startling conclusion: the self is eternal, untouched by time or change. His philosophy—early Advaita Vedanta—claimed that the world is illusion and only the Self (Brahman) is real. Peace, he taught, comes from realizing this unity.",
    img: gaudapadaImg,
    id: 12,
    country: "India",
    shortStory: "The Advaita pioneer who taught unity of all.",
    ChronologicalOrder: 9, // Medieval (Pataisyta apytiksliai)
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Vedanta" // Patikslinta (Advaita Vedanta yra Shankara)
  },
  {
    name: "Ghosha",
    years: "(1st century)",
    quote: "Poetry is the mirror of the inner self.",
    about: "Ghosha lived in ancient India around the 1st century AD—a rare female voice in early philosophy. A poet and sage, her hymns in the Rigveda reflected on inner beauty, health, and devotion. Through her words, she bridged the human and the divine, showing that wisdom and grace can coexist.",
    img: ghoshasImg,
    id: 13,
    country: "India",
    shortStory: "Vedic poetess revealing inner and divine beauty.",
    ChronologicalOrder: 5, // Classical
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Vedic Philosophy"
  },
 {
    name: "Thomas Jefferson",
    years: "(1743–1826)",
    quote: "I cannot live without books.",
    about: "Born in 1743 in colonial Virginia, Jefferson was more than a Founding Father—he was a thinker, writer, and lover of books. He penned the Declaration of Independence, embedding Enlightenment ideals of liberty and human rights. He believed in education, reason, and the power of the individual to shape society.",
    img: jeffersonImg,
    id: 14,
    country: "USA",
    shortStory: "Penman of liberty and Enlightenment statesman.",
    ChronologicalOrder: 29, // Modern
    geographicalOrder: "North America", // Pataisyta
    IdeologicalOrder: "Liberalism"
  },
  {
    name: "John Locke",
    years: "(1632–1704)",
    quote: "The end of law is not to abolish or restrain, but to preserve and enlarge freedom.",
    about: "John Locke, born in 1632 in England, is often called the father of liberalism. He argued that governments must protect life, liberty, and property—and if they don’t, people have the right to rebel. He believed knowledge came from experience, not birthright. His ideas helped spark revolutions.",
    img: lockeImg,
    id: 15,
    country: "England",
    shortStory: "Empirical father of individual rights and liberty.",
    ChronologicalOrder: 25, // Early Modern (Pataisyta apytiksliai)
    geographicalOrder: "British Isles", // Pataisyta
    IdeologicalOrder: "Empiricism"
  },
  {
    name: "Montesquieu",
    years: "(1689–1755)",
    quote: "To become truly great, one has to stand with people, not above them.",
    about: "In 18th-century France, Montesquieu studied governments like a scientist. Born in 1689, he warned of tyranny and praised the separation of powers—executive, legislative, judicial. His ideas became the blueprint for modern democracies, influencing constitutions across the world.",
    img: montesqueImg,
    id: 16,
    country: "France",
    shortStory: "Architect of separation of powers.",
    ChronologicalOrder: 27, // Enlightenment/Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Political Liberalism"
  },
{
    name: "Ramanuja",
    years: "(1017–1137)",
    quote: "Devotion is the path to liberation.",
    about: "In 11th-century southern India, Ramanuja taught that devotion (bhakti) is the path to the divine. Born in 1017, he offered a warm alternative to cold logic—arguing that God is both personal and cosmic. His vision of ‘qualified non-dualism’ shaped Hindu theology and spiritual practice for generations.",
    img: ramanujaImg,
    id: 17,
    country: "India",
    shortStory: "Bhakti sage merging devotion and unity.",
    ChronologicalOrder: 15, // Medieval (Pataisyta apytiksliai)
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Qualified Non-Dualism"
  },
  {
    name: "Adi Shankara",
    years: "(788–820)", // Patikslinta
    quote: "Brahman is the only truth, the world is illusion.",
    about: "Born around 788 AD in Kerala, India, Adi Shankara was a child prodigy turned wandering monk. He revitalized Hinduism by teaching Advaita Vedanta: everything is one, and that one is Brahman. The world is illusion, he said—liberation comes from seeing through it.",
    img: sankaraImg,
    id: 18,
    country: "India",
    shortStory: "The boy monk who unified Vedanta.",
    ChronologicalOrder: 11, // Medieval (Pataisyta apytiksliai)
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Advaita Vedanta"
  },
  {
    name: "Arthur Schopenhauer",
    years: "(1788–1860)",
    quote: "Compassion is the basis of morality.",
    about: "In 19th-century Germany, Schopenhauer looked at the world and saw suffering. Born in 1788, he believed human desire was endless and often painful. But his bleak outlook held a strange beauty—he saw compassion as our only salvation. His work later inspired psychologists and artists alike.",
    img: schopenhauerImg,
    id: 19,
    country: "Germany",
    shortStory: "Pessimist of the will, prophet of compassion.",
    ChronologicalOrder: 39, // Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Pessimism"
  },
  {
    name: "Baruch Spinoza",
    years: "(1632–1677)",
    quote: "The more you struggle to live, the less you live...",
    about: "Spinoza, born in 1632 in Amsterdam, saw the divine not in temples but in nature itself. Expelled from his Jewish community for his radical views, he quietly wrote about a universe where God and Nature were one. For him, freedom came through understanding. He lived simply and thought deeply.",
    img: spinozaImg,
    id: 20,
    country: "Netherlands",
    shortStory: "Pantheist pioneer of modern metaphysics.",
    ChronologicalOrder: 24, // Early Modern (Pataisyta apytiksliai)
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Rationalism"
  },
  {
    name: "Voltaire",
    years: "(1694–1778)",
    quote: "I disapprove of what you say, but I will defend to the death your right to say it.", // Pilnesnė citata
    about: "Voltaire lit up Enlightenment France with his wit and fire. Born in 1694, he wrote plays, essays, and satire that mocked tyranny and championed reason. Jailed and exiled, he never stopped fighting for free speech and religious tolerance. His sharp pen reshaped the moral imagination of Europe.",
    img: voltaireImg,
    id: 21,
    country: "France",
    shortStory: "Sharp-tongued Enlightenment hero.",
    ChronologicalOrder: 30, // Enlightenment/Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Enlightenment"
  },
{
    name: "René Descartes",
    years: "(1596–1650)",
    quote: "I think, therefore I am.",
    about: "In a cold room in 17th-century France, Descartes sat by a stove and questioned everything. Born in 1596, he sought certainty in a world of doubt. ‘I think, therefore I am,’ he concluded—a foundation for modern philosophy. He was also a mathematician, linking geometry and algebra. Reason, for him, was the path to truth.",
    img: descartesImg,
    id: 22,
    country: "France",
    shortStory: "Father of modern philosophy and analytic geometry.",
    ChronologicalOrder: 23, // Early Modern (Pataisyta apytiksliai)
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Rationalism"
  },
  {
    name: "Jan Hus",
    years: "(1372–1415)", // Patikslinta
    quote: "Seek the truth, listen to the truth, teach the truth, love the truth, abide by the truth, and defend the truth unto death.", // Pilnesnė citata
    about: "Jan Hus, born around 1372 in Bohemia (now the Czech Republic), preached reform before Luther. He wanted a purer church, one grounded in scripture. His ideas threatened the church’s power, and he was burned at the stake in 1415. But his legacy lived on—he planted seeds of Protestantism long before it took root.",
    img: husImg,
    id: 23,
    country: "Czech Republic",
    shortStory: "The pre-Reformation martyr of truth.",
    ChronologicalOrder: 21, // Medieval/Renaissance
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Reformation" // Arba 'Proto-Reformation'?
  },
  {
    name: "Alan Watts",
    years: "(1915–1973)",
    quote: "Trying to define yourself is like trying to bite your own teeth.",
    about: "In the 20th century, Alan Watts bridged East and West. Born in 1915 in England, he moved to the U.S. and made Zen, Taoism, and Vedanta understandable to Western audiences. His talks flowed like rivers—playful, profound, poetic. He taught that you are not separate from the world—you are it.",
    img: wattsImg,
    id: 24,
    country: "UK/USA",
    shortStory: "Zen translator for the Western mind.",
    ChronologicalOrder: 44, // Contemporary
    geographicalOrder: "North America", // Pataisyta (Daugiausiai veikė JAV)
    IdeologicalOrder: "Eastern Philosophy"
  },
 {
    name: "Epicurus",
    years: "(BC 341–270)",
    quote: "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.", // Pilnesnė citata
    about: "Epicurus, born in 341 BC in Greece, believed happiness came from simple pleasures and peace of mind. He taught in a garden, welcoming everyone—even women and slaves. Contrary to modern misreadings, he didn’t promote indulgence but calm: enjoy life, avoid fear, and don’t worry about the gods.",
    img: epicurusImg,
    id: 25,
    country: "Greece",
    shortStory: "Pleasure philosopher of the tranquil mind.",
    ChronologicalOrder: 2, // Hellenistic/Classical
    geographicalOrder: "Greece", // Pataisyta
    IdeologicalOrder: "Epicureanism"
  },
  {
    name: "Pythagoras",
    years: "(BC 570–495)",
    quote: "Do not say a little in many words but a great deal in a few.",
    about: "Pythagoras, the math mystic, was born around 570 BC in Samos. He believed numbers were sacred and that harmony ruled the universe. He founded a secretive school where math, music, and morality blended. Most remember his triangle theorem, but he saw math as a path to the divine.",
    img: pythagorasImg,
    id: 26,
    country: "Greece",
    shortStory: "The number mystic who saw math as divine.",
    ChronologicalOrder: 1, // Ancient/Pre-Socratic
    geographicalOrder: "Greece", // Pataisyta
    IdeologicalOrder: "Pythagoreanism"
  }, 
  {
    name: "Dante Alighieri",
    years: "(1265–1321)",
    quote: "Abandon all hope, ye who enter here.",
    bio: "Dante Alighieri was an Italian poet, writer, and philosopher from Florence. His epic poem, the Divine Comedy, is widely considered one of the most important works of the Middle Ages and the greatest literary work in the Italian language. It presents an allegorical journey through Hell (Inferno), Purgatory (Purgatorio), and Paradise (Paradiso), exploring themes of sin, redemption, divine justice, and theology, heavily influenced by Scholastic philosophy.",
    img: danteImg,
    id: 27,
    country: "Italy (Florence)",
    shortStory: "Poet who mapped Hell, Purgatory, and Paradise.",
    ChronologicalOrder: 19,
    geographicalOrder: "Europe",
    IdeologicalOrder: "Medieval Christian Thought"
  },

  {
    name: "Karl Marx",
    years: "(1818–1883)",
    quote: "The philosophers have only interpreted the world, in various ways; the point is to change it.", // Pilna citata
    about: "In the smoky cities of 19th-century Europe, Karl Marx saw factory workers struggle and asked why. Born in 1818 in Germany, he challenged capitalism and wrote The Communist Manifesto with Engels. He believed that history moved through class struggles—and envisioned a society without exploitation.",
    img: marxImg,
    id: 28,
    country: "Germany",
    shortStory: "Class struggle prophet and revolutionary economist.",
    ChronologicalOrder: 41, // Modern
    geographicalOrder: "Europe", // Pataisyta (Veikė Vokietijoje, Prancūzijoje, JK)
    IdeologicalOrder: "Marxism"
  },
  {
    name: "Laozi",
    years: "(BC 6th century)",
    quote: "A journey of a thousand miles begins with a single step.",
    about: "Legend says Laozi was born old and wise, sometime in the 6th century BC in China. He rode a water buffalo westward and wrote the Tao Te Ching before vanishing into the mountains. He taught that nature flows effortlessly, and so should we. Let go. Flow like water. That was his message.",
    img: laoziImg,
    id: 29,
    country: "China",
    shortStory: "The sage of flowing nature and quiet power.",
    ChronologicalOrder: 3, // Ancient
    geographicalOrder: "China", // Pataisyta
    IdeologicalOrder: "Daoism"
  },
  {
    name: "Aldous Huxley",
    years: "(1894–1963)",
    quote: "Facts do not cease to exist because they are ignored.",
    about: "Aldous Huxley, born in 1894 in England, peered into the future and didn't like what he saw. His novel Brave New World warned of comfort that numbs the soul. He explored science, mysticism, and psychedelics, seeking deeper truths about human potential and consciousness.",
    img: huxleyImg,
    id: 30,
    country: "England",
    shortStory: "Dystopian prophet of soul over system.",
    ChronologicalOrder: 46, // Contemporary
    geographicalOrder: "British Isles", // Pataisyta
    IdeologicalOrder: "Mystical Humanism"
  },
  {
    name: "Friedrich Nietzsche",
    years: "(1844–1900)",
    quote: "He who has a why to live can bear almost any how.",
    about: "Nietzsche, born in 1844 in Germany, wrote like a poet and thought like a storm. He questioned morality, religion, and truth itself. “God is dead,” he declared—not in hatred, but to awaken people to build their own meaning. His ideas still echo, wild and brilliant, in the search for purpose.",
    img: nietzscheImg,
    id: 31,
    country: "Germany",
    shortStory: "Dionysian challenger of modern values.",
    ChronologicalOrder: 42, // Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Existentialism" // Arba "Nietzscheanism"?
  },
  {
    name: "Immanuel Kant",
    years: "(1724–1804)",
    quote: "Science is organized knowledge. Wisdom is organized life.",
    about: "In quiet Königsberg (now Kaliningrad), Immanuel Kant lived a life of precision. Born in 1724, he rarely left his hometown but reshaped philosophy. He asked: What can we know? What should we do? What can we hope for? He believed morality came from duty, guided by reason.",
    img: kantImg,
    id: 32,
    country: "Prussia",
    shortStory: "Clockwork ethicist of duty and reason.",
    ChronologicalOrder: 32, // Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Deontological Ethics"
  },
  {
    name: "G.W.Friedrich Hegel",
    years: "(1770–1831)",
    quote: "Nothing great in the world has been accomplished without passion.",
    about: "Hegel, born in 1770 in Stuttgart, thought in spirals. To him, history was a process—a dialectic—where ideas clashed and evolved. Thesis meets antithesis, creating a synthesis. He believed in progress through conflict, and that reality unfolds through reason.",
    img: hegelImg,
    id: 33, // ID tvarka?
    country: "Germany",
    shortStory: "The dialectical mind behind progress.",
    ChronologicalOrder: 36, // Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Dialectics"
  },
{
    name: "Friedrich Engels",
    years: "(1820–1895)",
    quote: "An ounce of action is worth a ton of theory.",
    about: "Engels was Marx’s closest ally—born in 1820 in Germany, he saw the same injustice and wanted change. A writer, activist, and industrialist’s son, he used his wealth to support Marx. Together, they imagined a world free of class oppression. Engels gave socialism not only theory but heart and backing.",
    img: engelsImg,
    id: 34,
    country: "Germany",
    shortStory: "Industrialist rebel with a revolutionary cause.",
    ChronologicalOrder: 43, // Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Socialism" // Arba Marxism?
  },
  {
    name: "Thomas Aquinas",
    years: "(1225–1274)",
    quote: "To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.", // Pilnesnė citata
    about: "In 13th-century Italy, Thomas Aquinas tried to harmonize faith and reason. A Dominican friar born in 1225, he studied Aristotle and blended his logic with Christian theology. His Summa Theologica asked huge questions—What is God? What is good?—and answered them with calm clarity. He saw no contradiction between science and belief.",
    img: aquinasImg,
    id: 35,
    country: "Italy",
    shortStory: "The saint who debated Aristotle and angels.",
    ChronologicalOrder: 17, // Medieval
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Scholasticism"
  },
  {
    name: "Ashvaghosha",
    years: "(80–150)", // Patikslinta
    quote: "Delusion creates the world. Enlightenment dissolves it.",
    about: "Poet, philosopher, and playwright—Ashvaghosha lived in India around the 1st–2nd century AD. As a Buddhist thinker, he believed in the power of storytelling to awaken the spirit. His work Buddhacarita told the Buddha’s life story, emphasizing enlightenment as freedom from illusion.",
    img: ashvaghoshaImg,
    id: 36,
    country: "India",
    shortStory: "Buddha’s bard and poetic philosopher.",
    ChronologicalOrder: 6, // Classical/Medieval
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Mahayana Buddhism"
  },
  {
    name: "Niccolò Machiavelli",
    years: "(1469–1527)",
    quote: "It is better to be feared than loved, if you cannot be both.",
    about: "Born in 1469 in Florence, Machiavelli knew power up close. A diplomat and realist, he wrote The Prince as a brutally honest guide to politics. Better to be feared than loved, he said, if you must choose. To him, politics was about outcomes, not ideals—a perspective still debated today.",
    img: machiavelliImg,
    id: 37,
    country: "Italy",
    shortStory: "Realist ruler wrangler of ruthless wisdom.",
    ChronologicalOrder: 20, // Renaissance
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Political Realism"
  },
  {
    name: "John Calvin",
    years: "(1509–1564)",
    quote: "There is no knowing that does not begin with knowing God.",
    about: "Calvin, born in 1509 in France, was a sharp legal mind turned theologian. He led the Protestant Reformation with an emphasis on God’s absolute sovereignty. In Geneva, he shaped a city into a spiritual republic. His ideas—like predestination—were strict, but they gave many people structure and purpose in a chaotic age.",
    img: calvinImg,
    id: 38,
    country: "France",
    shortStory: "Preacher of predestination and Protestant order.",
    ChronologicalOrder: 22, // Renaissance/Reformation
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Reformation Theology"
  },
{
    name: "Erasmus of Rotterdam",
    years: "(1466–1536)", // Patikslinta
    quote: "The main hope of a nation lies in the proper education of its youth.",
    about: "Erasmus, born around 1466 in the Netherlands, was a priest with a humanist heart. He believed the Church needed reform—but not revolt. Through satire and scholarship, he called for education, tolerance, and inner piety. His book In Praise of Folly poked fun at corruption, hoping to awaken change from within.",
    img: erasmusImg,
    id: 39,
    country: "Netherlands",
    shortStory: "Humanist who laughed truth into reform.",
    ChronologicalOrder: 19, // Renaissance (Pataisyta apytiksliai)
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Christian Humanism"
  },
  {
    name: "Marcus Aurelius",
    years: "(121–180)",
    quote: "You have power over your mind – not outside events. Realize this, and you will find strength.", // Pilnesnė citata
    about: "Marcus Aurelius, a Roman emperor born in 121 AD, ruled with wisdom during war and plague. At night, he wrote to himself—not as a ruler, but as a Stoic. His Meditations are a manual for inner strength: control your mind, accept what you can't change, and do your duty with grace.",
    img: aureliusImg,
    id: 40,
    country: "Rome",
    shortStory: "The emperor-philosopher of endurance.",
    ChronologicalOrder: 7, // Classical (Roman)
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Stoicism"
  },
  {
    name: "Cicero",
    years: "(BC 106–43)",
    quote: "The welfare of the people is the highest law.",
    about: "In the final days of the Roman Republic, Cicero stood as its conscience—an orator, lawyer, and philosopher who believed that words could guide empires. Born in 106 BC, he rose from humble beginnings to become Rome’s greatest speaker, wielding his pen and voice to defend liberty, reason, and the rule of law. Through turbulent politics, he upheld the ideals of justice and civic duty.",
    img: ciceroIMG,
    id: 41,
    country: "Rome",
    shortStory: "The voice of the republic, silenced but not forgotten.",
    ChronologicalOrder: 4, // Classical (Roman)
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Roman Republicanism"
  },
  {
    name: "C. S. Lewis",
    years: "(1898 - 1963)",
    quote: "You are never too old to set another goal or to dream a new dream.",
    about: "C. S. Lewis, born in Belfast in 1898, was a British writer and scholar known for his works on apologetics, fantasy, and medieval literature. He taught at Oxford and Cambridge Universities. His most famous works include The Chronicles of Narnia and Mere Christianity. Lewis explored themes of morality, faith, and the battle between good and evil, often using allegory and accessible language.",
    img: lewisImg,
    id: 42,
    country: "UK",
    shortStory: "The storyteller who cloaked theology in magic.",
    ChronologicalOrder: 47, // Contemporary
    geographicalOrder: "British Isles", // Pataisyta
    IdeologicalOrder: "Christian Apologetics"
  },
  {
    name: "Al-Farabi",
    years: "(872 - 950)",
    quote: "An art is a virtue that enables us to produce something.", // Kita citata
    about: "Al-Farabi, a polymath born in Central Asia around 872, was one of the greatest philosophers of the Islamic Golden Age. Known as 'The Second Teacher' (after Aristotle), he made significant contributions to logic, music theory, and political philosophy. His work focused on harmonizing Greek philosophy with Islamic thought, and he envisioned an ideal state governed by philosopher-kings.",
    img: farabiImg,
    id: 43,
    country: "Central Asia",
    shortStory: "The Second Teacher bridging faith and reason.",
    ChronologicalOrder: 12, // Medieval (Islamic Golden Age)
    geographicalOrder: "Middle East", // Pataisyta (Apytikslis regionas)
    IdeologicalOrder: "Islamic Philosophy"
  },
  {
    name: "Avicenna",
    years: "(980 - 1037)",
    quote: "The knowledge of anything, since all things have causes, is not acquired or complete unless it is known by its causes.", // Kita citata
    about: "Avicenna (Ibn Sina), born in Persia around 980, was a polymath renowned for his contributions to medicine, philosophy, and astronomy. His 'Canon of Medicine' remained a standard medical text for centuries. In philosophy, he developed a comprehensive system that integrated Aristotelian and Neoplatonic ideas with Islamic theology.",
    img: ibnSinaImg,
    id: 44,
    country: "Persia",
    shortStory: "Master of medicine and metaphysics.",
    ChronologicalOrder: 13, // Medieval (Islamic Golden Age)
    geographicalOrder: "Middle East", // Pataisyta
    IdeologicalOrder: "Avicennism"
  },
  {
    name: "Al-Ghazali",
    years: "(1058 - 1111)",
    quote: "To get hold of the substance we must not be afraid to seize the shadow.",
    about: "Al-Ghazali, born in Persia around 1058, was a prominent Islamic theologian, jurist, philosopher, and mystic. He is considered one of the most influential thinkers in Islamic history. His major work, 'The Incoherence of the Philosophers,' critiqued Aristotelian philosophy and defended a more mystical and intuitive approach to knowledge.",
    img: gazaliImg,
    id: 45,
    country: "Persia",
    shortStory: "Mystic who questioned the philosophers.",
    ChronologicalOrder: 14, // Medieval (Islamic Golden Age)
    geographicalOrder: "Middle East", // Pataisyta
    IdeologicalOrder: "Islamic Theological Philosophy"
  },
{
    name: "Ibn Khaldun",
    years: "(1332 - 1406)",
    quote: "Government is an institution which prevents injustice other than such as it commits itself.", // Kita citata
    about: "Ibn Khaldun, born in Tunis in 1332, was an Arab historiographer and sociologist. His most famous work, 'The Muqaddimah,' is a groundbreaking study of world history and sociology. He developed theories on social organization, the rise and fall of civilizations, and the importance of group solidarity ('asabiyyah'). He is considered a pioneer in the fields of sociology and demography.",
    img: khaldunImg,
    id: 46,
    country: "Tunisia",
    shortStory: "Pioneer of historical sociology.",
    ChronologicalOrder: 19, // Late Medieval/Renaissance
    geographicalOrder: "North Africa", // Pataisyta
    IdeologicalOrder: "Historical Sociology"
  },
  {
    name: "Vyasa",
    years: "(BC 3000)", // Patikslinta
    quote: "Do good to others, that is true religion.", // Kita citata
    about: "Vyasa is a central figure in Hindu tradition, credited as the compiler of the Vedas, the author of the Mahabharata, the Puranas, and the Brahma Sutras. His works are foundational to Hinduism, exploring themes of dharma, karma, and the nature of reality. While his exact dates are unknown, his influence on Indian philosophy and culture is immense.",
    img: vyasaImg,
    id: 47,
    country: "India",
    shortStory: "Sage compiler of the Hindu canon.",
    ChronologicalOrder: 0, // Ancient (Legendary)
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Vedanta"
  },
{
    name: "Patanjali",
    years: "(2nd century)", // Patikslinta
    quote: "When you are inspired by some great purpose, some extraordinary project, all your thoughts break their bonds.",
    about: "Patanjali is believed to have compiled the Yoga Sutras, a foundational text on yoga philosophy and practice. His work outlines the eight limbs of yoga, providing a systematic approach to spiritual development and self-realization. Patanjali's teachings have had a profound and lasting impact on the practice of yoga worldwide.",
    img: patanjaliImg,
    id: 48,
    country: "India",
    shortStory: "Codifier of yoga's path to freedom.",
    ChronologicalOrder: 1, // Ancient/Classical
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Yoga Philosophy"
  },
  {
    name: "Nagarjuna",
    years: "(150 - 250)",
    quote: "Whatever is dependently co-arisen / That is explained to be emptiness.", // Kita citata
    about: "Nagarjuna, an Indian philosopher and founder of the Madhyamaka school of Mahayana Buddhism, is considered one of the most important thinkers in Buddhist history. His concept of 'sunyata' (emptiness) revolutionized Buddhist philosophy, arguing that all phenomena are devoid of inherent existence. His work has profoundly influenced Buddhist thought and practice.",
    img: nagarjunaImg,
    id: 49,
    country: "India",
    shortStory: "Void master of Mahayana metaphysics.",
    ChronologicalOrder: 6, // Classical/Medieval
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Madhyamaka Buddhism"
  },
  {
    name: "Madhva",
    years: "(1238 - 1317)",
    quote: "The difference between the individual soul and the Supreme Soul is eternal and real.",
    about: "Madhva, an Indian philosopher and theologian, founded the Dvaita (dualistic) school of Vedanta. He strongly opposed the monistic views of Advaita Vedanta, arguing for the eternal and real distinction between the individual soul and the Supreme Soul (God). His philosophy emphasizes the importance of devotion to Vishnu and the reality of the material world.",
    img: madhvaImg,
    id: 50,
    country: "India",
    shortStory: "Devotion-rooted dualist of Vedanta.",
    ChronologicalOrder: 18, // Medieval
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Dvaita Vedanta"
  },
  {
    name: "Sri Aurobindo",
    years: "(1872 - 1950)",
    quote: "All life is yoga.",
    about: "Sri Aurobindo, an Indian nationalist, philosopher, yogi, and guru, developed a philosophy known as Integral Yoga. He sought to synthesize Eastern and Western thought, envisioning a spiritual evolution that would lead to the manifestation of a divine life on Earth. His writings cover a wide range of topics, including yoga, philosophy, poetry, and social theory.",
    img: aurobindoImg,
    id: 51,
    country: "India",
    shortStory: "Mystic architect of Integral Yoga.",
    ChronologicalOrder: 45, // Modern/Contemporary
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Integral Yoga"
  },
  {
    name: "Rabindranath Tagore",
    years: "(1861 - 1941)",
    quote: "Death is not extinguishing the light; it is only putting out the lamp because the dawn has come.",
    about: "Rabindranath Tagore, a Bengali polymath, was a poet, writer, playwright, philosopher, and artist. He won the Nobel Prize in Literature in 1913. His philosophy emphasized the unity of humanity and nature, and he advocated for education and social reform. His works often reflected a deep spiritual and mystical connection with the world.",
    img: tagoreImg,
    id: 52,
    country: "India",
    shortStory: "Poet-sage of human unity and awakening.",
    ChronologicalOrder: 44, // Modern/Contemporary
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Mystical Humanism"
  },{
    name: "Martin Luther",
    years: "(1483–1546)",
    quote: "A simple layman armed with Scripture is greater than the mightiest pope without it.",
    bio: "Martin Luther was a German professor of theology, composer, priest, monk, and a seminal figure in the Protestant Reformation. He strongly disputed the claim that freedom from God's punishment for sin could be purchased with money (indulgences). His Ninety-five Theses, published in 1517, sparked the Reformation. He emphasized justification by faith alone (Sola Fide) and the Bible as the sole source of religious authority (Sola Scriptura).",
    img: lutherImg,
    id: 53, // Tęsiame ID eilę
    country: "Germany",
    shortStory: "Monk whose theses sparked the Reformation.",
    ChronologicalOrder: 22, // Apytiksliai po Hus, kartu su Machiavelli/Erasmus/Calvin
    geographicalOrder: "Europe", // Atitinka enums.jsx
    IdeologicalOrder: "Reformation Theology" // Atitinka enums.jsx
  },
{
    name: "Shantideva",
    years: "(8th century)",
    quote: "May I become at all times, both now and forever, a protector for those without protection, a guide for those who have lost their way, a ship for those with oceans to cross, a bridge for those with rivers to cross.", // Pilnesnė citata
    about: "Shantideva, an 8th-century Indian Buddhist monk and scholar, is renowned for his work 'Bodhicharyavatara' (A Guide to the Bodhisattva's Way of Life). This text outlines the path of a Bodhisattva, emphasizing compassion, altruism, and the pursuit of enlightenment for the benefit of all beings. Shantideva's teachings continue to inspire those seeking a life of meaning and service.",
    img: shantidevaImg,
    id: 54,
    country: "India",
    shortStory: "Bodhisattva’s poet of selfless path.",
    ChronologicalOrder: 11, // Medieval
    geographicalOrder: "India", // Pataisyta
    IdeologicalOrder: "Bodhisattva Path"
  },
  {
    name: "Tsongkhapa",
    years: "(1357 - 1419)",
    quote: "The root of all happiness is gratitude.",
    about: "Tsongkhapa, a Tibetan Buddhist monk, philosopher, and reformer, founded the Gelug school of Tibetan Buddhism. He emphasized the importance of monastic discipline, logic, and the study of both sutra and tantra. His work 'Lamrim Chenmo' (The Great Treatise on the Stages of the Path to Enlightenment) is a comprehensive guide to Buddhist practice and philosophy.",
    img: tsongkhapaImg,
    id: 55,
    country: "Tibet",
    shortStory: "Reformer sage of Tibetan scholasticism.",
    ChronologicalOrder: 20, // Late Medieval/Renaissance
    geographicalOrder: "Tibet", // Pataisyta
    IdeologicalOrder: "Gelugpa Buddhism"
  },
  {
    name: "Boethius",
    years: "(480 - 524)",
    quote: "In all adversity of fortune, the most unhappy sort of misfortune is to have been happy.", // Patikslinta citata
    about: "Anicius Manlius Severinus Boethius, a Roman philosopher, statesman, and theologian, lived during a turbulent period in Roman history. His most famous work, 'The Consolation of Philosophy,' written while imprisoned, explores themes of fate, free will, and the nature of happiness. Boethius sought to reconcile classical Greek philosophy with Christian thought.",
    img: boethiusImg,
    id: 56,
    country: "Italy",
    shortStory: "Prisoner of fate, friend of philosophy.",
    ChronologicalOrder: 9, // Late Antiquity/Early Medieval
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Christian Neoplatonism"
  },
  {
    name: "Anselm of Canterbury",
    years: "(1033 - 1109)",
    quote: "Faith seeking understanding (Fides quaerens intellectum).", // Lotyniškai
    about: "Anselm of Canterbury, an Italian-born Benedictine monk, theologian, and philosopher, served as Archbishop of Canterbury. He is considered one of the most important Christian thinkers of the Middle Ages. His philosophical contributions include ontological arguments for the existence of God and explorations of the relationship between faith and reason.",
    img: anselmImg,
    id: 57,
    country: "Italy / England",
    shortStory: "Ontologist of divine logic.",
    ChronologicalOrder: 15, // Medieval
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Scholasticism"
  },
  {
    name: "Blaise Pascal",
    years: "(1623 - 1662)",
    quote: "The heart has its reasons which reason knows nothing of.",
    about: "Blaise Pascal, a French mathematician, physicist, inventor, writer, and theologian, made significant contributions to both science and philosophy. He is known for Pascal's Triangle, his work on probability theory, and his philosophical reflections on faith, doubt, and the human condition. His 'Pensées' (Thoughts) is a collection of fragments exploring these themes.",
    img: pascalImg,
    id: 58,
    country: "France",
    shortStory: "Genius torn between reason and heart.",
    ChronologicalOrder: 27, // Early Modern
    geographicalOrder: "Europe", // Pataisyta
    IdeologicalOrder: "Christian Existentialism"
  },
  {
    name: "Diogenes of Sinope",
    years: "(BC 412-323)",
    quote: "I am looking for an honest man.", // Garsiausia citata (su žibintu)
    about: "Diogenes of Sinope was a Cynic philosopher in ancient Greece who challenged societal norms and values. He famously lived in a large jar or tub, rejecting material possessions and social conventions. Diogenes advocated for a life of virtue lived in accordance with nature, rejecting hypocrisy and artificiality.",
    img: diogenesImg,
    id: 59,
    country: "Greece",
    shortStory: "Dogged rebel with a lantern for truth.",
    ChronologicalOrder: 5, // Classical/Hellenistic
    geographicalOrder: "Greece", // Pataisyta
    IdeologicalOrder: "Cynicism"
  },
  {
    name: "Zeno of Citium",
    years: "(BC 334–262)",
    quote: "Man conquers the world by conquering himself.", // Kita citata
    about: "Zeno of Citium was the founder of the Stoic school of philosophy in Athens. Stoicism emphasized virtue, reason, and living in accordance with nature. Zeno taught that true happiness comes from inner peace and self-control, not from external circumstances.",
    img: zenoImg,
    id: 60,
    country: "Greece", // (Kipras, bet veikė Atėnuose)
    shortStory: "Stoic patriarch of inner fortitude.",
    ChronologicalOrder: 2, // Hellenistic
    geographicalOrder: "Greece", // Pataisyta
    IdeologicalOrder: "Stoicism"
  }, {
    name: "Simone de Beauvoir",
    years: "(1908–1986)",
    quote: "One is not born, but rather becomes, a woman.",
    bio: "Simone de Beauvoir was a French writer, intellectual, existentialist philosopher, political activist, feminist, and social theorist. Though she did not consider herself primarily a philosopher, her work, particularly 'The Second Sex' (1949), had a profound influence on both feminist existentialism and feminist theory. It detailed the historical oppression of women and became a foundational text of modern feminism. She maintained a lifelong relationship with Jean-Paul Sartre.",
    img: debeauvoirImg,
    id: 65,
    country: "France",
    shortStory: "Founding voice of modern feminism.",
    ChronologicalOrder: 48,
    geographicalOrder: "Europe",
    IdeologicalOrder: "Feminism"
  },
  {
    name: "Jean-Paul Sartre",
    years: "(1905–1980)",
    quote: "Man is condemned to be free.",
    bio: "Jean-Paul Sartre was a French philosopher, playwright, novelist, political activist, and literary critic, a key figure in the philosophy of existentialism and phenomenology. His work, such as 'Being and Nothingness' and 'No Exit', explored themes of radical freedom, responsibility, and 'bad faith'. He argued that 'existence precedes essence' and that individuals are solely responsible for creating their own meaning in an indifferent universe. He famously refused the Nobel Prize in Literature in 1964.",
    img: sartreImg,
    id: 66, // Tęsiame ID eilę
    country: "France",
    shortStory: "Existentialist champion of radical freedom.",
    ChronologicalOrder: 47, // Šalia de Beauvoir, gimė šiek tiek anksčiau
    geographicalOrder: "Europe", // Atitinka enums.jsx
    IdeologicalOrder: "Existentialism" // Atitinka enums.jsx
  },
  {
    name: "Democritus",
    years: "(BC 460–370)",
    quote: "Nothing exists except atoms and empty space; everything else is opinion.",
    bio: "Democritus was an influential Ancient Greek pre-Socratic philosopher primarily remembered today for his formulation of an atomic theory of the universe, developed with his teacher Leucippus. He theorized that all matter is composed of tiny, indivisible, and indestructible particles called atoms (atomos), which move in an infinite void. He believed the properties of objects derive from the properties of their constituent atoms. He was also known as the 'laughing philosopher' for his emphasis on cheerfulness.",
    img: democritusImg,
    id: 67, // Tęsiame ID eilę
    country: "Greece (Thrace)",
    shortStory: "The laughing father of atoms.",
    ChronologicalOrder: 4, // Apytiksliai Socrato/Platono amžininkas
    geographicalOrder: "Greece", // Atitinka enums.jsx
    IdeologicalOrder: "Atomism" // Atitinka enums.jsx
  }

];                       