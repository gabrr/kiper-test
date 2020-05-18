export const typeDefs = `

type Person {
  _id: ID!
  name: String
  email: String
  birthdate: String
  phone: String
  cpf: String
  class: String
}

type User {
  id: ID!
  name: String
  email: String
  token: String
}

type Apartment {
  _id: ID!
  number: String!
  block: String!
  owner: Person!
  living: [Person!]!
  createdAt: String
  updatedAt: String
}

input UserInput {
  name: String
  email: String
  password: String
}

input PersonInput {
  name: String
  email: String
  birthdate: String
  phone: String
  cpf: String
  class: String
}

input CreateApartmentInput {
  number: String!
  block: String!
  owner: PersonInput
  living: [PersonInput]!
}

type Deleted {
  acknowledged: String
  deletedCount: String
}

type Query {
  apartment(_id: ID!): Apartment!
  apartments: [Apartment!]!

  users: [User!]!
  user(_id: ID!): User!
  login(email: String, password: String): User!
}

type Mutation {
  createApt(input: CreateApartmentInput): Apartment!
  updateApt(_id: ID, input: CreateApartmentInput): Apartment!
  deleteApt(_id: ID): Deleted!

  createUser(input: UserInput): User!
}

`