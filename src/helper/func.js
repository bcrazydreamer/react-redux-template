export const vibrate = (ms)=>{
    ms = !isNaN(ms) ? ms : 100;
    try{window.navigator.vibrate(ms)}catch(err){}
    return 
}