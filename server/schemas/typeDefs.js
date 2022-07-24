const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Book {
    bookId: String!
    authors: [String]
    title: String
    description: String
    image: String
    link: String
}
type User{
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}
input savedBook {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    Link: String
}
type Query {
    me: User
}
type Auth{
    toker: ID!
    user: User
}
type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: savedBook): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;