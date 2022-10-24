## Pokedex built in NEXT.js on top of ReactJS

Main [Features] :

1. [NextJS] for effective [SSR], [page-prerendering], [pre-fetched] data from server
2. [react-query] for effective [caching] of Network call data.
3. [SCSS] implementation
4. [Unit] test cases
5. [SnapShot] testing
6. [Typescript] friendly


## Project Structure

    /styles
    /pages
        /homepage
            /pageNumber
        /Detailpage
            /Pokemon Id
    /app
        /Views
            /DetailPage
            /listingPage
        /Utils
        /React-query
            /QueryFns
            /QueryKeys
        /Constants
        /__testcase__
            /DetailPageTests
                /__snapshots
            /ListingPageTests
                /__snapshots

## Run Project
    npm run dev

## Run Tests
    npm test