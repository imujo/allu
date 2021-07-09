export const fetchLanguages = (setlanguages) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/languages`)
    .then((res) => res.json())
    .then((data) => setlanguages(data));
};

export const fetchArticles = (setarticles, type) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/articles/${type}`)
    .then((res) => res.json())
    .then((data) => setarticles(data));
};

export const fetchCategories = (setcategories) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/categories`)
    .then((res) => res.json())
    .then((data) => setcategories(data));
};

export const fetchCategory = (setCategory, categoryName) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/category/${categoryName}`)
    .then((res) => res.json())
    .then((data) => setCategory(data))
    .catch(() => console.log());
};

export const fetchArticle = (setarticleData, type, id) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/article/${type}/${id}`)
    .then((res) => res.json())
    .then((data) => setarticleData(data[0]));
};

export const fetchClicks = (setClicks, type, id) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/clicks/${type}/${id}`)
    .then((res) => res.json())
    .then((data) => setClicks(data));
};

export const fetchLikes = (setLikes, type, id) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/likes/${type}/${id}`)
    .then((res) => res.json())
    .then((data) => setLikes(data));
};

export const fetchComments = (setComments, type, id) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/comments/${type}/${id}`)
    .then((res) => res.json())
    .then((data) => setComments(data));
};

export const fetchAuth = (
  action,
  body,
  setErrorMessage,
  setIsAuth,
  setUser
) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/auth/${action}`, requestOptions)
    .then((res) => res.json())
    .then((message) => {
      setErrorMessage(message);
      setUser(message.user);
      setIsAuth(message.isauth);
    })
    .then(() => {
      if (action === "register") {
        fetchAuth("login", body, setErrorMessage, setIsAuth, setUser);
      }
    })
    .catch(() =>
      setErrorMessage({ status: 400, msg: "Couldn't connect to the server" })
    );
};

export const fetchPostClick = (type, id, body) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  fetch(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/addClick/${type}/${id}`,
    requestOptions
  ).catch(() => console.log("Click error"));
};

export const fetchUser = (setUser, setIsAuth) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/auth/user`)
    .then((res) => res.json())
    .then((data) => {
      setUser(data.user);
      setIsAuth(data.isauth);
    })
    .catch(() => console.log("Coludn't connect to the server"));
};

export const fetchLogout = (setIsAuth, setUser) => {
  fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/auth/logout`)
    .then(() => setIsAuth(false))
    .then(() => setUser({}))
    .catch(() => console.log("Coludn't connect to the server"));
};

export const fetchPostLike = (type, articleId, userId, setLiked, liked) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  fetch(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/addLike/${type}/${articleId}/${userId}`,
    requestOptions
  )
    .then(() => setLiked(!liked))
    .catch(() => console.log("Like error"));
};

export const fetchUserArticleLike = (type, articleId, userId, setLiked) => {
  fetch(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/like/${type}/${articleId}/${userId}`
  )
    .then((res) => res.json())
    .then((data) => setLiked(data.liked))
    .catch(() => console.log("Couldn't connect to the server"));
};

export const fetchPostComment = (type, articleId, username, text) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  };

  fetch(
    `${process.env.REACT_APP_SERVER_DOMAIN}/api/addComment/${type}/${articleId}/${username}/${text}`,
    requestOptions
  )
    .then(() => console.log("Commented"))
    .catch(() => console.log("Couldn't connect to the server"));
};

export const onClickLoadMore = (
  filteredArticles,
  loadedArticles,
  setLoadedArticles
) => {
  if (filteredArticles.length > loadedArticles + 9) {
    return setLoadedArticles(loadedArticles + 9);
  }
  setLoadedArticles(
    loadedArticles + (filteredArticles.length - loadedArticles)
  );
};
