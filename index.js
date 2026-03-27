import{a as i,S as d,i as u}from"./assets/vendor-C8Aay8I4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const p="55197171-7badb4f38387852aef8c7c06b",f=i.create({baseURL:"https://pixabay.com/api"});function h(e){const o={key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get("/",{params:o}).then(a=>a.data).catch(a=>console.log(a))}const n={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function m(e){n.gallery.innerHTML=y(e)}function y(e){return e.map(o=>g(o)).join("")}function g(e){return`
    <a href="${e.largeImageURL}" class="photo-link">
      <div class="photo-card">
        <img
          class="photo-card__image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
  
        <ul class="photo-card__stats">
          <li class="photo-card__item">
            <span class="photo-card__label">Likes</span>
            <span class="photo-card__value">${e.likes}</span>
          </li>
          <li class="photo-card__item">
            <span class="photo-card__label">Views</span>
            <span class="photo-card__value">${e.views}</span>
          </li>
          <li class="photo-card__item">
            <span class="photo-card__label">Comments</span>
            <span class="photo-card__value">${e.comments}</span>
          </li>
          <li class="photo-card__item">
            <span class="photo-card__label">Downloads</span>
            <span class="photo-card__value">${e.downloads}</span>
          </li>
        </ul>
      </div>
    </a>
  `}function _(){n.gallery.innerHTML=""}function L(){n.loader.classList.remove("hidden")}function b(){n.loader.classList.add("hidden")}const l={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},v={message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"},q=new d(".gallery a",{captionsData:"alt",captionDelay:250});l.form.addEventListener("submit",function(e){e.preventDefault(),_(),L();const a=new FormData(l.form).get("search-text");h(a).then(s=>S(s)).catch(s=>console.log(s)).finally(()=>b())});function S(e){const o=e.hits;if(o.length===0){u.error(v);return}m(o),q.refresh()}
//# sourceMappingURL=index.js.map
