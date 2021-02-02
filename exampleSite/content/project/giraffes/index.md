---
title: "Tachyons for Style"
subtitle: "A tachyon /ˈtæki.ɒn/ or tachyonic particle is a hypothetical particle that always moves faster than light."
excerpt: "Building this static site generator theme was the first time I used an Atomic (or Functional) CSS system like Tachyons. It’s a design system that provides very small (which means fast) CSS modules that you can use in your HTML."
date: 2019-07-03
author: "Eric Anderson"
draft: false
tags:
  - hugo-site
categories:
  - Theme Features
  - R
  - package
# layout options: single or single-sidebar
layout: single
---

![Tachyons Logo Script](tachyons-logo-script.png)

## [Tachyons](http://tachyons.io) is a design system that allows you to design gorgeous interfaces in the browser with little effort.

---

### Because Speed

Building this static site generator theme was the first time I used an Atomic
(or Functional) CSS system like Tachyons. It's a design system that provides
very small (which means fast) CSS modules that you can use in your HTML. So,
rather than writing every line of CSS, you apply the style you need as you write
your HTML with easy to understand shorthand class names. This makes for a very
powerful way to style, in the browser, or while building a static site like this
one – since you can see every change with every save. **It's a joy to use.**

In using this theme for your next static website project, you won't need to know
anything about Tachyons ... so, don't freak out. Even though I used it to style
the theme, you won't need to change a thing. BUT, if you do want to play around
with it, you can make massive changes very easily. Just familiarize yourself
with the [clear documentation on the design system](http://tachyons.io/docs/).
Once you dive in, you'll recognize all the classes I'm using in the markup.

### BYOTachyons

One of the best features of Tachyons is the exhaustive [component
library](https://www.tachyonstemplates.com/components/?selectedKind=AboutPages&selectedStory=AboutUs&full=0&down=0&left=1&panelRight=0)
contributed by the community. All those components are built to work with the
Tachyons classes, so they will work in this theme too! You can copy/paste
components in order to quickly block out a page, then fill in your content.

### Taste the Rainbow

We've leveraged the [accessible color
combinations](http://tachyons.io/docs/themes/skins/) included with Tachyons to
offer an easy way for you to setup your site using your favorite colors. In the
site configuration file (`config.toml`), there is a full set of color parameters
giving you control over the theme color scheme. For an option like `siteBgColor`
for example, you can just type one of the predefined color names from Tachyons
and save the file. You can totally customize the theme colors within minutes of
installing the theme.

```toml
# basic color options: use only color names as shown in the
# "Color Palette" section of http://tachyons.io/docs/themes/skins/
siteBgColor = "near-white"
sidebarBgColor = "light-gray"
headingColor = "black"
textColor = "dark-gray"
sidebarTextColor = "mid-gray"
bodyLinkColor = "blue"
navLinkColor = "near-black"
sidebarLinkColor = "near-black"
footerTextColor = "silver"
buttonTextColor = "near-white"
buttonBgColor = "black"
buttonHoverTextColor = "white"
buttonHoverBgColor = "blue"
borderColor = "moon-gray"
```

### Dig Deeper

Let's say you have a style guide to follow and `washed-blue` just won't cut the
mustard. We built Blogophonic for you, too. There is a bypass of these
predefined colors built in, you just need to dig a little deeper. In the theme
assets, locate and open the main SCSS file (`/assets/main.scss`). After the
crazy looking variables you probably don't recognize and directly following the
Tachyons import (`@import 'tachyons';`) you'll see a comment that looks just
like this:

```scss
// uncomment the import below to activate custom-colors
// add your own colors at the top of the imported file
// @import 'custom-colors';
```

Once you uncomment the `custom-colors` import, it will look like this:

```scss
// uncomment the import below to activate custom-colors
// add your own colors at the top of the imported file
@import "custom-colors";
```

Save that change, and now the color options in the `config.toml` are no longer
active – they've been bypassed. To customize the colors, locate and open the
`custom-colors` file found in the theme assets (`/assets/custom-colors.scss`).
At the top of that file, you'll find a whole new set of variables for all the
same color options, but this time you get to assign your own HEX codes.

```scss
// set your custom colors here
$siteBgColorCustom: #e3e3da;
$sidebarBgColorCustom: #dbdbd2;
$textColorCustom: #666260;
$sidebarTextColorCustom: #666260;
$headingColorCustom: #103742;
$bodyLinkColorCustom: #c4001a;
$navLinkColorCustom: #c4001a;
$sidebarLinkColorCustom: #c4001a;
$footerTextColorCustom: #918f8d;
$buttonTextColorCustom: #f7f7f4;
$buttonHoverTextColorCustom: #f9f9f8;
$buttonBgColorCustom: #103742;
$buttonHoverBgColorCustom: #c4001a;
$borderColorCustom: #c4beb9;
```
