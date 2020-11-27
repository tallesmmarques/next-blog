import Link from 'next/link'
import Image from 'next/image'
import axios, { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IProduct } from '../index'

import Layout from '../../components/layout'
import style from '../../styles/product.module.css'
import styleUtils from '../../styles/utils.module.css'

interface ProdutcProps {
  product: IProduct
}

const Product: React.FC<ProdutcProps> = ({ product }) => {
  return (
    <Layout>
      <main className={style.page}>
        <section className={style.container}>
          <figure className={style.imageContainer}>
            <Image
              src={product.image}
              width={400}
              height={400}
              objectFit="scale-down"
            />
          </figure>

          <div className={style.rightContainer}>
            <article>
              <h1 className={style.title}>{product.title}</h1>
              <p className={style.categoryTitle}>
                Category:{' '}
                <span className={style.category}>{product.category}</span>
              </p>
              <p className={style.description}>{product.description}</p>
              <div className={style.horizontal}>
                <p className={style.price}>$ {product.price}</p>
                <button className={style.buy}>Add to Cart</button>
              </div>
            </article>

            <Link href="/">
              <a className={style.back}>↩ Back to Home</a>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<
  ProdutcProps,
  { id: string }
> = async ({ params }) => {
  const product = await axios
    .get(`https://fakestoreapi.com/products/${params.id}`)
    .then((res: AxiosResponse<IProduct>) => res.data)

  return {
    props: {
      product
    }
  }
}

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const products = await axios
    .get('https://fakestoreapi.com/products')
    .then((res: AxiosResponse<IProduct[]>) => {
      return res.data
    })

  return {
    paths: products.map((product) => ({ params: { id: String(product.id) } })),
    fallback: false
  }
}

export default Product
