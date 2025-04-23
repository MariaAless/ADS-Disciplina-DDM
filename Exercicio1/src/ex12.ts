function func(valor:string|number):string {
    return typeof(valor);
}

const n1:number = 4;
console.log(`O tipo do valor é ${func(n1)}`);

const n2:string = "alôalô";
console.log(`O tipo do valor é ${func(n2)}`)