const rockyPlanetsBtn = document.getElementById('rocky-planets');
const gasGiantsBtn = document.getElementById('gas-giants');
const allPlanetsBtn = document.getElementById('all-planets');

const rockyPlanets = ['mercury', 'venus', 'earth', 'mars'];
const gasGiants = ['jupiter', 'saturn', 'uranus', 'neptune'];
const moon = document.querySelector('.moon');
const pluto = document.querySelector('.pluto');

const displayAllPlanets = () => {
  rockyPlanets.forEach(rockPlanet => {
    const rockies = document.querySelectorAll(`.${rockPlanet}`);
    rockies.forEach(rocky => rocky.style.display = 'block');
  });

  gasGiants.forEach(gasGiant => {
    const giants = document.querySelectorAll(`.${gasGiant}`);
    giants.forEach(giant => giant.style.display = 'block');
  });

  moon.style.display = 'block';
  pluto.style.display = 'block';

  allPlanetsBtn.classList.add('active');
  rockyPlanetsBtn.classList.remove('active')
  gasGiantsBtn.classList.remove('active')
}

rockyPlanetsBtn.onclick = () => {
  pluto.style.display = 'none';

  rockyPlanets.forEach(rockPlanet => {
    const rockies = document.querySelectorAll(`.${rockPlanet}`);
    rockies.forEach(rocky => rocky.style.display = 'block');
  });

  rockyPlanetsBtn.classList.add('active')
  gasGiantsBtn.classList.remove('active')
  allPlanetsBtn.classList.remove('active');

  gasGiants.forEach(gasGiant => {
    const giants = document.querySelectorAll(`.${gasGiant}`);
    giants.forEach(giant => giant.style.display = 'none');
  });
};

gasGiantsBtn.onclick = () => {
  moon.style.display = 'none';
  pluto.style.display = 'none';

  gasGiants.forEach((gasGiant) => {
    const giants = document.querySelectorAll(`.${gasGiant}`);
    giants.forEach(giant => giant.style.display = 'block');
  });

  gasGiantsBtn.classList.add('active');
  rockyPlanetsBtn.classList.remove('active');
  allPlanetsBtn.classList.remove('active');

  rockyPlanets.forEach((rockPlanet) => {
    const rockies = document.querySelectorAll(`.${rockPlanet}`);
    rockies.forEach(rocky => rocky.style.display = 'none');
  });
};

allPlanetsBtn.onclick = () => displayAllPlanets();