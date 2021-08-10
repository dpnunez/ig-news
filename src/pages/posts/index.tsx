import { GetStaticProps } from "next"
import { getPrismicClient } from "services/prismic"
import Prismic from "@prismicio/client"
import Head from "next/head"
import { RichText } from "prismic-dom"

import styles from "./styles.module.scss"

type Post = {
	slug: string;
	title: string;
	resume: string;
	updatedAt: string
}

interface PostsPageProps {
	posts: Post[]
}

const PostsPage = ({ posts }: PostsPageProps) => {
	return (
		<>
			<Head>
				<title>Posts | Ig.news</title>
			</Head>
			<main className={styles.container}>
				<div className={styles.posts}>
					{posts.map(post => (
						<a key={post.slug} href={post.slug} >
							<time>{post.updatedAt}</time>
							<strong>{post.title}</strong>
							<p>{post.resume}</p>
						</a>
					))}
				</div>
			</main>
		</>
	)
}


export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient()
	const response = await prismic.query(
		Prismic.predicates.at('document.type', 'post'),
		{
			fetch: ['post.title', 'post.content'],
			pageSize: 100
		}
	)


	const posts = response.results.map(post => ({
		slug: post.uid,
		title: RichText.asText(post.data.title),
		resume: post.data.content.find(block => block.type === 'paragraph')?.text ?? '',
		updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		})
	}))

	console.log(JSON.stringify(response, null, 2))

	return {
		props: {
			posts
		}
	}
}


export default PostsPage