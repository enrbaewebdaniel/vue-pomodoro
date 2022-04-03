const app = new Vue({
    el: '#app',
    data: {
        actualFase: 4,
        minutes: "00",
        seconds: "00",
        active: false,
        ciclo: 0
    },
    computed: {
        currentFase(){
            const fase = {
                0: "Pausado",
                1: "En Curso",
                2: "Finalizado",
                4: "Esperando..."
            }

            return fase[this.actualFase];
        }
    }
});