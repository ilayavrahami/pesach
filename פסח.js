
    function navigateToRSVP() {
        // Open Waze with the specified location (Replace latitude and longitude with your desired location)
        var latitude = '31.974279';
        var longitude = '34.78733';
        var url = 'https://www.waze.com/ul?ll=' + latitude + ',' + longitude + '&navigate=yes';
    
        // Open the Waze link in a new tab/window
        window.open(url, '_blank');
    }
