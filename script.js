const Sidebar = document.querySelector('#sidebar');
const toggleSidebar = () => {
  Sidebar.classList.toggle('show');
}

const navList = document.querySelectorAll(".nav-list li, #sidebar li");
navList.forEach((item, i) => {
  if (item.hasAttribute('id')) {
    item.addEventListener('click', () => {      
      const id = item.getAttribute('id');      
      const targetSections = document.querySelectorAll(`#${id}`);

      const allSections = document.querySelectorAll('section, article, #sidebar ul');
      allSections.forEach(section => {
        section.style.display = 'none';
      });

      targetSections.forEach(item => {
        item.style.display = 'block';
      });
    });
  }
});
