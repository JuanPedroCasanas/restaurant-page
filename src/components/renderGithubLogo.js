export function renderGithubLogo(){
  const logoImg = document.createElement('img');
  const logoText = document.createElement('p');
  const logoDiv = document.createElement('div');
  const logoLink = document.createElement('a');

  logoImg.classList.add('logoImg');
  logoText.classList.add('logoText');
  logoDiv.classList.add('logoDiv');

  logoImg.src = './assets/githubLogo.svg';
  logoText.textContent = 'JPC 2022';
  logoLink.href = 'https://github.com/JuanPedroCasanas/restaurant-page';

  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(logoText);
  logoLink.appendChild(logoDiv);

  return logoLink;
}