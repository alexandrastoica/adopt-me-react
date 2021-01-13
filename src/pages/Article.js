import React from "react";
import ArticleBody from "../components/ArticleBody";
import Sidebar from "../components/Sidebar";
import StickyBreadcrumb from "../components/StickyBreadcrumb";

const Article = () => {
  return (
    <div>
      <StickyBreadcrumb />
      <main className="article-wrapper">
        <Sidebar />
        <ArticleBody />
      </main>
    </div>
  );
};

export default Article;
