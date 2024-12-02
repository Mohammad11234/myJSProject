const num = 237;
let bool = true;
for(let Number = 2 ; Number < num ; Number++ ){
    for(let i = 2 ; i < Number && bool ; i++ ){
        if(Number % i == 0){
            bool = false;
        }
    }
    if(bool){
        console.log(Number);
    }
    bool = true;
}