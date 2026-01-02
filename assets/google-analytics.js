(function () {
  const isLocal =
    location.hostname === 'localhost' ||
    location.hostname === '127.0.0.1' ||
    location.protocol === 'file:';

    var fileName = (location.pathname === '/')? '/index.html' : location.pathname;
    if (isLocal){
      console.log('skafa is running locally - page name is \'' + fileName + '\'')
    }
    else {
      console.log('skafa is running hosted - page name is \'' + fileName + '\'')
        // Load gtag.js
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6RGWLHBNBZ';
        document.head.appendChild(script);

        // Init GA
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', 'G-6RGWLHBNBZ');
    }
})();