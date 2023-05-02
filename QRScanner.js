import {Html5QrcodeScanner} from "html5-qrcode";
import { getUserInfo } from "./userInfo";

let scanner;

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
    document.getElementById('result').innerHTML = 
    '<h2>success</h2><p><a href=${result}>${result}</a></p>';
    getUserInfo();
}

function OnScannerError(err) {
    console.error(err);
}