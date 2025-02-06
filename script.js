document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");

    // 文章数据
    const posts = [
        { title: "我的第一篇博客", content: "这是我的第一篇博客文章，欢迎阅读！" },
        { title: "我的第二篇博客", content: "今天我学会了如何使用 HTML 和 CSS！" },
        { title: "我的第三篇博客", content: "开始学习 JavaScript 了，真有趣！" }
    ];

    // 动态生成文章
    posts.forEach(post => {
        let article = document.createElement("article");
        article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogContainer.appendChild(article);
    });
});
