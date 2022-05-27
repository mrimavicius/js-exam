/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }

    sum(){
        return this.num1 + this.num2
    }

    subtraction(){
        return this.num1 - this.num2
    }

    multiplication(){
        return this.num1 * this.num2
    }

    division(){
        return this.num1 / this.num2
    }


}

const calculator = new Calculator(5, 8)

console.log(calculator.sum())
console.log(calculator.subtraction())
console.log(calculator.multiplication())
console.log(calculator.division())