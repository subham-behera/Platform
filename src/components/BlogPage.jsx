import React, { useState } from "react";
import SearchBar from "./BlogPage/SearchBar";
import ArticleCard from "./BlogPage/ArticleCard";
import Sidebar from "./BlogPage/Sidebar";
import Pagination from "./BlogPage/Pagination";

const BlogPage = () => {
  // Sample data for articles
  const articles = [
    {
      id: 1,
      title: "Understanding React Hooks",
      summary: "A deep dive into the world of React Hooks and how they can simplify your code.",
      author: "Jane Doe",
      date: "2024-07-01",
      image: "https://via.placeholder.com/150",
      category: "React",
      tags: ["React", "JavaScript", "Web Development"],
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      summary: "Learn how to use Tailwind CSS to create beautiful and responsive designs.",
      author: "John Smith",
      date: "2024-06-25",
      image: "https://via.placeholder.com/150",
      category: "CSS",
      tags: ["CSS", "Tailwind", "Design"],
    },
    // Add more articles as needed
  ];

  const categories = ["React", "JavaScript", "CSS", "HTML", "Web Development"];
  const tags = ["React", "JavaScript", "CSS", "HTML", "Web Development", "Tailwind"];

  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter articles based on the search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-10">Blog/News</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
            <Pagination />
          </div>
          <Sidebar categories={categories} tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
