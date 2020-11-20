const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type User {
    id: ID
    firstName: String!
    lastName: String
    street: String
    number: Int
    zipCode: String
    country: String
    email: String
    phone: String
    password: String
    admin: Boolean
  }

  type Product {
    id: ID!
    category: Category!
    name: String!
    description: String!
    imageUrl: String!
    priceEuroCent: Int!
    status: String!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]
  }

  type Order {
    id: ID!
    status: String!
    user: User!
    products: [Product!]
  }

  type Query {
    categories: [Category!]
    orders: [Order!]
    products: [Product!]
    users: [User!]
  }

  type Login {
    token: String!
  }

  type Mutation {
    signup(firstName: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): Login!
    order(productIds: [Int!], userId: Int!, priceEuroCentPerUnit: Int!): Order!
  }
`;

module.exports = { typeDefs };
