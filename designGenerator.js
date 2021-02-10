const designData = [
  {
    name: 'Digestive systems',
    description: 'Distinguish between the monogastric and ruminant digestive systems.',
    Author: '',
    link: './previews/preview1.html',
    Time: '',
  },
  {
    name: 'Producing energy from atoms',
    description: 'Discuss the differences between Fission and Fusion processes.',
    Author: '',
    link: './Previews/preview2.html',
    Time: '',
  },
  {
    name: 'Neurogenesis and Gliogenesis',
    description: 'Define, from the theoretical perspective, what is Neurogenesis and Gliogenesis.',
    Author: '',
    link: './Previews/preview3.html',
    Time: '',
  },
  {
    name: 'Planetary attributes',
    description:
      'Compare Mercury and Jupiter depending on their Mass, Orbital period, Rotation period and confirmed moons.',
    Author: '',
    link: './Previews/preview4.html',
    Time: '',
  },
  {
    name: 'Sensors and actuators',
    description: 'Explain the differences and commonalities of sensors and actuators.',
    Author: '',
    link: './Previews/preview5.html',
    Time: '',
  },
  {
    name: 'Periodic table: types of elements',
    description: 'Classify the elements provided among the following 3 types: metals, non-metals, metalloids.',
    Author: '',
    link: './Previews/preview6.html',
    Time: '',
  },
];

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return '1 year old';
  } else if (calculatedAge == 0) {
    return 'Baby';
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map((food) => `<li>${food}</li>`).join('')}
  </ul>
  `;
}
function designTemplate(design) {
  return `
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 mt-5">
  <div class="card bg-light mb-3" style="18rm">
   <div class="card-body">
   
     <h5 class="card-title">${design.name}</h5>
      <p class="card-text">${design.description} </p>
           <a href="${design.link}" class="btn btn-primary btn-sm"
             >Preview</a
           >
           <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#confirmModal">Select</button>
           

         </div>
       </div>
     </div>
 `;
}

document.getElementById('app').innerHTML = `
  
  ${designData.map(designTemplate).join('')}
  
`;
