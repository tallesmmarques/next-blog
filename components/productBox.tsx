import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../pages/index'

interface ProductsBoxProps {
  product: IProduct
}

const ProdutsBox: React.FC<ProductsBoxProps> = ({ product }) => {
  return (
    <div>
      <div style={{ height: '200px', width: '200px', position: 'relative' }}>
        <Image
          src={product.image}
          alt={product.title}
          layout="fill"
          objectFit="scale-down"
        />
      </div>

      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <Link href={`/products/${product.id}`}>
        <a>See more...</a>
      </Link>
      <hr />
    </div>
  )
}

export default ProdutsBox
