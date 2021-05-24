local({
  if (dir.exists('exampleSite')) setwd('exampleSite/')
  for (f in c('~/.Rprofile', '.Rprofile')) {
    if (file.exists(f)) sys.source(f, environment())
  }
  options(blogdown.themesDir = '../..')
  options(blogdown.hugo.version = "0.80.0")
})
