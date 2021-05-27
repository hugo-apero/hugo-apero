local({
  if (dir.exists('exampleSite')) setwd('exampleSite/')
  for (f in c('~/.Rprofile', '.Rprofile')) {
    if (file.exists(f)) sys.source(f, environment())
  }
  # use theme in root
  options(blogdown.themesDir = '../..')
  # pin hugo version
  options(blogdown.hugo.version = "0.80.0")
  # full markdown mode
  options(blogdown.method = "markdown")
})
