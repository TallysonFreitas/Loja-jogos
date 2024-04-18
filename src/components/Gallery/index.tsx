import { useState } from 'react'

import * as S from './style'

import { GalleryItem } from '../../pages/Home'
import Zoom from '../../assets/images/zoom.png'
import Play from '../../assets/images/play.png'
import CloseIcon from '../../assets/images/fechar.png'
import Section from '../Section'
// Interfaces

interface Props {
  defaultCover: string
  name: string
  items: GalleryItem[]
}
interface ModalState extends GalleryItem {
  isVisible: boolean
}

// Componente Galeria
const Gallery = ({ defaultCover, name, items }: Props) => {
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
        <S.Items>
          {items.map((each, index) => (
            <S.Item
              key={each.url}
              onClick={() => {
                setModal({ type: each.type, url: each.url, isVisible: true })
              }}
            >
              <img
                src={getMediaCover(each)}
                alt={`midia ${index + 1} de ${name}`}
              />
              <S.Action>
                <img
                  src={getMediaIcon(each)}
                  alt="clique aqui para maximizar a midia"
                />
              </S.Action>
            </S.Item>
          ))}
        </S.Items>
      </Section>
      <S.Modal className={modal.isVisible === true ? 'is-visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={CloseIcon} alt="icone de fechar" onClick={closeModal} />
          </header>

          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </S.ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </S.Modal>
    </>
  )
}

export default Gallery
