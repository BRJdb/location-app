export function getUserInfo(){
    navigator.geolocation.getCurrentPosition(onGeoLocSuccess,onGeoError);
}

function onGeoLocSuccess(data){
    console.log(data.coords.latitude);
    console.log(data.coords.longitude);
    console.log(new Date().toString());
}

function onGeoError(err){
    console.error(err);
}
