function renderGallery(data) {
  return data
    .map(
      item => `<li
      class="card-container"
      style="background-image: linear-gradient(1deg,rgba(5, 5, 5, 0.6),rgba(5, 5, 5, 0)),
      url(https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg);">
      <button class="like-button">
        <svg class="like-icon" width="22" height="22">
          <use href="./img/icons.svg#heart"></use>
        </svg>
      </button>
      <div class="card-info">
        <h3 class="card-header">banana pancakes</h3>
        <p class="card-description">
          Banana pancakes are a fluffy and sweet breakfast dish made with...
        </p>
        <div class="card-footer">
          <div class="card-rate">
            <span class="card-rate-value">4.5</span>
            <div class="card-rate-stars">
              <svg class="star-icon">
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class="star-icon">
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class="star-icon">
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class="star-icon">
                <use href="./img/icons.svg#star"></use>
              </svg>
              <svg class="star-icon">
                <use href="./img/icons.svg#star"></use>
              </svg>
            </div>
          </div>
          <button class="card-footer-btn">See recipe</button>
        </div>
      </div>
    </li>`
    )
    .join('');
}

function renderPopular(data) {
  return data.map(item => `<li class="car-container">
        <div class="picture">
            <img src="${data.preview}" alt="${data.title}">
        </div>        
        <div class="text-container">
            <div class="popular-name">${data.title}</div>
            <p class="popular-desc desc">${data.description}</p>
        </div>        
    </li>`).join('');
}

function renderOptions(data) {
  return data.map(item => `<!-- Розмітка кнопки категорії -->`).join('');
}

function renderEvents() {
  return data.map(item => `<!-- Розмітка івенту в герої -->`).join('');
}

export { renderGallery, renderPopular, renderOptions, renderEvents };


