import { useGetQuery } from "../components/Hooks/useGetQuery";
import { getNaviagtions } from "../components/Queryes/GetNaviagtions";

export const Navbar = () => {
	const { data, isLoading, error } = useGetQuery(getNaviagtions, "Naviagtions");

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	console.log("Data", data);

	return (
		<nav className="bg-gradient-to-b from-primary to-transparent p-4">
			<div className="mx-auto flex justify-end">
				<ul className="flex space-x-4">
					{data.navigations.map((navItem) => (
						<li key={navItem.id}>
							<a
								href={navItem.navigationLink}
								className="text-white font-semibold hover:text-gray-300">
								{navItem.navigationTitle}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
