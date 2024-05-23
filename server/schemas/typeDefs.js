const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID
    user: String
}

input BookData {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Query {
    me: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth 
    saveBook(bookData: BookData!): User
    removeBook(bookId: ID): User
}
`;

module.exports = typeDefs;
