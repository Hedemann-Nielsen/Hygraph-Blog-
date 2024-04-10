import { useGetQuery } from "../Hooks/useGetQuery";
import { getHeadLine } from "../Queryes/GetHeadLine";

import { Navbar } from "../Navbar";

export const Header = () => {
	const { data, isLoading, error } = useGetQuery(getHeadLine, "HeadLine");

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	console.log("Data", data);
	return (
		<>
			<Navbar />
			<h1 className=" text-dark text-5xl m-5 font-bold text-center">
				{data.headlines[0].headline}
			</h1>
			<img
				src={data.headlines[0].headerImage.url}
				alt=""
				className=" h-44
				 w-full object-cover object-top"
			/>
		</>
	);
};
