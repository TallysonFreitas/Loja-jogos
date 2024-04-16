import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetSportGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesLuta } = useGetFightGamesQuery()
  const { data: gamesRPG } = useGetRpgGamesQuery()

  if (gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta && gamesRPG) {
    return (
      <>
        <ProductsList title="RPG" background="black" game={gamesRPG} id="rpg" />
        <ProductsList
          title="Acao"
          background="gray"
          game={gamesAcao}
          id="action"
        />
        <ProductsList
          title="Esportes"
          background="black"
          game={gamesEsportes}
          id="sports"
        />
        <ProductsList
          title="Luta"
          background="gray"
          game={gamesLuta}
          id="fight"
        />
        <ProductsList
          title="Simulacao"
          background="black"
          game={gamesSimulacao}
          id="simulation"
        />
      </>
    )
  }
  return <h3>carregando</h3>
}
export default Categories
