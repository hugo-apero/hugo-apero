---
title: "A postcard"
weight: 2
subtitle: "Write and send a single postcard."
excerpt: "In this block, we'll use the postcards package to make a single 'about' home page with only R Markdown."
date: 2021-01-02
---

## Pre-requisites

First, make sure you have the latest version of the postcards package installed from CRAN:

```
install.packages("postcards")
```

Restart your R session. If you use RStudio, use the menu item *Session > Restart R* or the associated keyboard shortcut:

+ <kbd>Ctrl + Shift + F10</kbd> (Windows and Linux) or
+ <kbd>Command + Shift + F10<kbd> (Mac OS). 

```
packageVersion("postcards")
[1] ‘0.2.0’
```

## Create GitHub repo

Online.

## Clone GitHub repo

```
usethis::create_from_github("https://github.com/apreshill/global-postcard.git")
```

:sparkles: Commit & Push! :sparkles:

You should be committing these files:

+ `*.Rproj`

+ `.gitignore`

## Create a postcard {#templates}

Inside your current postcards project, use the R console:

```
library(postcards)
```

Then you could run (wait- don't do this yet!):

```
create_postcard()
```

But you could also pick one of four templates:

1. `"jolla"` (<https://seankross.com/postcards-templates/jolla/>) [the default]

1. `"jolla-blue"` (<https://seankross.com/postcards-templates/jolla-blue/>)

1. `"trestles"` (<https://seankross.com/postcards-templates/trestles/>)

1. `"onofre"` (<https://seankross.com/postcards-templates/onofre/>)

```
create_postcard(template = "jolla") #default
create_postcard(template = "jolla-blue")
create_postcard(template = "trestles")
create_postcard(template = "onofre")
```

<aside>
Want to know more? Under the hood, these are R Markdown templates, which you can include in a package.
</aside>

## Anatomy of a postcard

YAML, body, name is index- this is special

:sparkles: Commit & Push! :sparkles:

You should be committing these files:

+ `index.Rmd`

+ `*.jpg`

But! There is no `.html` file (yet...)


## Knit the postcard

Knit button or

```
rmarkdown::render("index.Rmd")
```

What is new in your Git pane?

:sparkles: Commit & Push! :sparkles:

You should be committing this files:

+ `index.html`

(You may get a warning in RStudio IDE that this file is too big- go right ahead)

## Publish a postcard

Easy: 

+ Push, publish to GitHub pages
https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site#creating-your-site

Medium:

```
> use_github_pages(branch = "main", path = "/")
✓ Setting active project to '/Users/alison/rscratch/global-postcard'
✓ Activating GitHub Pages for 'apreshill/global-postcard'
✓ GitHub Pages is publishing from:
● URL: 'https://apreshill.github.io/global-postcard/'
● Branch: 'main'
● Path: '/'
```

## Share your postcard!

Add it to your repository details
  
