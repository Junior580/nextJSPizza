import Image from 'next/image'

interface IBgImage {
  img: string
  imgAlt: string
}

const BackGroundImage: React.FC = ({ img, imgAlt }: IBgImage) => {
  return <Image src={img} alt={imgAlt} />
}

export default BackGroundImage
