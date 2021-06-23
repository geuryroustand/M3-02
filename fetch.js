const mainDiv = document.querySelector('.main-div');
const btnCount = document.querySelector('.btn-count');
const btnAll = document.querySelector('.btn-all');

const randerHTLM = function (datas) {
  // console.log(datas.data);
  datas.forEach((data, i) => {
    btnCount.addEventListener('click', () => {
      // console.log(i);
    });

    const html = `
      <div class="col px-2">
      <div class="card-homepage text-center">
        <div class="row">
          <div class="col-12">
            <img src="${data.album.cover}" class="card-img-top img-fluid rounded-0" alt="image" />
          </div>
          <div class="col-12">
            <div class="card-body text-left">
              <h6 class="card-text">${data.title_short}</h6>
              <p class="card-subtext">
                ${data.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;

    mainDiv.insertAdjacentHTML('afterbegin', html);
  });
};

const getMusicData = function (category) {
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${category}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'cae4c3f69bmshbb6d60562741b4dp1b341bjsnd376dc66bb74',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  })
    .then(response => {
      // console.log(response);

      if (!response.ok)
        throw new Error(`Information not found ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data.data);
      randerHTLM(data.data);

      btnAll.addEventListener('click', e => {});
    })
    .catch(err => {
      console.error('something when wrong');
    });
};

getMusicData('eminem');
// getMusicData('metallica');
// getMusicData('behemoth');
