# Avatar Snippet Generator

---

## Usage
Create an element with class `gm-avatar` example:
```html
<div class="gm-avatar"></div>
```

Then add an attribute `data-content` with an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) value of [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

Example content format:
```js
[
    {
        "avatar": "https://cdn.freshlms.info/images-v2/avatar-1.jpg",
        "tooltip" : "Avatar 1",
        "alt": "Alternative Name"
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
    data-content='[{"tooltip":"Avatar 1", "avatar": "https://cdn.freshlms.info/images-v2/avatar-1.jpg"},{"tooltip": "Avatar 2", "avatar": "https://cdn.freshlms.info/images-v2/avatar-2.jpg"},{"tooltip":"Avatar 3", "avatar": "https://cdn.freshlms.info/images-v2/avatar-3.jpg"},{"tooltip":"Avatar 4", "avatar": "https://cdn.freshlms.info/images-v2/avatar-4.jpg"},{"tooltip":"Avatar 5", "avatar": "https://cdn.freshlms.info/images-v2/avatar-2.jpg"}]'
  ></div>

<!-- Avatar Snippet Generator -->
<script type="text/javascript">
(function() { document.addEventListener("DOMContentLoaded", () => { const css = 'LmdtLWF2YXRhciB7IHdpZHRoOiAxMDAlOyB9IC5nbS1hdmF0YXIgLmF2YXRhci1ncm91cCAuYXZhdGFyOm5vdCg6Zmlyc3QtY2hpbGQpIHsgbWFyZ2luLWxlZnQ6IC0xLjJyZW07IH0gLmdtLWF2YXRhciAuYXZhdGFyLWxnIHsgd2lkdGg6IDMuNXJlbTsgaGVpZ2h0OiAzLjVyZW07IH0gLmdtLWF2YXRhciAuYXZhdGFyIHsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiAzcmVtOyBoZWlnaHQ6IDNyZW07IH0gLmdtLWF2YXRhciAuYXZhdGFyIGltZyB7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IC1vLW9iamVjdC1maXQ6IGNvdmVyOyBvYmplY3QtZml0OiBjb3ZlcjsgfSAuZ20tYXZhdGFyIC5hdmF0YXItZ3JvdXAgaW1nIHsgYm9yZGVyOiAzcHggc29saWQgI2ZmZjsgfSAuZ20tYXZhdGFyIC5hdmF0YXItZ3JvdXAgLmF2YXRhcjpob3ZlciB7IHotaW5kZXg6IDI7IH0gLmdtLWF2YXRhciBpbWcgeyBib3JkZXItcmFkaXVzOiA1MCU7IH0gLmdtLWF2YXRhciBbZ20tdG9vbHRpcF0geyBwb3NpdGlvbjogcmVsYXRpdmU7IGN1cnNvcjogcG9pbnRlcjsgfSAuZ20tYXZhdGFyIFtnbS10b29sdGlwXTpiZWZvcmUsIC5nbS1hdmF0YXIgW2dtLXRvb2x0aXBdOmFmdGVyIHsgdmlzaWJpbGl0eTogaGlkZGVuOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgfSAuZ20tYXZhdGFyIFtnbS10b29sdGlwXTpiZWZvcmUgeyBjb250ZW50OiAiIjsgd2lkdGg6IDA7IGhlaWdodDogMDsgb3BhY2l0eTogMDsgdmlzaWJpbGl0eTogaGlkZGVuOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvcmRlci1sZWZ0OiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7IGJvcmRlci1yaWdodDogc29saWQgNXB4IHRyYW5zcGFyZW50OyBib3JkZXItdG9wOiBzb2xpZCA1cHggZ3JleTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTJweCk7IHRvcDogMDsgbGVmdDogNTAlOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQsIDAuMDksIDAuMDgsIDEpLCB0cmFuc2Zvcm0gMC4ycyBjdWJpYy1iZXppZXIoMC42NCwgMC4wOSwgMC4wOCwgMSk7IHotaW5kZXg6IDM7IH0gLmdtLWF2YXRhciBbZ20tdG9vbHRpcF06YWZ0ZXIgeyBvcGFjaXR5OiAwOyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvc2l0aW9uOiBhYnNvbHV0ZTsgY29udGVudDogYXR0cihnbS10b29sdGlwKTsgcGFkZGluZzogNnB4IDEwcHg7IGJvdHRvbTogY2FsYygxMDAlICsgM3B4KTsgbGVmdDogNTAlOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgycHgpOyBiYWNrZ3JvdW5kOiBncmV5OyBjb2xvcjogd2hpdGU7IHdoaXRlLXNwYWNlOiBub3dyYXA7IHotaW5kZXg6IDI7IGJvcmRlci1yYWRpdXM6IDJweDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGN1YmljLWJlemllcigwLjY0LCAwLjA5LCAwLjA4LCAxKSwgdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQsIDAuMDksIDAuMDgsIDEpOyB9IC5nbS1hdmF0YXIgW2dtLXRvb2x0aXBdOmhvdmVyOmJlZm9yZSwgLmdtLWF2YXRhciBbZ20tdG9vbHRpcF06aG92ZXI6YWZ0ZXIgeyB2aXNpYmlsaXR5OiB2aXNpYmxlOyBvcGFjaXR5OiAxOyB9IC5nbS1hdmF0YXIgLmF2YXRhciB7IGhlaWdodDogMTAwJSAhaW1wb3J0YW50OyB9', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); head.appendChild(style); style.type = 'text/css'; if (style.styleSheet) { style.styleSheet.cssText = atob(css) } else { style.appendChild(document.createTextNode(atob(css))) } document.querySelectorAll('.gm-avatar').forEach((e) => { let avatar_group = document.createElement('div'); avatar_group.classList.add('avatar-group'); let avatar_contents = e.getAttribute('data-content'); avatar_contents = avatar_contents ? JSON.parse(avatar_contents) : []; if (avatar_contents && Array.isArray(avatar_contents) && avatar_contents.length) { avatar_contents.forEach((d) => { let new_avatar = document.createElement('span'); new_avatar.classList.add('avatar', 'avatar-lg'); if (d.tooltip) new_avatar.setAttribute('gm-tooltip', d.tooltip); let img = document.createElement('img'); img.src = d.avatar || d.img || d.src; if (d.alt) img.alt = d.alt; new_avatar.appendChild(img); avatar_group.appendChild(new_avatar); }) } e.appendChild(avatar_group); e.removeAttribute('data-content'); }) }) })()
</script>
```

View Example in [JSFiddle](https://jsfiddle.net/simplemnm/mhducezt/34/)

<hr/>

### ©[GrowModo](https://growmodo.com)
