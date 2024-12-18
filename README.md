### eCommerce Project

Deploy on Netlify: **[eCommerce-Application](https://rss-ecommerce-app-project.netlify.app/)**

This eCommerce application provides a comprehensive shopping experience, leveraging [CommerceTools API](https://docs.commercetools.com/api/) for product data retrieval and management.

The project is a team effort and serves as the final task for [The Rolling Scopes JavaScript / Front-end Course](https://rs.school/courses/javascript-ru).
Contributed by [Liudmila Rodzina](https://github.com/LiudmilaRodzina): Registration, User Profile, Shopping Cart

#### Key Features

**Main Page and Navigation**

- Features links to other pages.
- Ensures smooth navigation through implemented routing and a consistent header layout with user navigation links.

**Login and Registration Pages**

- Allows users to register and log in to the application.
- Includes input validation and error handling for user-friendly experiences.
- Manages user sessions and authentication tokens.

**User Profile Page**

- Displays user’s personal information such as name, date of birth, addresses, etc.
- Provides an interface for users to update their personal details and manage their addresses.

**Catalog Product Page**

- Displays a list of products with essential details such as name, image, description, and prices.
- Offers filtering, sorting, and searching functionality.
- Allows users to add or remove products from the shopping cart.

**Detailed Product Page**

- Shows extensive product information.
- Includes an image slider and a modal window for enlarged product images.
- Allows users to add or remove products from the shopping cart.

**Shopping Cart Page**

- Lists items added to the shopping cart.
- Enables users to modify item quantities, remove items, and clear the cart.
- Automatically recalculates the total cost.

**About Us Page**

- Introduces the development team with bios, photos, and GitHub links.

### Technology Stack

[![Single Page Application](https://img.shields.io/badge/SPA-Single%20Page%20Application-blue)](https://developer.mozilla.org/en-US/docs/Glossary/SPA)
[![CommerceTools](https://img.shields.io/badge/CommerceTools-API-green)](https://docs.commercetools.com/docs)
[![CommerceTools TypeScript SDK](https://img.shields.io/badge/CommerceTools-SDK-blue)](https://docs.commercetools.com/sdk/typescript-sdk)
[![Webpack](https://img.shields.io/badge/Webpack-Bundler-blue)](https://webpack.js.org/guides/getting-started/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-Linting-blue)](https://eslint.org/docs/user-guide/getting-started)
[![Prettier](https://img.shields.io/badge/Prettier-Code%20Formatting-blue)](https://prettier.io/docs/en/index.html)
[![Husky](https://img.shields.io/badge/Husky-Git%20Hooks-green)](https://github.com/typicode/husky#readme)
[![Jest](https://img.shields.io/badge/Jest-Testing-red)](https://jestjs.io/docs/getting-started)
[![SASS](https://img.shields.io/badge/SASS-CSS%20Preprocessor-pink)](https://sass-lang.com/guide/)

### Getting Started

1. Clone the repository to your local machine:

   ```command-line
   git clone https://github.com/LiudmilaRodzina/eCommerce-Application.git
   ```

2. Navigate into the directory where you've cloned the source code:

   ```command-line
   cd eCommerce-Application
   ```

3. Navigate into the branch `develop` and install NPM dependencies:

   ```command-line
   git checkout develop
   npm install
   ```

4. For start application use:

   ```command-line
   npm run start
   ```

5. Open [`https://localhost:8080`](https://localhost:8080) (the application should automatically open in your default browser).

6. To create a production bundle use:

   ```command-line
   npm run prod
   ```

7. Run tests:

   ```command-line
   npm run test
   ```

8. The husky pre-commit hook is automatically launched, which includes scripts `lint` for running ESLint and `format` for Prettier.
