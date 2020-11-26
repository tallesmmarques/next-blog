import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../pages/index'
import style from './productBox.module.css'

interface ProductsBoxProps {
  product: IProduct
}

const ProdutsBox: React.FC<ProductsBoxProps> = ({ product }) => {
  return (
    <div className={style.container}>
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={200}
          width={200}
          objectFit="scale-down"
          className={style.image}
        />
      </Link>

      <h3 className={style.title}>{product.title}</h3>
      <span className={style.price}>${product.price}</span>
    </div>
  )
}

export default ProdutsBox
