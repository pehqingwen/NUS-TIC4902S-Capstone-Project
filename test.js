let postsData = "";
const postsContainer = document.querySelector(".posts-container");
const apiUrl = sharedData.productData;
fetch(apiUrl).then(async (response) => {
    postsData = await response.json();
    postsData.map((post) => createPost(post));
});
const createPost = (postData) => {
    const { name, imagePath, price } = postData;
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = ` 
<a class="post-preview" href="#" target="_blank"> 
<img class="post-image" src="${imagePath}"> 
</a> 
<div class="post-content"> 
<p class="post-title">${name}</p> 
<div class="post-tags"> 
${price} 
</div> 
</div> 
`;
    postsContainer.append(post);
};

const search = document.getElementById("search");
let debounceTimer;
const debounce = (callback, time) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, time);
};
search.addEventListener(
    "input",
    (event) => {
        const query = event.target.value;
        debounce(() => handleSearchPosts(query), 500);
    },
    false
);

let searchResults = [...postsData].filter(
    (post) =>
        post.categories.some((category) => category.toLowerCase().includes(searchQuery)) ||
        post.title.toLowerCase().includes(query)
);

const searchDisplay = document.querySelector(".search-display");
if (searchResults.length == 0) {
    searchDisplay.innerHTML = "No results found"
} else if (searchResults.length == 1) {
    searchDisplay.innerHTML = `1 result found for your query: ${query}`
} else {
    searchDisplay.innerHTML = `${searchResults.length} results found for your query: ${query}`
}

postsContainer.innerHTML = "";
searchResults.map((post) => createPost(post));

const resetPosts = () => {
    searchDisplay.innerHTML = ""
    postsContainer.innerHTML = "";
    postsData.map((post) => createPost(post));
};
const handleSearchPosts = (query) => {
    const searchQuery = query.trim().toLowerCase();

    if (searchQuery.length <= 1) {
        resetPosts()
        return
    }

    let searchResults = [...postsData].filter(
        (post) =>
            post.categories.some((category) => category.toLowerCase().includes(searchQuery)) ||
            post.title.toLowerCase().includes(searchQuery)
    );

    if (searchResults.length == 0) {
        searchDisplay.innerHTML = "No results found"
    } else if (searchResults.length == 1) {
        searchDisplay.innerHTML = `1 result found for your query: ${query}`
    } else {
        searchDisplay.innerHTML = `${searchResults.length} results found for your query: ${query}`
    }
    postsContainer.innerHTML = "";
    searchResults.map((post) => createPost(post));
};