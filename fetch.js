const mainDiv = document.querySelector('.main-div');

const randerHTLM = function (datas) {
  // console.log(datas.data);
  datas.forEach(data => {
    console.log(data.album.title);

    //   const html = `
    //   <div class="col px-2">
    //   <div class="card-homepage text-center">
    //     <div class="row">
    //       <div class="col-12">
    //         <img src="${}" class="card-img-top img-fluid rounded-0" alt="image" />
    //       </div>

    //       <div class="col-12">
    //         <div class="card-body text-left">
    //           <h6 class="card-text">Burning Jazz-rock Fusion</h6>
    //           <p class="card-subtext">
    //             You'll find fiery, modern, groovy, jazz-rock
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //   `
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
    .then(response => response.json())
    .then(data => {
      // console.log(data.data);
      randerHTLM(data.data);
    });
};

getMusicData('eminem');
// getMusicData('metallica');
// getMusicData('behemoth');
