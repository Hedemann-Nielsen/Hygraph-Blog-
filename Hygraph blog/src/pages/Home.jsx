import { useGetQuery } from "../components/Hooks/useGetQuery";
import { getAllBlogs } from "../components/Queryes/GetAllBlogs";

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

	return <></>;
};
