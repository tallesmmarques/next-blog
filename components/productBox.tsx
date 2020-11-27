import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../pages/index'
import style from './productBox.module.css'

interface ProductsBoxProps {
  product: IProduct
}

const ProdutsBox: React.FC<ProductsBoxProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src={product.image}
            alt={product.title}
            width={250}
            height={250}
            objectFit="scale-down"
            className={style.image}
          />
        </div>

        <div className={style.textContainer}>
          <h3 className={style.title}>{product.title}</h3>
          <span className={style.price}>${product.price}</span>
        </div>
      </div>
    </Link>
  )
}

export default ProdutsBox
