import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_CATEGORIES_QUERY = gql`query {

	productCategories(first: 300) {
		nodes {
			id
			name
			slug
			image {
				sourceUrl
				srcSet
			}
		}
	}
	
}`;

export default GET_CATEGORIES_QUERY;
