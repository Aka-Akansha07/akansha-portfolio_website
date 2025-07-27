
    const skills = document.querySelectorAll('.skill');
    const descriptionBox = document.getElementById('skill-description');

    skills.forEach(skill => {
      skill.addEventListener('mouseover', () => {
        const desc = skill.getAttribute('data-description');
        descriptionBox.textContent = desc;
        descriptionBox.classList.add('show');
        skill.style.backgroundColor = '#a5b4fc';
      });

      skill.addEventListener('mouseout', () => {
        descriptionBox.textContent = '';
        descriptionBox.classList.remove('show');
        skill.style.backgroundColor = '#e0f2fe';
      });
    });
  
