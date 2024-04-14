import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import ResidentEvil from '../../assets/images/resident.png'
import Gallery from '../../components/Gallery'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          doloremque, voluptatibus eveniet minima ad, quos tenetur ab natus
          illum, hic deleniti itaque soluta aliquid accusantium perspiciatis.
          Incidunt distinctio eaque odio eos iure voluptates maiores earum,
          laborum ducimus. Porro non expedita necessitatibus exercitationem fuga
          asperiores cum maiores corrupti atque sint dolores, ad, quidem
          voluptatem debitis? Earum consequuntur natus nemo itaque dolorem?
          Eligendi laborum sint voluptatem expedita quibusdam quasi optio amet
          magnam ratione illo? Exercitationem reiciendis pariatur cupiditate
          omnis, unde obcaecati culpa? Ex recusandae, sunt illum alias
          voluptatibus corrupti aliquid! Ipsa eaque unde repellendus suscipit
          nam odit quis neque recusandae magni necessitatibus?
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          doloremque, voluptatibus eveniet minima ad, quos tenetur ab natus
          illum, hic deleniti itaque soluta aliquid accusantium perspiciatis.
          Incidunt distinctio eaque odio eos iure voluptates maiores earum,
          laborum ducimus. Porro non expedita necessitatibus exercitationem fuga
          asperiores cum maiores corrupti atque sint dolores, ad, quidem
          voluptatem debitis? Earum consequuntur natus nemo itaque dolorem?
          Eligendi laborum sint voluptatem expedita quibusdam quasi optio amet
          magnam ratione illo? Exercitationem reiciendis pariatur cupiditate
          omnis, unde obcaecati culpa? Ex recusandae, sunt illum alias
          voluptatibus corrupti aliquid! Ipsa eaque unde repellendus suscipit
          nam odit quis neque recusandae magni necessitatibus?
        </p>
      </Section>

      <Gallery defaultCover={ResidentEvil} name="jogo teste" />
    </>
  )
}

export default Product
