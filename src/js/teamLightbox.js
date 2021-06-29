import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import 'basiclightbox/dist/basicLightbox.min.js';
import showConfetti from './plugins/confetti.js';
import olegUrl from '/images/photo/Oleg.jpg';
import sergiiUrl from '/images/photo/Sergii.jpg';
import andriyUrl from '/images/photo/Andriy.jpg';
import zoryanaUrl from '/images/photo/Zoryana.jpg';
import irinaUrl from '/images/photo/Irina.jpg';
import sergeyUrl from '/images/photo/Sergey.jpg';
import stanislavUrl from '/images/photo/Stanislav.jpg';
import alinaUrl from '/images/photo/Alina.jpg';



const markup = `<div class="team-wrapper"><div class="team-card">
    <img src="${olegUrl}" alt="Oleg" class="team-image">
    <p class="team-name">Oleg</p>
    <p class="team-role">Team Lead</p>    
</div>
<div class="team-card">
    <img src="${sergiiUrl}" alt="Sergii" class="team-image">
    <p class="team-name">Sergii</p>
    <p class="team-role">Tech Lead</p>
</div>
<div class="team-card">
    <img src="${andriyUrl}" alt="Andriy" class="team-image">
    <p class="team-name">Andriy</p>
    <p class="team-role">Scrum Master</p>
</div>
<div class="team-card">
    <img src="${zoryanaUrl}" alt="Zoryana" class="team-image">
    <p class="team-name">Zoryana</p>
    <p class="team-role">Developer</p>
</div>
<div class="team-card">
    <img src="${irinaUrl}" alt="Irina" class="team-image">
    <p class="team-name">Irina</p>
    <p class="team-role">Developer</p>
</div>
<div class="team-card">
    <img src="${sergeyUrl}" alt="Sergey" class="team-image">
    <p class="team-name">Sergey</p>
    <p class="team-role">Developer</p>
</div>
<div class="team-card">
    <img src="${stanislavUrl}" alt="Stanislav" class="team-image">
    <p class="team-name">Stanislav</p>
    <p class="team-role">Developer</p>
</div>
<div class="team-card">
    <img src="${alinaUrl}" alt="Alina" class="team-image">
    <p class="team-name">Alina</p>
    <p class="team-role">Developer</p>
</div></div>`;
const container = document.querySelector('.js-team-modal');

container.addEventListener('click', openModal);

const modal = basicLightbox.create(markup);

function openModal(e) {
    modal.show();
    showConfetti();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}