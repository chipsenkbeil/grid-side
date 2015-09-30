GridSide Theme
==============

The GridSide theme is a multi-page portfolio and blog utilizing the
[Materialize][materialize] frontend framework. Comments can be added using
Disqus. 

The theme contains a main page with a single grid of images representing
different sections of the website. Sections can be _post_, _gallery_, or
_project_ for various rendering.

- Current Materialize version is `0.97.0`.
- Current Font Awesome version is `4.4.0`.
- Current SideComments.js version is `0.0.3`.
- Current Masonry.js version is `3.3.1`.
- Current imagesLoaded.js version is `3.1.8`.
- Current Modernizr.js version is `2.8.3`.
- Current Highlight.js version is `8.7` and contains all 130 languages.
- Current lazysizes.js version is `1.2.0`.
- Current ls.noscript.js version is `1.2.0`.
- Current lightbox.js version is `2.8.1`.
- Current infinitescroll.js version is `2.1.0`.

Contents
--------

- [Installation](#installation)
- [Getting Started](#getting-started)
    - [The Config File](#the-config-file) 
    - [Adding a custom post section](#adding-a-custom-post-section)
    - [Adding a custom project section](#adding-a-custom-project-section)
    - [Adding a custom gallery section](#adding-a-custom-gallery-section)
    - [Nearly Finished](#nearly-finished)
- [Contributing](#contributing)
- [License](#license)

Installation
------------

Inside the folder of your Hugo site run:

    $ mkdir themes
    $ cd themes
    $ git clone https://github.com/chipsenkbeil/grid-side

For more information read the official [setup guide][setup_guide] of Hugo.

Getting Started
---------------

### The Config File ###

Take a look inside the [`exampleSite`][exampleSite] folder of this theme.
You'll find a file called [`config.toml`][config.toml]. To use it, copy the
[`config.toml`][config.toml] in the root folder of your Hugo site. The config
file contains detailed explanation of each available property. Feel free
to customize this theme as you like.

### Adding a custom post section ###

By default, the theme provides a custom view of `post/`. If you would like
to have a different section name than post, you can specify the section by
creating the following:

```
For layouts/custom_post_section/single.html:

{{ partial "post/single.html" . }}

```

```
For layouts/section/custom_post_section.html:

{{ partial "post/list.html" . }}

```

### Adding a custom project section ###

By default, the theme provides a custom view of `project/`. If you would like
to have a different section name than project, you can specify the section by
creating the following:

```
For layouts/custom_project_section/single.html:

{{ partial "project/single.html" . }}

```

```
For layouts/section/custom_project_section.html:

{{ partial "project/list.html" . }}

```

### Adding a custom gallery section ###

By default, the theme provides a custom view of `gallery/`. If you would like
to have a different section name than gallery, you can specify the section by
creating the following:

```
For layouts/custom_gallery_section/single.html:

{{ partial "gallery/single.html" . }}

```

```
For layouts/section/custom_gallery_section.html:

{{ partial "gallery/list.html" . }}

```

### Nearly Finished ###

In order to see your site in action, run Hugo's built-in local server. 

    $ hugo server -w

Now enter `localhost:1313` in the address bar of your browser.

Contributing
------------

Report any bugs using the [issue tracker][issue_tracker]. Submit your own bug
fixes or feature additions via a [pull request][pull_request].

License
-------

This theme is released under the MIT License. For more information read the
[license][license].

[materialize]: http://www.materializecss.com/
[setup_guide]: http://gohugo.io/overview/installing/
[exampleSite]: https://github.com/chipsenkbeil/grid-side/tree/master/exampleSite
[config.toml]: https://github.com/chipsenkbeil/grid-side/blob/master/exampleSite/config.toml
[issue_tracker]: https://github.com/chipsenkbeil/grid-side/issues
[pull_request]: https://github.com/chipsenkbeil/grid-side/pulls
[license]: https://github.com/chipsenkbeil/grid-side/blob/master/LICENSE

