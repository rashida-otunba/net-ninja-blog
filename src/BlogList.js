const BlogList = ({blogs, title, handleDelete}) => {
  // invoke handleDeletefunction as a props from the Home page 
  // const { } = props;

  return (
    <div className="blog-list">
      <h2>{title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* button for each blog output; blog.id is passed in as an argument to this function to remove the blog entry by the db id #  */}
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
