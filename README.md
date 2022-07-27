# Avatar Snippet Generator

![Avatar Snippets](https://i.ibb.co/1XXG6bR/Avatar-Snippets.png)

## Usage

Create an element with class `gm-avatar`.

Example:

```html
<div class="gm-avatar"></div>
```

Then add an attribute `data-content` with an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) value of [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

Example content format:

```js
[
  {
    avatar: 'https://cdn.freshlms.info/images-v2/avatar-1.jpg',
    tooltip: 'Avatar 1',
    alt: 'Alternative Name',
  }
]
```

#### `avatar` | `img` | `src`

(Required) The image url. Any of these keys is allowed but will only read 1 value.

#### `tooltip`

(Optional) The title that will appear when you hover the image.

### `alt`

(Optional) The image alt attribute value.

<hr/>

### Full Example

```html
<!-- Avatar Snippet -->
<div
  class="gm-avatar"
  data-content='[{"tooltip":"Avatar 1", "avatar": "https://cdn.freshlms.info/images-v2/avatar-1.jpg"},{"tooltip":"Avatar 2", "avatar": "https://cdn.freshlms.info/images-v2/avatar-2.jpg"},{"tooltip":"Avatar 3", "avatar": "https://cdn.freshlms.info/images-v2/avatar-3.jpg"},{"tooltip":"Avatar 4", "avatar": "https://cdn.freshlms.info/images-v2/avatar-4.jpg"},{"tooltip":"Avatar 5", "avatar": "https://cdn.freshlms.info/images-v2/avatar-2.jpg"}]'
></div>

<!-- Avatar Snippet Generator -->
<script src="https://cdn.jsdelivr.net/gh/mikesaraus/avatar_snippets@main/index.min.js"></script>
```

View Example in [JSFiddle](https://jsfiddle.net/simplemnm/mhducezt/)

<hr/>

### ©[GrowModo](https://growmodo.com)
