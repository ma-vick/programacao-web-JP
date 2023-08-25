let banknotes = {
    '2': 10,
    '5': 20,
    '10': 30,
    '20': 15,
    '50': 20,
    '100': 3
};

function toWithdraw(value) {
    if (value === "") {
        console.log("insira um valor");
    } else {
        console.log(value);
    }

    for(const banknote in banknotes) {
        if(banknote === value){
            console.log('aqui seu saque');
        }
    }
}
