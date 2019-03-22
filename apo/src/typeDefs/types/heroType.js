const { gql } = require("apollo-server");

const heroType = gql`
type Hero {
	_id: Int
	index: Int
	guid: String
	isActive: Boolean
	name: String
	age: Int
	color: String
	supername: String
	superpower: String
}
`;
