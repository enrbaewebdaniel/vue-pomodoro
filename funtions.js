const app = new Vue({
  el: "#app",
  data: {
    minutosPerCiclo: 25,
    minutosPerDescanso: 5,
    actualFase: 4,
    minutes: 0,
    seconds: 0,
    paused: false,
    ciclo: 0,
    cicloCounter: 0,
    timer: 0,
  },

  methods: {
    resetTimer() {
      this.timer = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.cicloCounter = 0;
      this.actualFase = 4;
    },

    waiter() {
      console.log("entre en el metodo");

      return new Promise(() => {
        this.timer = setInterval(() => {
          if (this.minutes < 0) {
            clearInterval(timer);
          }

          if (this.seconds <= 0) {
            this.minutes--;
            this.seconds = 60;
          }

          this.seconds--;
        }, 1000);
      });
    },
    async startTimer() {
      this.resetTimer();
      this.cicloCounter++;
      this.actualFase = 1;

      this.minutes = this.minutosPerCiclo;

      while (this.cicloCounter <= this.ciclo) {
        console.log("va a empezar");

        await this.waiter();

        //FIXME  -- ARREGLAR EL TIEMPO DE DESCANSO Y REVISAR LOS CICLOS
        alert("Empieza el tiempo de descanso");
        this.minutes = this.minutosPerDescanso;
        await this.waiter();

        this.cicloCounter++;
      }

      this.ciclo = 0;
      this.actualFase = 4;
    },
  },
  computed: {
    currentFase() {
      const fase = {
        0: "Pausado",
        1: "En Curso",
        3: "Descanso",
        4: "Esperando...",
      };

      return fase[this.actualFase];
    },
    fillMinutes() {
      return this.minutes.toString().padStart(2, 0);
    },

    fillSeconds() {
      return this.seconds.toString().padStart(2, 0);
    },
  },
});
