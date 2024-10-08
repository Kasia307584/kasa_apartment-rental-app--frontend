# Kasa - apartment rental app

Kasa is an apartment rental platform that allows users to browse and explore available apartment listings. Each apartment listing includes detailed descriptions and photo galleries, offering a clear view of the properties. The app features smooth and intuitive navigation, a responsive design that adapts to various screen sizes, and error handling for invalid URLs.

This app was developed as part of the [OpenClassrooms](https://openclassrooms.com/) curriculum.

## Overview

### Screenshot

![](/assets/screenshot.png)

### The challenge

Users should be able to:

- View a list of offers with accompanying photos
- View a new page for each offer
- Switch between gallery photos
- Open and close dropdowns to display detailed information
- Navigate using the menu and images
- See an error page for non-existent URL endpoints
- View the optimal layout for the website depending on their device's screen size

### Links

- Live Site URL: [See the live page here](https://kasa-app-five.vercel.app/)

## My process

### Built with

- **React.js** for building the user interface
- **React Router** for managing navigation and routing between pages
- **JSON data** for dynamic content within the application
- **CSS3** and **BEM methodology** for styling and maintainable code structure
- **Vercel** for seamless deployment and hosting

### What I learned

- **Use React and Router**: Applied React and React Router for building user interfaces and routing
- **Initialize with CRA**: Initialized the application using `Create React App`
- **Follow Components Naming Convention**: Followed proper naming conventions by naming components as
  `DropdownBtn`, `ProductCards`, `PhotoGallerySwitch`, `HomeView`, `AboutView`, `ProductDetailsView`
- **Utilize `JSX` syntax**: Used `JSX` syntax to return HTML within React components
- **Utilize Props and Hooks**: Utilized props and React Hooks, including `useState` and `useParams`, to manage state and component behavior
- **Display URL-Dependent Data**: Displayed data dynamically based on the URL

```javascript
function ProductDetailsView() {
  // extract productId from the URL using useParams hook
  const { productId } = useParams();
  // find the product in the data that matches the productId from the URL
  const product = data.find((item) => item.id === productId);

  // display URL-dependent data
  return (
    <main className="main">
      <h1 className="title">{product.title}</h1>
      <p className="location">{product.location}</p>
      <div className="dropmenu-wrapper">
        <DropdownBtn
          className="dropmenu__details"
          name="Équipements"
          text={product.equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        />
      </div>
    </main>
  );
}
```

- **Handle JSON Data**: Worked with `JSON` data within a React project
- **Implement Error Page**: Redirected users to an error page for non-existent URL endpoints
- **Configure `.gitignore`**: Set up a `.gitignore` file to manage version control effectively by excluding unnecessary files
- **Organize Project Structure**: Organized project structure to separate static pages (views) and reusable components
- **Deploy to Vercel**: Deployed the front-end application on `Vercel`
- **Implement Sticky Footer**: Used CSS to make the footer stick to the bottom of the page

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

### Continued development

- app remake in Next.js
- use Sass or Bootstrap
- create a backend
- move the router setup from `App.js` to a dedicated file

### Useful resources

- [Naming convention](https://medium.com/@wittydeveloper/react-components-naming-convention-%EF%B8%8F-b50303551505) - This helped me apply consistent naming convention to my React components
- [Sticky footer](https://css-tricks.com/couple-takes-sticky-footer/) - This article explained several ways to make the footer stick to the bottom of the page
