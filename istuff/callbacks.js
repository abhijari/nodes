function f1(data,callbacks){
    setTimeout(() => {
        return callbacks(data);
    }, 5000);
}

f1(5000,(res)=>{
    console.log(res)
    console.log("normal")
})



