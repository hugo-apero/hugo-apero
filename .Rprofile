local({
  if (dir.exists('exampleSite')) setwd('exampleSite/')
  for (f in c('~/.Rprofile', '.Rprofile')) {
    if (file.exists(f)) sys.source(f, environment())
  }
  # use theme in root
  options(blogdown.themesDir = '../..')
  # pin hugo version
  ## stop pinning as Hugo 0.80.0 installation fails. See issue #57 (https://github.com/hugo-apero/hugo-apero/issues/57)
  ### options(blogdown.hugo.version = "0.80.0")
  # full markdown mode
  options(blogdown.method = "markdown")
})
