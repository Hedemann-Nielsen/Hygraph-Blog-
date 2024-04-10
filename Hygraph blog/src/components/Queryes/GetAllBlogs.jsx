import { gql } from "graphql-request";

export const getAllBlogs = gql`
	query BlogPost {
		blaoPosts {
			titleOnBlogpost
			createdAt
			contentOnBlogPost
		}
	}
`;
