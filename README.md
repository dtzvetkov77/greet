# Greet

## Introduction

This is a React-based application powered by Next.js, dynamically fetching product data from the `https://greet.bg/wp-json/wc/store/products` endpoint. It provides users the ability to filter products by category and sort them in various ways.

## Why Next.js?

We've chosen to utilize Next.js for this application due to its performance advantages:

- **Server-Side Rendering**: Next.js provides out-of-the-box server-side rendering which improves the performance of our app especially for the initial page load.
- **Optimized Build & Code Splitting**: This ensures that only the necessary code is loaded for any given page, enhancing the speed and user experience.
- **SEO Benefits**: With server-rendered pages, our content is more discoverable by search engines.

## Features

- **Dynamic Data Fetching**: Retrieves product data from an external API and displays them.
- **Category Filtering**: Allows users to filter displayed products based on categories.
- **Product Sorting**: Offers multiple sorting options, including price (ascending/descending) and product name (alphabetically and in reverse).
- **Responsive Design**: Adapts layout for both desktop and mobile views.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm

### Installation and Setup

1. Clone the repository to your local machine:
2. Install the required packages:

npm install

3. Run the application:

npm run dev

This will launch the application and you can access it at `http://localhost:3000`.

## Application Structure

- **Navbar**: A top navigation bar for the application.
- **Post**: A component to display individual product details - name, price, image, and short description.
- **Categories**: An interactive component allowing users to select and filter products by category.
- **Sorting**: A dropdown component that lets users choose how they'd like to sort the displayed products.

## API Interaction

The app interacts mainly with the `https://greet.bg/wp-json/wc/store/products` endpoint. By default, it fetches the first page of products.



