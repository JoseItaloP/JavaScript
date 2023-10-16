const url = "https://jsonplaceholder.typicode.com/posts"

const LoadingElement = document.querySelector("#loading")
const PostContainer = document.querySelector("#posts-containr")

const PostPage = document.querySelector("#post")
const PostsContainer = document.querySelector("#post-container")
const CommentsContainer = document.querySelector("#commentsContaier")

//Get Id for URL

const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

// Get All Posts
async function getAllPosts(){
    const response = await fetch(url)
    const data = await response.json()
    LoadingElement.classList.add("hide")
    data.map((Post)=>{
        const div = document.createElement("div")
        const title= document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = Post.title;
        body.innerHTML = Post.body;
        link.innerHTML = "Ler"
        link.setAttribute("href", `/post.html?id=${Post.id}`)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        PostContainer.appendChild(div)
    })
}

//Get Individual Post
async function getPost(id){
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()
    const dataComment = await responseComments.json()

    LoadingElement.classList.add("hide")
    PostPage.classList.remove("hide")
}

if(!postId){
    getAllPosts();
}else{
    getPost(postId);
 }