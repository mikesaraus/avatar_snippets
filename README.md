# Avatar Snippets Generator

## Requirements

| Name              | Tested Working Version | Link                                                                             |
| ------------------------ | ---------------------- | -------------------------------------------------------------------------------- |
| JQuery              | Version 5.0.2          | [Visit site](https://jquery.com/)                                    |
| Bootstrap Bundle with Popper   | Version 3.6.0        | [Visit site](https://getbootstrap.com)   |

---

<br/>

## Usage
Create an element with class `gm-avatar` example:
```html
<div class="gm-avatar"></div>
```

then add an attribute `data-content` with an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) value of [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) example content format:
```js
[
    {
        "tooltip" : "Avatar 1",
        "avatar": "https://cdn.freshlms.info/images-v2/avatar-1.jpg",
        "alt": "Alternative Name"
    }
]
```

#### `tooltip`
(Optional) The title that will appear when you hover the image.

#### `avatar` | `img` | `src`
(Required) The image url. Any of these keys is allowed but will only read 1 value.

### `alt`
(Optional) The image alt attribute value.

<hr/>

### Full Example
```html
<!-- In Header -->
<head>
    <!-- Bootstrap 5 Style -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
    />
</head>
<body>
<!-- Creating Avatar Snippet -->
 <div
    class="gm-avatar"
    data-content='[{"tooltip":"Avatar 1", "avatar": "https://cdn.freshlms.info/images-v2/avatar-1.jpg"},{"tooltip": "Avatar 2", "avatar": "https://cdn.freshlms.info/images-v2/avatar-2.jpg"},{"tooltip":"Avatar 3", "avatar": "https://cdn.freshlms.info/images-v2/avatar-3.jpg"},{"tooltip":"Avatar 4", "avatar": "https://cdn.freshlms.info/images-v2/avatar-4.jpg"},{"tooltip":"Avatar 5", "avatar": "https://cdn.freshlms.info/images-v2/avatar-2.jpg"}]'
  ></div>


<!-- In Footer -->
<!-- JQuery 3.6 Script -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
<!-- Bootstrap 5 Script -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

```

View Example in [JSFiddle](https://jsfiddle.net/simplemnm/mhducezt/23/)

<br/>

<hr/>

### ©[GrowModo](https://growmodo.com)
