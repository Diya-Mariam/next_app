//import { useRouter } from "next/router"
import Link from "next/link"
import { server } from "../../../config"

const article = ({article}) => {

    // const router = useRouter()
    // const {id} = router.query

    return(
        
        <>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <br/>
            <Link href='/' >Go Back</Link>
        </>
    )

}


export const getStaticProps = async(context) => {

    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }

}

export const getStaticPaths = async () => {

    const res = await fetch(`${server}/api/articles/`)
    const articles = await res.json()

    const ids = articles.map((article) => (article.id))
    const paths = ids.map((id )=> ({params: {id: id.toString() }}))

    return {
        paths, 
        fallback: false
    }

    
}


export default article