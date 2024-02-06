class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Conta {
    constructor(cliente, numero, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valorSaque) {
        //verificar se o saldo é maior ou igual ao valor
        //e verificar se o valor é maior que 0
        //retornar ture em caso de sucesso, false caso não

        if (this.saldo >= valorSaque && valorSaque > 0) {
            this.saldo -= valorSaque;
            return true;
        } else {
            return false;
        }
    }

    depositar(valorDeposito) {
        //se o valor for maior que zero, soma o valor ao saldo
        if (valorDeposito > 0) {
            this.saldo += valorDeposito;
            return true;
        }
        return false;
    }

    transferir(valorTransferencia, conta) {
        
        if (this.sacar(valorTransferencia)) {
            conta.depositar(valorTransferencia)
            return true;
        }

        return false;
    }
}

class ContaCorrente extends Conta {
    constructor(cliente, numero, saldo, limiteChequeEspecial) {
        super(cliente, numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    sacar(valorSaque) {
       
        const valorLimiteEspecial = this.saldo + this.limiteChequeEspecial;

        if (valorSaque <= valorLimiteEspecial) {
            return super.sacar(valorSaque);
        }

        return false;
    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, saldo, taxaRendimento) {
        super(cliente, numero, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    aplicarRendimento() {
        this.saldo += this.saldo * this.taxaRendimento;
    }
}

let contas = [];
let clientes = [];

let clienteA = new Cliente("Fulano", "1234567890");
clientes.push(clienteA);

let clienteB = new Cliente("Beltrano", "0987654321");
clientes.push(clienteB);

let contaX = new ContaCorrente(clienteA, 123, 100, 150);
contas.push(contaX);

let contaY = new ContaPoupanca(clienteB, 111, 100, 0.01);
contas.push(contaY);

contaY.transferir(50, contaX);

console.log("Conta Y: ", contaY);
console.log("Conta X: ", contaX);
