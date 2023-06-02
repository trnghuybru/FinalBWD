var startField = document.getElementById('start');
var mapBox = document.getElementById('map');

var exitMap = document.getElementById('close_map');

// map
var map;
var searchManager;
var directionsManager;

function GetMap() {
    map = new Microsoft.Maps.Map('#map', {
        center: new Microsoft.Maps.Location(10.8231, 106.6297),
        zoom: 10
    });
    Microsoft.Maps.loadModule('Microsoft.Maps.Search', function () {
        searchManager = new Microsoft.Maps.Search.SearchManager(map);
    });
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
        // directionsManager.setRenderOptions({ itineraryContainer: '#directionsItinerary' });
    });
}
// appear map
startField.addEventListener('focus', function () {
    mapBox.classList.remove('animate__fadeOutUp');
    mapBox.style.display = "block";
    mapBox.classList.add('animate__fadeInDown');
});

// disapear map

// đoạn này sử dụng JQuery thì lưu ý làm như ri nè
/* $(document).ready(function () {
    $("#filter").load("html/filter.html");
    $("#filter").on("click", "#close_map", function () {
        // Thực hiện hành động khi phần tử được click
        mapBox.classList.remove('animate__fadeInDown');
        mapBox.classList.add('animate__fadeOutUp');

        setTimeout(function () {
            mapBox.style.display = "none";
        }, 1000);
    });
}); */
var endField = document.getElementById('end');
exitMap.addEventListener('click', function() {
    mapBox.classList.remove('animate__fadeInDown');
    mapBox.classList.add('animate__fadeOutUp');
    endField.value ="";
    startField.value ="";
    GetDirections();
    setTimeout(function(){
        mapBox.style.display = "none";
    },1000);
});


// map


function GetDirections() {
    // event.preventDefault();
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var startWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: start });
    var endWaypoint = new Microsoft.Maps.Directions.Waypoint({ address: end });
    directionsManager.clearAll();
    directionsManager.addWaypoint(startWaypoint);
    directionsManager.addWaypoint(endWaypoint);
    var requestOptions = {
        routeMode: Microsoft.Maps.Directions.RouteMode.driving,	// Thayđổi giá trị routeMode để sử dụng giá trị từ menu Mode of Transportation
        optimizeWaypoints: true,
        avoidTraffic: true,
        distanceUnit: Microsoft.Maps.Directions.DistanceUnit.km
    };
    directionsManager.calculateDirections(requestOptions); // Tính toán và hiển thị đường đi mới
}


// appear

// nút searchHome
// Lấy tham chiếu đến nút button
var searchButton = document.getElementById('searchHome');

// Xử lý sự kiện click
searchButton.addEventListener('click', function() {
  // Điều hướng đến trang "HomePage.html"
  window.location.href = 'PageHome.html';
});
