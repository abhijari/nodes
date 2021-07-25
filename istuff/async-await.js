async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("hello world"); }, 3000);
    });
    console.log(await myPromise);
  }
  
  myDisplay();