import { gql } from "graphql-request";

export const getNaviagtions = gql`
	query GetNaviagtions {
		navigations {
			id
			navigationLink
			navigationTitle
		}
	}
`;
