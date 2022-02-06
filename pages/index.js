import Head from 'next/head'
import ArticleList from '../Components/ArticleList'
import {server} from '../config/'

export default function Home({ articles }) {

  return (
    <div >
      <Head>
        <title>Next App</title>
        <meta name='keywords' content='programming'></meta>
      </Head>

      <ArticleList articles={articles}/>
     
    </div>
  )
}

export const getStaticProps = async () => {

  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {

    props: {
      articles
    }

  }

}