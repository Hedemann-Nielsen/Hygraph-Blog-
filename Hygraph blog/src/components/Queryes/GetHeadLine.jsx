import { gql } from "graphql-request";

export const getHeadLine = gql`
	query Headlines {
		headlines {
			headline
			headerImage {
				url
			}
		}
	}
`;
