import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";

export const useGetQuery = (query, key, params) => {
	const baseUrl = `https://api-eu-west-2.hygraph.com/v2/clusn9x3i0q2m07we3vl69lf1/master`;

	const { data, isLoading, error } = useQuery({
		queryKey: [key],
		queryFn: async () => request(baseUrl, query, params ? { ...params } : null),
	});

	return { data, isLoading, error };
};
