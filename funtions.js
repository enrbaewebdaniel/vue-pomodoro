const app = new Vue({
  el: "#app",
  data: {
    minutosPerCiclo: 25,
    minutosPerDescanso: 25,
    actualFase: 4,
    minutes: 0,
    seconds: 0,
    paused: false,
    ciclo: 0,
    cicloCounter: 0,
  },

  methods: {
    resetTimer() {
      this.minutes = 0;
      this.seconds = 0;
      this.cicloCounter = 0;
      this.actualFase = 4;
      this.paused = false;
    },
    waiter(minutes) {
      this.minutes = minutes;
      this.seconds = 0;

      console.log("entra");

      while (this.minutes <= this.minutosPerCiclo) {
        this.seconds = 60;
        console.log("entra1");
        while (this.seconds <= 60) {
          console.log("entra2");
          this.syncDelay(1000);
          this.seconds--;
        }

        this.minutes--;
      }
    },
    syncDelay(milliseconds) {
      var start = new Date().getTime();
      var end = 0;
      while (end - start < milliseconds) {
        end = new Date().getTime();
      }
    },
    startTimer() {
      this.resetTimer();
      this.cicloCounter++;
      this.actualFase = 1;

      this.minutes = this.minutosPerCiclo;

      while (this.cicloCounter <= this.ciclo) {
        console.log("va a empezar");

        this.waiter(this.minutosPerCiclo);

        alert("Empieza el tiempo de descanso");

        this.waiter(this.minutosPerDescanso);

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
