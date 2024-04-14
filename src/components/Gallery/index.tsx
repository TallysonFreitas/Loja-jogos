import Hogwarts from '../../assets/images/fundo_hogarts.png'
import { Action, Item, Items, Modal, ModalContent } from './style'
import Zoom from '../../assets/images/zoom.png'
import Play from '../../assets/images/play.png'
import Fechar from '../../assets/images/fechar.png'
import SpiderMan from '../../assets/images/banner-homem-aranha.png'
import { useState } from 'react'
import Section from '../Section'

// Interfaces
interface GalleryItem {
  type: 'image' | 'video'
  url: string
}
interface Props {
  defaultCover: string
  name: string
}
interface ModalState extends GalleryItem {
  isVisible: boolean
}

// Mock
const mock: GalleryItem[] = [
  {
    type: 'image',
    url: SpiderMan
  },
  {
    type: 'image',
    url: Hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=suxbcQskHK3iHATF'
  }
]

// Componente Galeria
const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  function closeModal() {
    setModal({
      ...modal,
      isVisible: false,
      url: ''
    })
  }

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((each, index) => (
            <Item
              key={each.url}
              onClick={() => {
                setModal({ type: each.type, url: each.url, isVisible: true })
              }}
            >
              <img
                src={getMediaCover(each)}
                alt={`midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(each)}
                  alt="clique aqui para maximizar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible === true ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={Fechar} alt="icone de fechar" onClick={closeModal} />
          </header>
          <div>
            {modal.type === 'image' ? (
              <img src={modal.url} alt="" />
            ) : (
              <iframe frameBorder={0} src={modal.url} />
            )}
          </div>
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
