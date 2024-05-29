window.addEventListener('load', () => {
    // 使用 Fetch API 读取语录文件
fetch('quotesWithAuthorsAndDates2.txt')
.then(response => response.text())
.then(quotes => {
    const quoteArray = quotes.split('\n'); // 将语录文件内容按行分割成数组

    quoteArray.forEach(quote => {
      const parts = quote.split(' | '); // 使用特定分隔符 " | " 将每行内容分割成部分
      const text = parts[0]; // 获取语录文本
      const author = parts[3]; // 获取作者
      const date = parts[2];
      const div = document.createElement('div'); // 创建一个新的元素
      div.classList.add('quote'); // 为元素添加类名

      // 如果作者不为空
      if (author) {
        div.innerHTML = `
         <a class="article" href="https://caiyun.139.com/m/i?105CfJsHH2CFC" target="_blank" >
              
              <div class="date">${date}</div>
              <div class="title">${text}</div>
              <div class="desc">
		      ${author || '点击跳转资源'}
              </div>
            </a>`; // 构建有作者信息的元素内容
      } else {
        div.innerHTML = `
         <a class="article" href="https://caiyun.139.com/m/i?105CfJsHH2CFC" target="_blank" >
              
              <div class="date">#手机壁纸</div>
              <div class="title">壁纸湖网首页壁纸打包</div>
              <div class="desc">
		      数量：450余张<br>
		      备注：文件夹版和压缩包版的图是一样的
              </div>
            </a>`; // 构建没有作者信息时的元素内容
      }

      document.getElementById('quotes').appendChild(div); // 将元素添加到指定容器
    });
  })
.catch(error => console.error('读取语录文件时发生错误:', error)); // 处理错误情况

});
