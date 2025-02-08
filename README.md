# Movie Database Project Using React

## Description
This project is a movie database application that allows users to browse, search, and view details about movies. It uses the TMDB API to retrieve movie data, including trailers and cast information.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [APIs](#apis)
- [Contributing](#contributing)
- [ComingSoon](#Some-of-those-Coming-Soon)

## Installation
Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone git@github.com:Marc-Ruizenaar/movie.git

# Navigate to the project directory
cd your-repo

# Install dependencies
npm install
```

## Usage
```bash
To run the project, use the following command:
# Start the development server
npm start

```

## Project Structure
This document outlines the structure of the project, including its APIs, components, CSS files, and pages.
```bash

├── api                    
│   ├── TMDB
│   │   ├── fetchAPIMovies.js          # Fetch movies from TMDB API
│   │   ├── fetchGenres.js             # Fetch genres from TMDB API
│   │   ├── fetchMoviesBasedOnGenres.  # Fetch movies based on genres from TMDB API
│   │   ├── fetchSearchResults.js      # Fetch search results from TMDB API
│   │   └── fetchTrailer.js            # Fetch trailers and cast from TMDB API
├── components             
│   ├── ArchivePage                # Archive page components
│   │   ├── MovieCart.jsx          # Movie cart component
│   │   ├── MovieList.jsx          # Movie list component for archive page
│   │   ├── MoviesButtons.jsx      # Movie buttons component
│   │   ├── MoviesGenres.jsx       # Movies genres component
│   │   └── StarSmaller.jsx        # Star smaller component
│   ├── HomePage                   # Homepage components
│   │   ├── Community             
│   │   │   └── Community.jsx      # Community component
│   │   ├── Devices                
│   │   │   └── Devices.jsx        # Devices component
│   │   ├── Genres                
│   │   │   └── Genres.jsx         # Genres component
│   │   ├── JumboHeader           
│   │   │   └── JumboHeader.jsx    # Jumbo header component
│   │   └── QandA                 
│   │       └── QandA.jsx          # QandA component
│   ├── LikedMovies                # Liked movies components
│   │   ├── LikedMoviesContainer.jsx # Liked movies container component
│   │   ├── LikedMoviesContext.jsx   # Liked movies context component
│   │   └── LikedMoviesList.jsx      # Liked movies list component
│   ├── SinglePage                 # Components for single page views
│   │   ├── MovieCast.jsx          # Movie cast component
│   │   ├── MovieDetailsContainer.jsx # Movie details container component
│   │   ├── MovieOther.jsx         # Movie other details component
│   │   ├── MovieOverview.jsx      # Movie overview component
│   │   ├── MovieReviews.jsx       # Movie reviews component
│   │   ├── MovieTrailer.jsx       # Movie trailer component
│   │   ├── ReviewForm.jsx         # Review form component
│   │   ├── StarRating.jsx         # Star rating component
│   │   └── genres.js              # Genres mapping
│   ├── UIComponant                # Shared UI elements (buttons, modals, etc.)
│   │   ├── Footer                 # Footer components
│   │   │   ├── Footer.jsx         # Footer component
│   │   │   └── SocialLinks.jsx    # Social links component
│   │   ├── Header                 # Header components
│   │   │   ├── Header.jsx         # Header component
│   │   │   └── Search.jsx         # Search component
│   │   └── JumboHeader.jsx        # Jumbo header component
│   └── MyNavLink                  # Custom NavLink component
│       └── MyNavLink.jsx          # MyNavLink component
├── css                    
│   ├── archive.css                # Styles for archive page components
│   ├── categories.css             # Styles for categories components
│   ├── community.css              # Styles for community components
│   ├── devices.css                # Styles for devices components
│   ├── footer.css                 # Styles for footer components
│   ├── genres.css                 # Styles for genres components
│   ├── header.css                 # Styles for header components
│   ├── homePage.css               # Styles for homepage components
│   ├── jumboHeader.css            # Styles for jumbo header components
│   ├── jumboHeaderHomepage.css    # Styles for jumbo header homepage components
│   ├── likedMoviePage.css         # Styles for liked movie page components
│   ├── modal.css                  # Styles for modal components
│   ├── movieButtons.css           # Styles for movie buttons components
│   ├── movieGrid.css              # Styles for movie grid components
│   ├── QandA.css                  # Styles for QandA components
│   ├── searchBar.css              # Styles for search bar components
│   ├── searchPage.css             # Styles for search page components
│   ├── singleMoviePage.css        # Styles for single movie page components
│   ├── starSmaller.css            # Styles for star smaller components
│   └── index.css                  # Global styles
├── pages                  
│   ├── ArchiveMoviePage.jsx       # Archive movie page component
│   ├── GenreArchivePage.jsx       # Genre archive page component
│   ├── GenresPage.jsx             # Genres page component
│   ├── HomePage.jsx               # Homepage component
│   ├── LikedMoviePage.jsx         # Liked movie page component
│   ├── SearchPage.jsx             # Search page component
│   └── SingleMoviesPage.jsx       # Single movie page component
├── public
│   ├── index.html                 # Main HTML file
│   ├── manifest.json              # Web app manifest
│   └── robots.txt                 # Robots.txt file
├── .gitignore                     # Files and directories to ignore in Git
├── package.json                   # Project dependencies and scripts
└── README.md                      # Project documentation

```
## APIs
TMDB API: Used for retrieving movie/series data, including trailers and cast information.

## Contributing

We welcome contributions to the Movie Database Project! To contribute, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right corner of the repository page to create a copy of the repository in your GitHub account.

2. **Clone your fork**: Clone the forked repository to your local machine using the following command:
    ```bash
    git clone https://github.com/odai-dh/StremVibe
    ```

3. **Create a new branch**: Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature-or-bugfix-name
    ```

4. **Make your changes**: Make the necessary changes to the codebase.

5. **Commit your changes**: Commit your changes with a descriptive commit message.
    ```bash
    git commit -m "Description of the changes"
    ```

6. **Push to your fork**: Push your changes to your forked repository.
    ```bash
    git push origin feature-or-bugfix-name
    ```

7. **Create a pull request**: Go to the original repository and create a pull request from your forked repository. Provide a clear description of the changes you made and any relevant information.

8. **Review and merge**: Your pull request will be reviewed by the maintainers. Once approved, it will be merged into the main branch.

Thank you for contributing!

## Coming Soon
We have exciting features planned for future updates, including:

1. **Series Integration**: 
   - Add series from the TMDB API.
   - Browse, search, and view details about series.

2. **Watch Tracking**:
   - Track which movies and series you have watched.
   - Keep a record of your watch history.

3. **Progress Tracking**:
   - Track how much of a series you have watched.
   - Display progress bars for series episodes.

4. **User Profiles**:
   - Create and manage user profiles.
   - Save favorite movies and series.

5. **Enhanced Search**:
   - Improve search functionality with advanced filters.
   - Search by genre, release date, and more.

6. **Community Features**:
   - Add user reviews and ratings.
   - Create and join discussion forums.

Stay tuned for these updates and more!