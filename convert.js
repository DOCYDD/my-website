const fs = require('fs');
const { marked } = require('marked');

// 读取 Markdown 文件内容
fs.readFile('E:/my-website/README.md', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading Markdown file:', err);
      return;
    }
  
    const htmlContent = marked(data);
  
    // 使用 'utf8' 确保文件是以文本形式写入
    fs.writeFile('E:/my-website/output.html', htmlContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing HTML file:', err);
      } else {
        console.log('Markdown 文件成功转换为 HTML!');
      }
    });
  });
  
