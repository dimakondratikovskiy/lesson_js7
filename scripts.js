let Chainik = function () {
    if (confirm('Включить чайник?')) {
        this.get = function () {
            this.mos = +prompt('Введите мощность чайника:');
            this.colv = +prompt('Введите количество воды:');
            this.c = 1.163;
            this.t = 80;
            this.kpd = 1;
            
            if (isNaN(this.mos) || isNaN(this.colv)) {
                alert('Ошибка. Попробуйте заново!');
            } else {
                this.operation();
            }
        }
        this.operation = function () {
            this.result = (this.colv * this.c * this.t) / (this.mos * this.kpd);
    
            this.show();
        }
    
        this.show = function () {
            alert('Время закипания воды' + ' ' + '=' + ' ' + Math.round(this.result) + ' ' + 'c');
        }
    } else {
        alert('Чайник выключен!');
    }
}

let chainik = new Chainik();
chainik.get(); 