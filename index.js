import{a as f,S as g,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="54229913-72a9171c24bd99d1654402387",h="https://pixabay.com/api/";async function b(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(h,{params:r})).data}const u=document.querySelector(".gallery"),p=document.querySelector(".loader");let L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:n,comments:m,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img 
              class="gallery-image" 
              src="${o}" 
              alt="${e}" 
            />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span>${t}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span>${n}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span>${m}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span>${d}</span>
            </p>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",r),L.refresh()}function w(){u.innerHTML=""}function q(){p.classList.remove("is-hidden")}function l(){p.classList.add("is-hidden")}const c=document.querySelector(".form"),v=c.querySelector('input[name="search-text"]');c.addEventListener("submit",P);async function P(s){s.preventDefault();const r=v.value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}w(),q();try{const o=await b(r);if(l(),o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(o.hits),c.reset()}catch(o){l(),a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.error("Error fetching images:",o)}}
//# sourceMappingURL=index.js.map
