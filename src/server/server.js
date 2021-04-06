const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

// const x = require("./models/x");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const users = [
  { firstName: "umit", lastName: "tengiz", active: 1 },
  { firstName: "ufuk", lastName: "aygun", active: 1 },
];

const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    active: Boolean
  }

  type Query {
    Users: User
  }

  type Mutation {
    addUser(firstName: String, lastName: String, active: Boolean): User
  }
`;

const resolvers = {
  Query: {
    Users: () => users
  },
  Mutation: {
    addUser: (_, { firstName, lastName, active }) => {
      const user = { firstName, lastName, active };
      users.push(user);
      return user;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
