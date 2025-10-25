# React Router Setup for E-Commerce App

This project is a **React Single Page Application (SPA)** built using **React Router v6.4+**.
It provides navigation, authentication-protected routes, and data loading using route loaders.

---

## 🛠️ Technologies Used

- **React** – Frontend library
- **React Router DOM** – For routing
- **JavaScript (ES6+)**
- **PrivateRoute** – Custom authentication route handler
- **fetch() API** – For fetching product data
- **Component-based structure** – Modular design for scalability

---

## 🧭 Project Structure

```
src/
├── Components/
│   ├── Loading.jsx
│   ├── ProductDetails.jsx
│   └── ...
│
├── Pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── ForgotPassword.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFoundPage.jsx
│   ├── Products.jsx
│   ├── Profile.jsx
│   ├── Register.jsx
│   └── Terms.jsx
│
├── Provider/
│   └── PrivateRoute.jsx
│
├── RootLayout/
│   └── RootLayout.jsx
│
└── Routes/
    └── router.jsx
```

---

## 🚦 Routing Overview

### Root Layout

All main pages are nested under the `RootLayout` component.
The layout provides a consistent header, footer, and navigation experience.

### Available Routes

| Path                   | Component        | Loader           | Private | Description                    |
| ---------------------- | ---------------- | ---------------- | ------- | ------------------------------ |
| `/`                    | `Home`           | `/products.json` | ❌      | Home page showing product list |
| `/about`               | `About`          | ❌               | ❌      | About page                     |
| `/products`            | `Products`       | `/products.json` | ❌      | Displays all products          |
| `/product-details/:id` | `ProductDetails` | `/products.json` | ✅      | Product details (protected)    |
| `/contact`             | `Contact`        | ❌               | ❌      | Contact information            |
| `/profile`             | `Profile`        | ❌               | ✅      | User profile (protected)       |
| `/terms`               | `Terms`          | ❌               | ❌      | Terms & Conditions             |
| `/login`               | `Login`          | ❌               | ❌      | User login page                |
| `/registration`        | `Register`       | ❌               | ❌      | New user registration          |
| `/reset-password`      | `ForgotPassword` | ❌               | ❌      | Password reset                 |
| `*`                    | `NotFoundPage`   | ❌               | ❌      | Handles 404 errors             |

---

## 🔐 Protected Routes

The routes `/profile` and `/product-details/:id` are wrapped with `PrivateRoute`,
ensuring that only authenticated users can access them.

Example:

```jsx
{
  path: "/profile",
  element: (
    <PrivateRoute>
      <Profile />
    </PrivateRoute>
  ),
}
```

---

## 🧩 Data Loading

Routes like `/`, `/products`, and `/product-details/:id` use a **loader** function
to fetch product data from `/products.json`.

Example:

```js
loader: () => fetch("/products.json");
```

This allows pre-fetching of data before the page renders, improving performance.

---

## 🌀 Loading State

`hydrateFallbackElement: <Loading />` is used to show a loading spinner
while the route data is being hydrated or fetched.

---

## 🚧 Error Handling

A catch-all route (`path: "*"`) renders `NotFoundPage` for invalid URLs.

---

## ⚙️ Usage

### Run Locally

1. Clone the repository

   ```bash
   git clone <your-repo-url>
   cd your-project-folder
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the project

   ```bash
   npm run dev
   ```

4. Open in browser
   ```
   http://localhost:5173/
   ```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📚 Summary

This router configuration provides:

- Nested routes with a shared layout
- Loader-based data fetching
- Private route protection
- Clean fallback and error handling
- Organized and scalable code structure

---

## 🧑‍💻 Author

Developed by **Osman Zakaria**
For feedback or collaboration, feel free to connect!
