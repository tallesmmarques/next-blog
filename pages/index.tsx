import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { Url } from 'url'
import { GetStaticProps } from 'next'
import ProdutsBox from '../components/productBox'

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
    <div>
      <Head>
        <title>Next Store</title>
      </Head>

      <header>
        <h1>Next Store</h1>
      </header>

      <main>
        <ul>
          {products.map((product) => (
            <ProdutsBox key={product.id} product={product} />
          ))}
        </ul>
      </main>

      <footer>Talles Marques</footer>
    </div>
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
