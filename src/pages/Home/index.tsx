import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetOnSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetOnSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        title="Promocoes"
        background="gray"
        game={onSaleGames}
        id={'on-sale'}
        isLoading={isLoadingSale}
      />
      <ProductsList
        title="Em breve"
        background="black"
        game={soonGames}
        id={'coming-soon'}
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
