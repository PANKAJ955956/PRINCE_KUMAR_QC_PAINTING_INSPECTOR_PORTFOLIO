const menu=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');
if(menu&&links)menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(card=>card.hidden=!(f==='all'||card.dataset.category===f));}));
const form=document.querySelector('#contact-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Portfolio enquiry — '+d.get('subject'));const body=encodeURIComponent('Name: '+d.get('name')+'\nCompany: '+d.get('company')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'));window.location.href='mailto:princekumar279331@gmail.com?subject='+subject+'&body='+body;});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
