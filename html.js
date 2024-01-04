const htmlContent = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<!-- Зроблений щоб перевірити обробку post методу -->
<body>
    <form action="/post" method="post">
        <textarea  name="textarea" cols="30" rows="10"></textarea>
        <input type="checkbox" name="checkbox" >
        <input type="submit">
    </form>
    <a href="/">Main</a>
    <a href="/post">Post</a>
    <a href="/options">Options</a>
    <a href="/package.json">JSON</a>
</body>

</html>
`;

export default htmlContent;