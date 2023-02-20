import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");

  const RenderCards = ({ data, title }) => {
    // Define a function component that takes in two props: data and title
    if (data?.length > 0) {
      // Check if the data prop has a length greater than 0. The ? is an optional chaining operator that ensures the length property will not throw an error if data is null or undefined.
      return data.map((post) => {
        // If data has at least one element, map over each element in the array using the map() method
        return <Card key={post._id} {...post} />; // For each element, render a Card component with the properties of the post object spread onto the component using the spread syntax. Set the key prop to the _id property of the post object.
      });
    }
    return <h2 className="mt-5 font-bold text-[#6449ff] text-xl">{title}</h2>;
  };

  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center"> // corrected spelling of 'items'
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Results for
                <span className="text-[#222328]"> {searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gap-3">
              {searchText ? (
                <RenderCards
                  data={[]}
                  title="No search results found"
                />
              ) : (
                <RenderCards data={[]} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;