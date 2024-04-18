import { PacmanLoader } from 'react-spinners'
import { Container } from './style'
import { colors } from '../../styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={colors.white} />
  </Container>
)

export default Loader
