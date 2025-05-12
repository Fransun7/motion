const movies = [
  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },

  {
    title: "Inception",
    poster:
      "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    link: "https://www.imdb.com/title/tt1375666/", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },
  {
    title: "The Dark Knight",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg",
    link: "https://www.imdb.com/title/tt0468569/", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Avengers: Endgame",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    link: "https://www.themoviedb.org/movie/299534-avengers-endgame", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Spider-Man: No Way Home",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    link: "https://www.themoviedb.org/movie/634649-spider-man-no-way-home", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Matrix",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
    link: "https://www.themoviedb.org/movie/603-the-matrix", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "Titanic",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    link: "https://www.themoviedb.org/movie/597-titanic", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
  {
    title: "Avatar",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    link: "https://www.themoviedb.org/movie/19995-avatar", // Example link (you can replace with actual download link)
    genre: "Action",
  },
  {
    title: "The Shawshank Redemption",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "Forrest Gump",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    link: "https://www.themoviedb.org/movie/13-forrest-gump", // Example link (you can replace with actual download link)
    genre: "Sci-Fi",
  },

  {
    title: "The Godfather",
    poster:
      "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    link: "https://www.themoviedb.org/movie/238-the-godfather", // Example link (you can replace with actual download link)
    genre: "Drama",
  },
];

const MovieList = ({ searchTerm }) => {
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* show an error message if movie is not found */}

      {filteredMovies.length === 0 && searchTerm !== "" ? (
        <p className="text-white text-center mt-10 text-xl">
          Sorry! "{searchTerm}" not available.
        </p>
      ) : (
        <div className="grid grid-cols-5 gap-8 mt-10">
          {filteredMovies.map((movie, index) => (
            <div
              key={index}
              className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-md hover:border-green-500 hover:shadow-green-500 rounded"
              onClick={() => window.open(movie.link, "_blank")}
            >
              <img src={movie.poster} alt={movie.title} />
              <h2 className="text-white text-center">{movie.title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
