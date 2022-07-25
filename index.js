/**
 * Generate Avatar Snippet by @mikesaraus
 * @copy Growmodo, GmbH
 */
(function () {
  $(document).ready(function () {
      $('<style>.gm-avatar { width: 100%; } .avatar-group .avatar:not(:first-child) { margin-left: -1.2rem; } .avatar-lg { width: 3.5rem; height: 3.5rem; } .avatar { position: relative; display: inline-block; width: 3rem; height: 3rem; } .avatar img { width: 100%; height: 100%; -o-object-fit: cover; object-fit: cover; } .avatar-group img { border: 3px solid #fff; } .avatar-group .avatar:hover { z-index: 2; }</style>').appendTo($('head'))
    document.querySelectorAll('.gm-avatar').forEach((e) => {
      var avatar_base_group = $('<div>', { class: 'avatar-group' })
      var avatar_contents = e.getAttribute('data-content')
      avatar_contents = avatar_contents ? JSON.parse(avatar_contents) : []
      if (avatar_contents && Array.isArray(avatar_contents) && avatar_contents.length)
        avatar_contents.forEach((d) => {
          var new_avatar = $('<span>', { class: 'avatar avatar-lg' })
          new_avatar.html('<img alt="' + (d.alt || 'avatar') + '" data-toggle="tooltip" title="' + d.tooltip + '" class="rounded-circle" src="' + (d.avatar || d.img || d.src) + '" />')
          avatar_base_group.append(new_avatar)
        })
      $(e).append(avatar_base_group)
    })
    $('[data-toggle="tooltip"]').tooltip()
  })
})()
