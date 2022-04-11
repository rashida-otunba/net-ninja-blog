import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    //blogs is the variable that contains the database object ; see "blogs" line 13; key gives item an individual property
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName]=useState ('mario');

  const handleDelete = (id) => {
    // creates a array to store the new blogs temporarily; this does NOT change the data ; new Array is stored in newBlogs
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(()=>{
    console.log('use effect ran')
    console.log(name)
  }, [name]);// dependency array is passed into useEffectas a second argument before the parenthesis; allows for re render to only load once after the first function; you can also run another dependency. the dependency will allow the useEffect to be invoke ONLY when that function is ran 

  //write code to cycle through the array using the map method to do something with each item
  //key property is utilized by react to keep track of each item in the array
  return (
    <div className="home">
      {/* pass props into the component  */}
      <BlogList blogs={blogs} title="All Blogs"  handleDelete={handleDelete}/>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
      /> */}
    <button onClick={()=>setName('joe')}>Change Name</button>
    <p>{name}</p>
    </div>
  );
};

export default Home;
