import Head from 'next/head'
import axios from 'axios'
import { GetStaticProps } from 'next'
import ProdutsBox from '../components/productBox'
import Layout from '../components/layout'
import style from '../styles/home.module.css'

export interface IProduct {
  category: string
  description: string
  id: number
  image: string
  price: number
  title: string
}

interface HomeProps {
  products: IProduct[]
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <Layout>
      <Head>
        <title>Next Store</title>
      </Head>

      <div className={style.mainTitleContainer}>
        <h2 className={style.mainTitleTxt}>Shop</h2>
      </div>

      <div className={style.productsContainer}>
        {products.map((product) => (
          <ProdutsBox key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: IProduct[] = await axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      return res.data
    })

  return {
    props: {
      products
    }
  }
}

export default Home
