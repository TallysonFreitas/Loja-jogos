import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetOnSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetOnSoonQuery()

  if (promocoes && emBreve) {
    return (
      <>
        <Banner />
        <ProductsList
          title="Promocoes"
          background="gray"
          game={promocoes}
          id={'on-sale'}
        />
        <ProductsList
          title="Em breve"
          background="black"
          game={emBreve}
          id={'coming-soon'}
        />
      </>
    )
  }
  return <h3>carregando...</h3>
}

export default Home
