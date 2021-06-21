# parcel-project-template

## Зависимости

На компьютере должена быть установлена LTS-версия [Node.js](https://nodejs.org/en/).

## Перед началом работы

Один раз на проект установить все зависимости.

```shell
npm ci
```

### Разработка

Запустить режим разработки.

```shell
npm run dev
```

Во вкладке браузера перейти по адресу [http://localhost:1234](http://localhost:1234).

### Деплой

Сборка будет автоматически собирать и деплоить продакшен версию проекта на GitHub Pages, в ветку
`gh-pages`, каждый раз когда обновляется ветка `main`. Например, после прямого пуша или принятого
пул-реквеста. Для этого необходимо в файле `package.json` отредактировать поле `homepage` и скрипт
`build`, заменив `имя_пользователя` и `имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория",
"scripts": {
  "build": "parcel build src/*.html --public-url /имя_репозитория/"
},
```

Через какое-то время живую страницу можно будет посмотреть по адресу указанному в отредактированном
свойстве `homepage`, например
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  `src/sass/main.scss`
- Изображения добавляйте в папку `src/images`, заранее оптимизировав их. Сборщик просто копирует
  используемые изображения чтобы не нагружать систему оптимизацией картинок, так как на слабых
  компьютерах это может занять прилично времени.

  API Реализованы методы :

  Метод 1. трендовые фильмы дня.

  apiService.getTrendingMoviesPage(pageNumber) - Принимает номер страницы и отдает объект {results:
  Array(20), total_pages: 1000, page: 1, total_results: 20000}

Пример объекта - 1 элемента массива

adult: false backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg" genre_ids: Array(3) 0: 28 1: 878 2:
12 length: 3 **proto**: Array(0) id: 399566 media_type: "movie" original_language: "en"
original_title: "Godzilla vs. Kong" overview: "In a time when monsters walk the Earth, humanity’s
fight for its future sets Godzilla and Kong on a collision course that will see the two most
powerful forces of nature on the planet collide in a spectacular battle for the ages." popularity:
1259.819 poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg" release_date: "2021-03-24" title: "Godzilla
vs. Kong" video: false vote_average: 8 vote_count: 6002

Метод 2. Поиск фильма по ID apiService.getMovieById(id)

Пример вывода

adult: false backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg" belongs_to_collection: backdrop_path:
"/oboBn4VYB79uDxnyIri0Nt3U3N2.jpg" id: 535313 name: "Godzilla Collection" poster_path:
"/inNN466SKHNjbGmpfhfsaPQNleS.jpg" **proto**: Object budget: 200000000 genres: Array(3) 0: {id: 28,
name: "Action"} 1: {id: 878, name: "Science Fiction"} 2: {id: 12, name: "Adventure"} length: 3
**proto**: Array(0) homepage: "https://www.godzillavskong.net/" id: 399566 imdb_id: "tt5034838"
original_language: "en" original_title: "Godzilla vs. Kong" overview: "In a time when monsters walk
the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will
see the two most powerful forces of nature on the planet collide in a spectacular battle for the
ages." popularity: 1259.819 poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg" production_companies:
Array(2) 0: {id: 174, logo_path: "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png", name: "Warner Bros. Pictures",
origin_country: "US"} 1: {id: 923, logo_path: "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png", name: "Legendary
Pictures", origin_country: "US"} length: 2 **proto**: Array(0) production_countries: [{…}]
release_date: "2021-03-24" revenue: 438076774 runtime: 113 spoken_languages: [{…}] status:
"Released" tagline: "One Will Fall" title: "Godzilla vs. Kong" video: false vote_average: 8
vote_count: 6004 **proto**: Object

Метод 3. Поиск по ключевому слову

apiService.getMovieByQuery(searchQuery, pageNumber)
