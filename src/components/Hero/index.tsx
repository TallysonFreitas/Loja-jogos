import { Banner, Infos } from './style'
import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <div>
          <p>
            <span>De R$250,00</span>
            Por R$ 190,00
          </p>
          <Button
            title="clique aqui para adicionar ao carrinho"
            variant="primary"
            type="button"
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </Infos>
    </div>
  </Banner>
)

export default Hero
