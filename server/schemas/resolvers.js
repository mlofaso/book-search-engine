const { LogTimings } = require("concurrently");
const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async () => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
    },

    login: async (parent, {email, password}) => {
        const login = await User.findOne({email});
        if (!login) {
            throw AuthenticationError;
          }
    
          const correctPw = await login.isCorrectPassword(password);
    
          if (!correctPw) {
            throw AuthenticationError;
          }
    
          const token = signToken(login);
          return { token, login };
        },
    }

    saveBook 

    removeBook
  }
};

module.exports =  resolvers
