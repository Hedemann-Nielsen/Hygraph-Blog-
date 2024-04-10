// Blog.jsx
import React from "react";
import { useGetQuery } from "../components/Hooks/useGetQuery";
import { getAllBlogs } from "../components/Queryes/GetAllBlogs";
import { BlogPost } from "../components/BlogPost";

export const Blog = () => {
	const {
		data: allBlogs,
		isLoading,
		error,
	} = useGetQuery(getAllBlogs, "allBlogs");

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	console.log("data:", allBlogs);

	// Kopier arrayet og omvend rækkefølgen af kopien
	const reversedBlogPosts = [...allBlogs.blaoPosts].reverse();

	return (
		<>
			<h2 className="text-2xl text-center m-5 uppercase font-semibold">
				Alle Blog indlæg
			</h2>
			{reversedBlogPosts.map((blogPost) => (
				<BlogPost key={blogPost.id} blogPost={blogPost} />
			))}
		</>
	);
};
