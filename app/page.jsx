'use client'

import { useEffect, useState } from "react";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import { Spinner } from "@nextui-org/react";
import Categories from "./components/Categories";
import Sorting from "./components/Sorting"

export default function Home() {
  const [data, setData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState('');


  useEffect(() => {
    fetch("https://greet.bg/wp-json/wc/store/products?page=1")
      .then((response) => response.json())
      .then((result) => {
        setData(result);

        const allCategories = [];
        result.forEach((product) => {
          if (product.categories && product.categories.length > 0) {
            product.categories.forEach((category) => {
              if (!allCategories.some((cat) => cat.id === category.id)) {
                allCategories.push(category);
              }
            });
          }
        });
        setCategories(allCategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  let displayedData = data ? [...data] : [];

if (selectedCategory) {
    displayedData = displayedData.filter(item =>
      item.categories.some(category => String(category.id) === String(selectedCategory))
    );
}


if (sortOrder === "$.0") {
    displayedData = [...displayedData.sort((a, b) => parseFloat(a.prices.price) - parseFloat(b.prices.price))];
} else if (sortOrder === "$.1") {
    displayedData = [...displayedData.sort((a, b) => parseFloat(b.prices.price) - parseFloat(a.prices.price))];
}else if(sortOrder === "$.2"){
  displayedData.sort((a, b) => a.name.localeCompare(b.name));
}else if(sortOrder === "$.3"){
  displayedData.sort((a, b) => b.name.localeCompare(a.name));
}

  return (
    <main className="max-w-[1440px] m-auto min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow flex flex-col items-center justify-center">
      {!data ? (
        <Spinner className="m-auto" />
      ) : (
        <>
          <div className="flex flex-col md:flex-row space-around items-center w-full">
            {categories.length > 0 && (
              <Categories
                categories={categories}
                onCategoryChange={(categoryId) => {
                  setSelectedCategory(categoryId);
                }}
              />
            )}

            <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4 my-4">
              <Sorting
                onSortChange={(sortingValue) => {
                  setSortOrder(sortingValue);
                }}
              />
            </div>
          </div>

          <section className="grid grid-cols-1 px-20 gap-10 mt-6 lg:grid-cols-4 md:grid md:grid-cols-2 md:px-10 ">
            {displayedData.map((item) => (
              <Post key={item.id} name={item.name} price={item.prices.price} imageUrl={item.images[0].src} description={item.short_description} categories={item.categories} />
            ))}
          </section>
        </>
      )}
    </div>
  </main>
  );
}
