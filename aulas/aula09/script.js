class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (this.saldo >= valor && valor > 0) {
            this.saldo - valor;
            return true;  //Saque realizado com sucesso
        } else {
            return false; // Saldo Insuficiente ou valor Inválido
        }

    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo = this.saldo += valor;
            return true; // Deposito realizado com sucesso
        } else {
            return false;  // Valor de deposito invalido
        }

    }

    toString() {
        return `Numero: ${this.numero} - Saldo: ${this.saldo}`;
    }
}


class ContaCorrente extends Conta {
    constructor(numero, saldo = 0, limiteChequeEspecial = 200) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial
    }

    sacar(valor) {
        const valorDisponivelParaSaque = this.saldo + this.limiteChequeEspecial;

        if (valor > 0 && valorDisponivelParaSaque >= valor) {
            this.saldo -= valor;
            return true; // Saque realizado com sucesso
        } else {
            return false; //Saldo insuficiente ou valor invalido
        }

    }

}


class ContaPoupanca extends Conta {
    constructor(numero, saldo = 0, taxaRendimento = 0.02) {
        super(numero, saldo);
        this.taxaRendimento = taxaRendimento
    }

}

let novaConta = new Conta(1122, 450.15);
console.log(novaConta.toString());



