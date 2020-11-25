import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../pages/index'

interface ProductsBoxProps {
  product: IProduct
}

const ProdutsBox: React.FC<ProductsBoxProps> = ({ product }) => {
  return (
    <div>
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  )
}

export default ProdutsBox
