import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const BlogPost = ({ blogPost }) => {
	// Tjek om blogPost er defineret
	if (!blogPost) {
		// Hvis ikke, returner loading eller null
		return <span>Loading....</span>; // eller null, afhængigt af dine krav
	}

	// Omdan createdAt til en JavaScript Date-objekt
	const createdAtDate = new Date(blogPost.createdAt);

	// Hent år, måned, dag, time og minut fra Date-objektet
	const year = createdAtDate.getFullYear();
	const month = String(createdAtDate.getMonth() + 1).padStart(2, "0"); // +1 da måneder går fra 0 til 11
	const day = String(createdAtDate.getDate()).padStart(2, "0");
	const hour = String(createdAtDate.getHours()).padStart(2, "0");
	const minute = String(createdAtDate.getMinutes()).padStart(2, "0");

	// Saml dato- og tidsværdierne i det ønskede format
	const formattedDateTime = `${year}-${month}-${day} kl: ${hour}:${minute}`;

	return (
		<div className="mx-6 my-3 p-6 bg-secondary rounded-lg border-primary border">
			<h3 className="text-xl">{blogPost.titleOnBlogpost}</h3>
			<div className="py-3">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{blogPost.contentOnBlogPost}
				</ReactMarkdown>
			</div>
			<div className="border-t max-w-fit border-primary shadow-inner">
				<p className="text-xs">{formattedDateTime}</p>
			</div>
		</div>
	);
};
