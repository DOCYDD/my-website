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
document.addEventListener("DOMContentLoaded", function () {
    const worksContainer = document.getElementById("works-container");

    // 作品数据
    const works = [
        { img: "images/example.jpg", name: "作品 1" },
        { img: "images/example.jpg", name: "作品 2" },
        { img: "images/example.jpg", name: "作品 3" }
    ];

    // 动态生成作品
    works.forEach(work => {
        let workItem = document.createElement("div");
        workItem.classList.add("work-item");
        workItem.innerHTML = `<img src="${work.img}" alt="${work.name}"><p>${work.name}</p>`;
        worksContainer.appendChild(workItem);
    });
});
