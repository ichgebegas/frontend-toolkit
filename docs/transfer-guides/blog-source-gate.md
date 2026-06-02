# Gate переноса Blog

## Источник

- Source package: `@opensite/ui/dist/blog-*.js`.
- Live data and visible content: `https://ui.opensite.dev/blocks/<id>`.
- Локальная реализация: `components/blog/`.

Blog переносится по source и опубликованным данным примера, а не по приблизительному screenshot. Палитра и типографика могут быть адаптированы под Toolkit только после сохранения структуры, контента и поведения исходного блока.

## Состав категории

| Block ID | Главная проверка |
| --- | --- |
| `blog-grid-author-cards` | карточки авторов и три статьи |
| `blog-cards-tagline-cta` | intro, CTA и read-more actions |
| `blog-cards-read-time` | metadata с временем чтения |
| `blog-category-overlay` | category labels поверх media |
| `blog-featured-popular` | featured article и список popular |
| `blog-related-articles` | компактный текстовый список related |
| `blog-tech-insights` | featured author и secondary articles |
| `blog-horizontal-cards` | горизонтальные media cards |
| `blog-filtered-results` | фильтры категорий реально скрывают карточки |
| `blog-masonry-featured` | featured composition и supporting cards |
| `blog-horizontal-timeline` | порядок timeline и date labels |
| `blog-grid-nine-posts` | плотная grid-композиция и CTA |
| `blog-carousel-apple` | prev/next реально прокручивают carousel |

## Порядок переноса

1. Извлечь полный `exampleProps` и media URLs из опубликованного OpenSite block preview до написания HTML.
2. Найти исходный `blog-*.js` и определить, является ли блок статичным или имеет state/scroll/filter поведение.
3. Сначала добавить contract test на список блоков, ключевой copy, media, интерактивные selectors и cache revision.
4. Перенести DOM-композицию, текст, изображения и поведение; не заменять отдельные блоки универсальной шаблонной карточкой.
5. После совпадения смысловой структуры применить Toolkit tokens: grayscale accent, focus ring и typography.
6. Проверить category card и detail preview: desktop и mobile iframe, отсутствие horizontal overflow и битых изображений.
7. Для интерактивных блоков проверить результат действия, а не наличие JavaScript: checkbox filter должен менять выдачу, carousel arrows должны менять scroll position.
8. После любого изменения содержимого iframe повысить `previewRevision`; после изменения shared CSS также обновить query version в подключениях.

## Acceptance для Blog

- В категории отображаются все 13 локальных вариантов.
- Все изображения соответствуют source media; видимые заголовки и CTA не сокращены произвольно.
- `blog-filtered-results` фильтрует карточки по выбранной категории.
- `blog-carousel-apple` прокручивается кнопками и остается управляемым на mobile.
- Detail preview корректно перестраивается в ширине mobile viewer и не получает horizontal overflow.
- Изменение темы оболочки demo не меняет палитру или фон автономного iframe, если этого нет в исходном блоке.
- Производные примеры отражены в `THIRD_PARTY_NOTICES.md`.

## Следующая категория

Для следующего раздела сначала создается manifest из source ID, `exampleProps`, media и behaviors. Затем добавляется падающий contract test, переносится один показательный интерактивный или сложный пример, выполняется сравнение desktop/mobile, и только после этого переносится остальная категория небольшими проверяемыми батчами.
