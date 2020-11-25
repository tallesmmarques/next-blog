import Head from 'next/head'
import axios from 'axios'
import { Url } from 'url'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

interface IProducts {
  category: string
  description: string
  id: number
  image: Url
  price: number
  title: string
}

const Home: React.FC = ({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </main>

      <footer>Talles Marques</footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products: IProducts[] = await axios
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
