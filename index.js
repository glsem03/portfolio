document.getElementById('en').onclick = () => {
    document.getElementById('skillsTitle').innerHTML = "SKILLS";
    document.getElementById('navAbout').innerHTML = "ABOUT ME";
    document.getElementById('navSkills').innerHTML = "SKILLS";
    document.getElementById('navContacts').innerHTML = "CONTACTS";
    document.querySelector('.intro__title').innerHTML = "GLEB SEMENOV";
    document.querySelector('.intro__link').innerHTML = "DOWNLOAD CV";
    document.getElementById('aboutTitle').innerHTML = "ABOUT ME";
    document.querySelector('.about-section__subtitle').innerHTML = "My name is Gleb, I am an junior web developer from Novosibirsk.";
    document.getElementById('contactsTitle').innerHTML = "CONTACTS";
    document.querySelector('.contacts-section__subtitle').innerHTML = "If you have any questions or suggestions about cooperation, you can contact me in one of the messengers or by e-mail.";
    document.querySelector('.contacts-section__time').innerHTML = "Time zone: (UTC/GMT +07:00)";
    document.querySelector('.footer__content').innerHTML = "Copyright © Semenov Gleb 2022"
}

document.getElementById('ru').onclick = () => {
    document.getElementById('navAbout').innerHTML = "ОБО МНЕ";
    document.getElementById('navSkills').innerHTML = "НАВЫКИ";
    document.getElementById('navContacts').innerHTML = "КОНТАКТЫ";
    document.querySelector('.intro__title').innerHTML = "СЕМЕНОВ ГЛЕБ";
    document.querySelector('.intro__link').innerHTML = "СКАЧАТЬ РЕЗЮМЕ";
    document.getElementById('aboutTitle').innerHTML = "ОБО МНЕ";
    document.querySelector('.about-section__subtitle').innerHTML = "Меня зовут Глеб, я&nbsp;начинающий web разработчик из&nbsp;города Новосибирск."
    document.getElementById('skillsTitle').innerHtml = "НАВЫКИ";
    document.getElementById('contactsTitle').innerHTML = "КОНТАКТЫ";
    document.querySelector('.contacts-section__subtitle').innerHTML = "Если у&nbsp;вас остались вопросы или есть предложения о&nbsp;сотрудничестве, можете связаться со&nbsp;мной в&nbsp;одном из&nbsp;мессенджеров или по&nbsp;электронной почте.";
    document.querySelector('.contacts-section__time').innerHTML = "Часовой пояс: (UTC/GMT +07:00)";
    document.querySelector('.footer__content').innerHTML = "Copyright © Семенов Глеб 2022"
}