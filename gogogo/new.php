<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $content = $_POST['content']. ' | '. date('y.m.d H:i');
    $currentContent = file_get_contents('quotesWithAuthorsAndDates2.txt');
    file_put_contents('quotesWithAuthorsAndDates2.txt', $content. "\n". $currentContent);
}
?>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
<head>
    
    
    
  <style>
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    textarea {
      background-color: #ebf2ed;
    width: 100%;
    border: 0px;
    height: 3300px;
    font-size: 2rem;
    color: #124a41;
    }

    input[type="submit"] {
     position: fixed; /* 将按钮固定 */
  bottom: 0px; /* 与底部的距离 */
  left: 50%; /* 水平居中 */
  transform: translateX(-50%); /* 使按钮水平居中 */
  height: 4rem;
  width: 100%;font-size: 2rem;background-color: #d0dada;color: #124a41;
    border:0px}
  
    
  </style>
</head>
<body>
  <form method="post">
    <textarea name="content"></textarea>
    <input type="submit" value="提交">
  </form>
</body>

</html>