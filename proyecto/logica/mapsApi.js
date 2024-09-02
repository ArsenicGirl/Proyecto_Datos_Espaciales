document.addEventListener('DOMContentLoaded', function() {
        let map = L.map('map').setView([4.635519054890594, -74.1068586815587], 30);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        //let marker = L.marker([4.634920204910384, -74.1068586815587], {}).addTo(map);
        
        let marker

        map.addEventListener("click", (e) =>{
                console.log(marker)
                if(marker){
                        marker.removeFrom(map)
                }
                marker = L.marker([e.latlng.lat, e.latlng.lng], {}).addTo(map);
                
        })
    });
