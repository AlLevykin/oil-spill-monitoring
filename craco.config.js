module.exports = {
    babel: {
      loaderOptions: {
        ignore: ["./node_modules/mapbox-gl/dist/mapbox-gl.js"],
      },
    },
    resolve: {
        alias: {
          'mapbox-gl': 'maplibre-gl'
        }
      }    
  };