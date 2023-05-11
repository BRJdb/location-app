import {Html5QrcodeScanner} from "html5-qrcode";
import { API } from "./API";
let scanner;
let submissionData = {};

export function initScanner() {
  scanner = new Html5QrcodeScanner("reader", {
    qrbox : {
        width:512,
        height: 512,
    },
    fps: 30,
  });
  
  scanner.render(OnScannerSuccess, OnScannerError);
}

function OnScannerSuccess(result){
    scanner.clear();
    document.getElementById('reader').remove();
    console.log(result);
    submissionData.qr = result;
    navigator.geolocation.getCurrentPosition(onGeoLocSuccess,onGeoError);
}

function OnScannerError(err) {
    console.error(err);
}


function onGeoLocSuccess(data){
  submissionData.phone = "232323";
  submissionData.longitude = data.coords.longitude;
  submissionData.latitude = data.coords.latitude;

  API.submitDriverData(submissionData);
}

function onGeoError(err){
  console.error(err);
}