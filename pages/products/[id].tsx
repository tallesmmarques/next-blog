import Link from 'next/link'
import Image from 'next/image'
import axios, { AxiosResponse } from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IProduct } from '../index'

interface ProdutcProps {
  product: IProduct
}

const Product: React.FC<ProdutcProps> = ({ product }) => {
  return (
    <div>
      <Image src={product.image} width={200} height={200} />
      <p>{product.title}</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
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
