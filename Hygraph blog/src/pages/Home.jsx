import { useGetQuery } from "../components/Hooks/useGetQuery";
import { getAllBlogs } from "../components/Queryes/GetAllBlogs";
import { Link } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Tilføjet remark-gfm for at understøtte GitHub Flavored Markdown

export const Home = () => {
	const { data, isLoading, error } = useGetQuery(getAllBlogs, "allBlogs");

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	const latestBlogPost = data.blaoPosts[data.blaoPosts.length - 1];

	console.log("Data", data);
	console.log("Seneste Blog post", latestBlogPost);

	// Omdan createdAt til en JavaScript Date-objekt
	const createdAtDate = new Date(latestBlogPost.createdAt);

	// Hent år, måned, dag, time og minut fra Date-objektet
	const year = createdAtDate.getFullYear();
	const month = String(createdAtDate.getMonth() + 1).padStart(2, "0"); // +1 da måneder går fra 0 til 11
	const day = String(createdAtDate.getDate()).padStart(2, "0");
	const hour = String(createdAtDate.getHours()).padStart(2, "0");
	const minute = String(createdAtDate.getMinutes()).padStart(2, "0");

	// Saml dato- og tidsværdierne i det ønskede format
	const formattedDateTime = `${year}-${month}-${day} kl: ${hour}:${minute}`;

	return (
		<>
			<h4 className="text-2xl text-center m-5 uppercase font-semibold">
				Seneste Blog post
			</h4>
			<div className="mx-6 my-3 p-6 bg-secondary rounded-lg border-primary border">
				<h3 className="text-xl">{latestBlogPost.titleOnBlogpost}</h3>
				<div className="py-3">
					<ReactMarkdown remarkPlugins={[remarkGfm]}>
						{latestBlogPost.contentOnBlogPost}
					</ReactMarkdown>
				</div>
				<div className="border-t max-w-fit border-primary shadow-inner">
					<p className="text-xs">{formattedDateTime}</p>
				</div>
				<Link to="/blog" className="flex justify-end">
					<button className="bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-dark transition duration-300">
						Se flere Blog indlæg
					</button>
				</Link>
			</div>
		</>
	);
};
