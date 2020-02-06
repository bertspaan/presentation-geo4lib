Reveal.initialize({
  controls: false,
  progress: false,
  history: true,
  // center: true,
  transition: 'fade',
  width: '100%',
  height: '100%',
  margin: 0,
  minScale: 1,
  maxScale: 1,

  dependencies: [
    {
      src: '/assets/js/prism.js',
      async: true,
      callback: function () {
        // hljs.initHighlightingOnLoad()
      }
    }
    // {
    //   src: 'js/highlight.js',
    //   async: true,
    //   callback: function () {
    //     hljs.initHighlightingOnLoad()
    //   }
    // }
  ]
})

function getCurrentIndex () {
  return Reveal.getIndices().h
}
