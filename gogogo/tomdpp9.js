window.addEventListener('load', () => {
    // 使用 Fetch API 读取语录文件
    fetch('./gogogo/quotesWithAuthorsAndDates2.txt')
 .then(response => response.text())
 .then(quotes => {
        const parts = quotes.split('\n')[0].split(' | '); 
        const text = parts[0]; 
        const author = parts[2]; 
        const link = parts[1];
        const a = document.createElement('a'); // 创建新元素为 a
        a.classList.add('article'); // 为 a 添加样式类 "article"
        a.target = "_blank"; // 设置 a 的属性 target="_blank"
        a.href = `${link}`; // 设置 a 的链接为 ${link}

        // 如果作者不为空
        if (author) {
            a.innerHTML = `
                  <div class="date">资源福利</div>
                  <div class="title">${text}</div>
                  <div class="desc">
                  ${author}
                  </div>
                `; 
        } else {
            a.innerHTML = `
                  <div class="date">资源福利</div>
                  <div class="title">${text}</div>
                `; 
        }

        document.getElementById('quotes').appendChild(a); 
    })
.catch(error => console.error('读取语录文件时发生错误:', error)); 
});