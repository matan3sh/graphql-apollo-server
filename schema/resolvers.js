const { UserList, MovieList } = require('../db');

const resolvers = {
  Query: {
    // User Resolvers
    users: () => {
      return UserList;
    },
    user: (parent, { id }) => {
      return UserList.find((user) => user.id === Number(id));
    },

    // Movie Resolvers
    movies: () => {
      return MovieList;
    },
    movie: (parent, { name }) => {
      return MovieList.find((movie) => movie.name === name);
    },
  },

  User: {
    favoriteMovies: () => {
      return MovieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },
};

module.exports = { resolvers };
