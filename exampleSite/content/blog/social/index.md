---
title: "Set up your social"
subtitle: "Social icons may appear on several pages throughout your site. Learn how to set them up, and control where they show up."
excerpt: "This theme offers built-in Font Awesome icons for organizing your collection of social accounts and their links. Use icons to help visitors find you wherever you want to be found, and learn how to show or hide them in your site's header, footer, homepage, about page, and contact form."
date: 2021-01-28
author: "Alison Hill & Eric Anderson"
draft: false
# layout options: single, single-sidebar
layout: single
categories:
- Theme Features
---

There are five places where you can choose to show social icons. Here is the tl;dr:

+ site header (set in `config.toml`), 
+ site footer (set in `config.toml`), 
+ [homepage](/) (set in `content/_index.md`),
+ [about page](/about) in the sidebar (set in `content/about/sidebar/index.md`), and
+ [contact page](/contact) (set in `content/form/contact.md`). 

Read on to learn how to set up your social icons, and how to show/hide them.

## Configure social 

Wherever you end up wanting to show your social icons, you'll need to start by setting up the links in your site `config.toml` file. Open that up and scroll down to the `[[params.social]]` section. The start of it looks like this:

```toml
[params]
  <!--snip snip-->
  
  # Social icons may appear on your site header, footer, and other pages
  # Add as many icons as you like below
  # Icon pack "fab" includes brand icons, see: https://fontawesome.com/icons?d=gallery&s=brands&m=free
  # Icon pack "fas" includes solid icons, see: https://fontawesome.com/icons?d=gallery&s=solid&m=free
  # Icon pack "far" includes regular icons, see: https://fontawesome.com/icons?d=gallery&s=regular&m=free
  [[params.social]]
      icon      = "github" # icon name without the 'fa-'
      icon_pack = "fab"
      url       = "https://github.com/apreshill/apero"
  [[params.social]] <!--lather, rinse, repeat-->
```

For each link, you'll need to start a new portion that begins with `[[params.social]]`. Then, pick your `icon` and `icon_pack` from the [Font Awesome](https://fontawesome.com/) free icon library:

+ Icon pack "fab" includes [brand icons](https://fontawesome.com/icons?d=gallery&s=brands&m=free)

+ Icon pack "fas" includes [solid icons](https://fontawesome.com/icons?d=gallery&s=solid&m=free)

+ Icon pack "far" includes [regular icons](https://fontawesome.com/icons?d=gallery&s=regular&m=free)

Finally, add the `url` that you would like users to go to when they click on that icon. All external links (i.e., those that start with `http`) will open in a new tab (that is, `target="_blank"`); relative links to pages within the site will open in the same window.

Now you should be all set to show/hide your social icons. Each of these will pull the social icons and urls from the settings you just created in your site configuration file.

## Show social in site header and footer

Let's start with the header and footer, as those are site-wide. Open up your site `config.toml` file again and scroll down to the `[params]` section (it is actually :up: from where you configured these icons):

```toml
[params]
  <!--snip snip-->
  
  # show/hide social icons in site header & footer
  # configure social icons and links below in [[params.social]]
  socialInHeader = false
  socialInFooter = true
```

That was easy!

## Show social in homepage

Open up `content/_index.md`. That file's YAML controls what you see on the homepage. Set `show_social_links` like so:

```yaml
show_social_links: true # specify social accounts in site config
```

If you set this to `true` to show the icons on the homepage, your social icons in the footer will not show up even when you set `socialInFooter = true`, so as not to litter your site with too many icons.

## Show social in about page sidebar

Open up `content/about/sidebar/index.md`. That file's YAML controls what you see in the sidebar on the about page. Set `show_social_links` like so:

```yaml
show_social_links: true # specify social accounts in site config
```

## Show social in contact page

You may use the YAML for your contact page (located in `content/form/contact.md`):

```yaml
---
show_social_links: true # specify social accounts in site config
---
```
