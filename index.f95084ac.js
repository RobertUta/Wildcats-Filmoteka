var e=document.getElementById("myModal"),t=document.getElementById("openModalBtn");document.getElementsByClassName("close")[0];t.onclick=function(){e.style.display="flex",o(),n()},window.onclick=function(t){t.target==e&&(e.style.display="none")};const n=async()=>{try{const e=await fetch(apiMovie.url,{method:apiMovie.method,headers:apiMovie.headers});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json(),n=document.getElementById("trendingMoviesList");t.results.forEach((e=>{const t=document.createElement("li");t.textContent=e.title,n.appendChild(t)}))}catch(e){console.error("There was a problem displaying trending movies:",e)}},o=async()=>{try{const e=await getMovieGenres(),t=document.getElementById("movieGenresList");e.forEach((e=>{const n=document.createElement("li");n.textContent=e.name,t.appendChild(n)}))}catch(e){console.error("There was a problem displaying movie genres:",e)}};
//# sourceMappingURL=index.f95084ac.js.map
