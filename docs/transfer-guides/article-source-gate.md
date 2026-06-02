# Gate переноса Article и следующих разделов

## Что показал Article

Для точного переноса недостаточно посмотреть один screenshot или только `registry.js`. Файл source фиксирует API и структуру, а опубликованный live preview на `ui.opensite.dev/blocks/<id>` содержит фактический copy, CTA, изображения и интерактивные slots, которые тоже входят в переносимый пример.

## Обязательный порядок

1. Открыть конкретный блок OpenSite и соответствующий source-компонент.
2. Снять полный `innerText` iframe до конца страницы: заголовки, абзацы, списки, цитаты, CTA и metadata нельзя сокращать или дописывать по смыслу.
3. Зафиксировать слоты компонента: byline, sticky sidebar, mobile replacement, TOC, CTA, bottom share и floating share rail.
4. Извлечь semantic SVG icons из live DOM или source icon component. Текстовые замены вроде `X`, `in`, `Link`, `+` и ASCII-стрелок не использовать.
5. Сверить pattern не только по имени: нужны фон поверхности, effective opacity, computed line color и отсутствие изменения внутри iframe при переключении темы витрины.
6. Добавить contract tests на обязательный copy, SVG controls, sticky/expanded states и breakpoint до визуальной полировки.
7. Проверить через agent-browser desktop, tablet и mobile, включая scroll для sticky/TOC и click для раскрывающихся элементов.
8. После изменения HTML/CSS/JS повысить `previewRevision`, а после изменения shared styles также обновить query-версию на подключении общей CSS-базы.
9. Для sticky-вариантов прокрутить именно документ внутри iframe и сверить позицию sidebar после scroll; наличие `position: sticky` в CSS не подтверждает работу, если родитель получил `overflow: hidden` или `overflow: clip`.

## Критерий приемки категории

- В каждой карточке присутствует полный live content OpenSite, кроме осознанной смены бренда и цветовых tokens Toolkit.
- Все значимые controls используют SVG и имеют `hover`, `active`, `focus-visible`.
- Sticky и раскрывающиеся блоки проверены в действии, а не только на первом кадре.
- Отдельный пример открывается напрямую и совпадает с detail preview.
- Для перенесенного или производного OpenSite-кода обновлен `THIRD_PARTY_NOTICES.md`.
