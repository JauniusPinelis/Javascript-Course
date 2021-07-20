function getPosts(){
    let userId = parseInt(document.querySelector("#user-id-input").value);

    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(function (response) {
        // handle success
        console.log(response);
        let data = response.data;
        let posts = [];
        data.forEach(post => {
            posts.push(`id: ${post.id} title: ${post.title} body: ${post.body}`)
        });

        let postsHtml = "";
        posts.forEach(post => {
            postsHtml +=  ` <li class="list-group-item">${post}</li>`
        });

        document.querySelector("ul").innerHTML = postsHtml;
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

    console.log("GetPosts works");
}