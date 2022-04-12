import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  //blogs is the variable that contains the database object ; see "blogs" line 13; key gives item an individual property

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    // creates a array to store the new blogs temporarily; this does NOT change the data ; new Array is stored in newBlogs
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []); // dependency array is passed into useEffectas a second argument before the parenthesis; allows for re render to only load once after the first function; you can also run another dependency. the dependency will allow the useEffect to be invoke ONLY when that function is ran

  //use effect is a good place to fetch data; the [] allows it to run on first render 

  //write code to cycle through the array using the map method to do something with each item
  //key property is utilized by react to keep track of each item in the array
  return (
    <div className="home">
      {/* pass props into the component  */}
      {/* conditional templating in react: logical and evaluates the left first then the right; if left is false it does not continue; if left is true it moves on to read the logic  */}
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      /> */}
      <button onClick={() => setName("joe")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
