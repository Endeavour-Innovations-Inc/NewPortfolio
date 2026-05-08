/* =========================================================================
 *  i18n.js — Russian / English language switcher
 *
 *  Default language: Russian.
 *  The toggle button (.langToggle) shows the OTHER language label,
 *  so while the site is in Russian the button reads "EN", and vice versa.
 *
 *  Usage in markup:
 *      data-i18n="key"          → sets element.textContent
 *      data-i18n-htm="key"      → sets element.innerHTML  (allows nested HTML)
 *      data-i18n-attr="a:k;b:k" → sets attributes a and b to the translations
 *                                  of keys k and k respectively (semicolon-separated)
 * ========================================================================= */
(function () {
	'use strict';

	var translations = {
		ru: {
			'page.title': 'Альберт Липаев — портфолио',

			/* navigation */
			'nav.home':     'Главная',
			'nav.about':    'Обо мне',
			'nav.services': 'Услуги',
			'nav.work':     'Работы',
			'nav.blog':     'Блог',

			/* intro / hero */
			'intro.role':    'Профессиональный инженер-программист',
			'intro.tagline': 'Я — full-stack разработчик с наградами из Уэст-Палм-Бич, штат Флорида. Загляните в мой блог и проекты.',
			'btn.hireMe':    'Нанять меня',

			/* about */
			'about.title':    'Обо мне',
			'about.subtitle': 'Старший инженер-программист',
			'about.heading':  'Разработчик ПО, специализирующийся на масштабируемых корпоративных приложениях, более 10 лет опыта',
			'about.body':     'За годы работы в области программной инженерии я стал экспертом в разработке веб-приложений. Последние несколько лет я сосредоточен на создании масштабируемых и отказоустойчивых систем на Python/Django, C++/C#, Java, Node.js, PHP и AWS. Эффективно работаю как самостоятельно, так и в команде.',
			'about.stat1':    'Довольных клиентов',
			'about.stat2':    'Завершённых проектов',
			'about.stat3':    'Проектов в работе',
			'about.stat4':    'Рабочих часов',

			/* services */
			'services.title':    'Мои услуги',
			'services.subtitle': 'Что у меня получается лучше всего?',
			'service1.title':    'Скорость',
			'service1.body':     'Быстрая загрузка и плавное взаимодействие — мой главный приоритет',
			'service2.title':    'Адаптивность',
			'service2.body':     'Мои макеты работают на любом устройстве: смартфон, планшет, десктоп',
			'service3.title':    'Интуитивность',
			'service3.body':     'Уделяю особое внимание удобному и понятному UX/UI',
			'service4.title':    'Динамика',
			'service4.body':     'Сайты не обязаны быть статичными — мне нравится оживлять страницы',

			/* expertise */
			'expertise.title':    'Экспертиза',
			'expertise.subtitle': 'Навыки и инструменты',
			'expertise.heading':  'Каждый день — новый вызов',
			'expertise.body':     'Мои основные навыки: Python, C++/C#, Java, ASP.NET и PHP.',
			'pie.frontend':       'Frontend',
			'pie.backend':        'Backend',
			'pie.devops':         'DevOps',
			'pie.uiux':           'UI / UX',

			/* portfolio */
			'portfolio.title':    'Портфолио',
			'portfolio.subtitle': 'Мои работы',
			'filter.all':         'ВСЕ',
			'portfolio.proj1':    'Карточная игра bplay',
			'portfolio.proj2':    'Магазин lanature',
			'portfolio.proj3':    'Сайт о музыке',
			'portfolio.proj4':    'Сайт Coconut Creative',
			'portfolio.proj5':    'Сайт Moebelland',
			'portfolio.proj6':    'Шаблон Luther Used Cars',
			'portfolio.proj7':    'SaaS-сайт Seonerd',
			'portfolio.proj8':    'Aussie Tax Refunds',
			'portfolio.proj9':    'Сайт Discover Boating',
			'portfolio.proj10':   'Сайт Snowy Villages',
			'portfolio.proj11':   'Приложение Rested Sleep',
			'portfolio.proj12':   'Garden Puzzle',
			'portfolio.proj13':   'E-commerce движок',

			/* blog */
			'blog.title':    'Новости и блог',
			'blog.subtitle': 'Любимые статьи',
			'blog.article1': 'Как не стать посредственным разработчиком',
			'blog.article2': 'Не будь джуниор-разработчиком',
			'blog.article3': 'Веб-архитектура',
			'blog.article4': 'Как мыслить как программист',

			/* footer */
			'footer.headingHtml': 'Разработчик <span class="text-white">ПО</span>',
			'footer.tagline':     'Открыт к работе — пишите!',
			'footer.copyrightHtml': '&copy; <a href="javascript:void(0);">Альберт Липаев</a> 2024 | Все права защищены',

			/* aria */
			'aria.menu':       'меню',
			'aria.backToTop':  'наверх',
			'aria.langToggle': 'Switch to English'
		},

		en: {
			'page.title': 'Albert Lipaev Portfolio',

			'nav.home':     'Home',
			'nav.about':    'About',
			'nav.services': 'Services',
			'nav.work':     'Work',
			'nav.blog':     'Blog',

			'intro.role':    'Professional Software Engineer',
			'intro.tagline': 'I am a award-winning full-stack developer from West Palm Beach, FL. Check out my blogs and Projects.',
			'btn.hireMe':    'Hire Me',

			'about.title':    'About Me',
			'about.subtitle': 'Senior software engineer',
			'about.heading':  'Software developer focused on scalable, enterprise-level application development, with 10+ Years of Experience',
			'about.body':     'With several years of experience in software engineering, I am an expert in web application development. Over the last few years, my focus has been on building scalable and fault-tolerant systems using Python/Django, C++/C#, Java, Node.js, PHP and AWS. I am an effective collaborator and am performant both as a sole developer as well as in a team.',
			'about.stat1':    'Happy Clients',
			'about.stat2':    'Projects Done',
			'about.stat3':    'Projects In Progress',
			'about.stat4':    'Working Hours',

			'services.title':    'My Services',
			'services.subtitle': 'What Can I Do Best?',
			'service1.title':    'Fast',
			'service1.body':     'Fast load times and lag free interaction, my highest priority',
			'service2.title':    'Responsive',
			'service2.body':     'My layouts will work on any device including Mobile, Tablet, Desktop',
			'service3.title':    'Intuitive',
			'service3.body':     'Strong preference for easy to use, intuitive UX/UI',
			'service4.title':    'Dynamic',
			'service4.body':     "Websites don't have to be static, I love making pages come to life",

			'expertise.title':    'Expertise',
			'expertise.subtitle': 'My Skills & Tools',
			'expertise.heading':  'Every Day is a New Challenge',
			'expertise.body':     'My top skills are Python, C++/C#, Java, ASP.NET and PHP.',
			'pie.frontend':       'Frontend',
			'pie.backend':        'Backend',
			'pie.devops':         'DevOps',
			'pie.uiux':           'UI / UX',

			'portfolio.title':    'Portfolio',
			'portfolio.subtitle': 'My Creative Work',
			'filter.all':         'ALL',
			'portfolio.proj1':    'bplay Card Game App',
			'portfolio.proj2':    'lanature branch Store',
			'portfolio.proj3':    'Music favorite site',
			'portfolio.proj4':    'Coconut favorite site',
			'portfolio.proj5':    'Moebelland website',
			'portfolio.proj6':    'Luther used car template',
			'portfolio.proj7':    'Seonerd SaaS Website',
			'portfolio.proj8':    'Aussietaxrefunds',
			'portfolio.proj9':    'Boating Website Design',
			'portfolio.proj10':   'Snowyvillages Site Design',
			'portfolio.proj11':   'Rested Sleep Better App',
			'portfolio.proj12':   'Garden Puzzle Website',
			'portfolio.proj13':   'E-commerce Engine',

			'blog.title':    'News & Blog',
			'blog.subtitle': 'My favorite articles',
			'blog.article1': 'How to not be a mediocre developer',
			'blog.article2': "Don't be a Junior Developer",
			'blog.article3': 'Web Architecture',
			'blog.article4': 'How to think like a programmer',

			'footer.headingHtml': 'Software <span class="text-white">Developer</span>',
			'footer.tagline':     "I'm available for work, get in touch!",
			'footer.copyrightHtml': '&copy; <a href="javascript:void(0);">AlbertLipaev</a> 2024 | All Rights Reserved',

			'aria.menu':       'menu',
			'aria.backToTop':  'back to top',
			'aria.langToggle': 'Переключить на русский'
		}
	};

	var DEFAULT_LANG = 'ru';
	var currentLang  = DEFAULT_LANG;

	function applyTranslations(lang) {
		var dict = translations[lang];
		if (!dict) { return; }
		currentLang = lang;

		document.documentElement.setAttribute('lang', lang);
		if (dict['page.title']) { document.title = dict['page.title']; }

		// textContent — most cases
		var textNodes = document.querySelectorAll('[data-i18n]');
		for (var i = 0; i < textNodes.length; i++) {
			var el  = textNodes[i];
			var key = el.getAttribute('data-i18n');
			if (dict[key] !== undefined) { el.textContent = dict[key]; }
		}

		// innerHTML — when the source span has nested mark-up we want to keep
		var htmlNodes = document.querySelectorAll('[data-i18n-htm]');
		for (var j = 0; j < htmlNodes.length; j++) {
			var hEl  = htmlNodes[j];
			var hKey = hEl.getAttribute('data-i18n-htm');
			if (dict[hKey] !== undefined) { hEl.innerHTML = dict[hKey]; }
		}

		// arbitrary attributes — "attr:key;attr2:key2"
		var attrNodes = document.querySelectorAll('[data-i18n-attr]');
		for (var k = 0; k < attrNodes.length; k++) {
			var aEl   = attrNodes[k];
			var spec  = aEl.getAttribute('data-i18n-attr') || '';
			var pairs = spec.split(';');
			for (var p = 0; p < pairs.length; p++) {
				var raw = pairs[p].trim();
				if (!raw) { continue; }
				var idx = raw.indexOf(':');
				if (idx < 0) { continue; }
				var attrName = raw.slice(0, idx).trim();
				var aKey     = raw.slice(idx + 1).trim();
				if (attrName && aKey && dict[aKey] !== undefined) {
					aEl.setAttribute(attrName, dict[aKey]);
				}
			}
		}

		// toggle button always shows the OTHER language
		var btn = document.querySelector('.langToggle');
		if (btn) {
			btn.textContent = lang === 'ru' ? 'EN' : 'RU';
			btn.setAttribute('aria-label', dict['aria.langToggle'] || 'Switch language');
		}
	}

	function toggleLang() {
		applyTranslations(currentLang === 'ru' ? 'en' : 'ru');
	}

	function init() {
		applyTranslations(DEFAULT_LANG);

		var btn = document.querySelector('.langToggle');
		if (btn) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				toggleLang();
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

	// expose for debugging
	window.i18n = {
		setLanguage: applyTranslations,
		toggle:      toggleLang,
		get current() { return currentLang; }
	};
})();
