# Kasa - apartment rental app

Kasa is an apartment rental platform that allows users to browse and explore available apartment listings. Each apartment listing includes detailed descriptions and photo galleries, offering a clear view of the properties. The app features smooth and intuitive navigation, a responsive design that adapts to various screen sizes, and error handling for invalid URLs.

This app was developed as part of the [OpenClassrooms](https://openclassrooms.com/) curriculum.

## Overview

### Screenshot

![](/src/images/screenshot.png)

### The challenge

Users should be able to:

- View a list of offers with accompanying photos
- View a new page for each offer
- Switch between gallery photos
- Open and close dropdowns to display detailed information
- Navigate using the menu and images
- See an error page for non-existent URL endpoints
- View the optimal layout for the website depending on the user's device's screen size

### Links

- Live Site URL: [See the live page here](https://kasa-app-five.vercel.app/)

## My process

### Built with

- React and React Router
- CSS3 and BEM methodology
- Vercel deployment

### What I learned

- use React and React Router
- initialize the app using `Create React App` (CRA)
- create React components following proper naming conventions, such as
  `DropdownBtn`, `ProductCards`, `PhotoGallerySwitch`, `HomeView`, `AboutView`,`ProductDetailsView`
- use `JSX` syntax to return HTML within React components
- use props and React Hooks, including `useState` and `useParams`
- display data depending on the URL
- work with `JSON` data within a React project
- organize project structure to separate static pages (views) and reusable components
- make the footer stick to the bottom (CSS)

```css
body,
html {
  height: 100%;
}
#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.wrapper {
  flex: 1;
} /* The .wrapper class is applied to the div that contains the main content of the page, excluding the footer. It uses flex: 1 to allow the content to expand and fill available space in a flex container. */
```

- configure a `.gitignore` file
- deploy the front-end app on `Vercel`

### Continued development

- remake in Next.js
- use Sass or Bootstrap
- create a back-end
