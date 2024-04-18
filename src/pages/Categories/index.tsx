import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesEsportes, isLoading: isLoadingSports } =
    useGetSportGamesQuery()
  const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesLuta, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: gamesRPG, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        title="RPG"
        background="black"
        game={gamesRPG}
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        title="Acao"
        background="gray"
        game={gamesAcao}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        title="Esportes"
        background="black"
        game={gamesEsportes}
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        title="Luta"
        background="gray"
        game={gamesLuta}
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        title="Simulacao"
        background="black"
        game={gamesSimulacao}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
    </>
  )
}
export default Categories
