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
<!-- The Avatar Snippet Script -->
<script>
(function () {
  $(document).ready(function () {
      $('<style>.gm-avatar { width: 100%; } .avatar-group .avatar:not(:first-child) { margin-left: -1.2rem; } .avatar-lg { width: 3.5rem; height: 3.5rem; } .avatar { position: relative; display: inline-block; width: 3rem; height: 3rem; } .avatar img { width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover; } .avatar-group img { border: 3px solid #fff; } .avatar-group .avatar:hover { z-index: 2; }</style>').appendTo($('head'))
    document.querySelectorAll('.gm-avatar').forEach((e) => {
      let avatar_base_group = $('<div>', { class: 'avatar-group' })
      let avatar_contents = $(e).attr('data-content')
      avatar_contents = avatar_contents ? JSON.parse(avatar_contents) : []
      if (avatar_contents && Array.isArray(avatar_contents) && avatar_contents.length)
        avatar_contents.forEach((d) => {
          let new_avatar = $('<span>', { class: 'avatar avatar-lg' })
          new_avatar.html('<img alt="' + (d.alt || 'avatar') + '" data-toggle="tooltip" title="' + d.tooltip + '" class="rounded-circle" src="' + (d.avatar || d.img || d.src) + '" />')
          avatar_base_group.append(new_avatar)
        })
      $(e).append(avatar_base_group)
      $(e).attr('data-content', '').removeAttr('data-content')
    })
    $('[data-toggle="tooltip"]').tooltip()
  })
})()
</script>
</body>

```

View Example in [JSFiddle](https://jsfiddle.net/simplemnm/mhducezt/34/)

<br/>

<hr/>

### ©[GrowModo](https://growmodo.com)
