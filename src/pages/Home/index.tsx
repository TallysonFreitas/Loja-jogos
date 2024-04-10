import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { Game } from '../../models/Game'
import ResidentEvil from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Acao',
    description:
      'Diablo IV é um RPG de acao em desenvolvimento pela Blizzard Entertainment',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: ResidentEvil
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de acao em desenvolvimento pela Blizzard Entertainment',
    title: 'Diablo',
    system: 'PS5',
    infos: ['20%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Acao',
    description:
      'Diablo IV é um RPG de acao em desenvolvimento pela Blizzard Entertainment',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Acao',
    description:
      'Diablo IV é um RPG de acao em desenvolvimento pela Blizzard Entertainment',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Acao',
    description:
      'Diablo IV é um RPG de acao em desenvolvimento pela Blizzard Entertainment',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: ResidentEvil
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de acao em desenvolvimento pela Blizzard Entertainment',
    title: 'Diablo',
    system: 'PS5',
    infos: ['20%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Acao',
    description:
      'Diablo IV é um RPG de acao em desenvolvimento pela Blizzard Entertainment',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 8,
    category: 'Acao',
    description:
      'Diablo IV é um RPG de acao em desenvolvimento pela Blizzard Entertainment',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promocoes" background="gray" game={promocoes} />
    <ProductsList title="Em breve" background="black" game={emBreve} />
  </>
)

export default Home
