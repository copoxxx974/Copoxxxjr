const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';}));
document.getElementById('year').textContent=new Date().getFullYear();

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav-link').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}}),{rootMargin:'-35% 0px -55% 0px'});
document.querySelectorAll('main section[id]').forEach(section=>sectionObserver.observe(section));
