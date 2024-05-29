window.addEventListener('load', () => {
    // 使用 Fetch API 读取语录文件
fetch('quotesWithAuthorsAndDates2.txt')
.then(response => response.text())
.then(quotes => {
    const quoteArray = quotes.split('\n'); // 将语录文件内容按行分割成数组

    quoteArray.forEach(quote => {
      const parts = quote.split(' | '); // 使用特定分隔符 " | " 将每行内容分割成部分
      const text = parts[0]; // 获取语录文本
      const author = parts[2]; // 获取作者
      const date = parts[1];
      const div = document.createElement('div'); // 创建一个新的元素
      div.classList.add('quote'); // 为元素添加类名

      // 如果作者不为空
      if (author) {
        div.innerHTML = `
         <a class="article" href="${date || '#'}" target="_blank" >
              
              <div class="date">资源福利</div>
              <div class="title">${text}</div>
              <div class="desc">
		      ${author}
              </div>
            </a>`; // 构建有作者信息的元素内容
      } else {
        div.innerHTML = `
         <a class="article" href="${date || '#'}" target="_blank" >
              
              <div class="date">资源福利</div>
              <div class="title">${text}</div>
              
            </a>`; // 构建没有作者信息时的元素内容
      }

      document.getElementById('quotes').appendChild(div); // 将元素添加到指定容器
    });
  })
.catch(error => console.error('读取语录文件时发生错误:', error)); // 处理错误情况

});
