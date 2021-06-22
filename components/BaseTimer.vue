<template>
<div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path :stroke-dasharray="circleDasharray" class="base-timer__path-remaining" :class="remainingPathColor" d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "></path>
        </g>
    </svg>
    <span class="base-timer__label">{{ formattedTimeLeft }}
    </span>
</div>
</template>

<script>
import {
    create
} from 'lodash';
import moment from 'moment'
import {
    Session
} from '../vuexes/session'

const FULL_DASH_ARRAY = 36000;
const WARNING_THRESHOLD = 5000;
const ALERT_THRESHOLD = 0;


const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

const TIME_LIMIT = 0;

export default {
    data() {
        return {
            timePassed: 0,
            timerInterval: null,
            timetest: null,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0,
            form: {
                status: 2,
                close_at:null,
            },
        };
    },

    props: {
        
        id: {
            default: 'id'
        },
        start_time: {
            default: 'hello'
        },
        end_time: {
            default: 'Hello'
        },

    },
    async created() {
        await this.timegg()
    },
    computed: {
        _seceond: () => 1000,
        _minutes: () => {
            return this._seceond * 60
        },
        _hours: () => {
            return this._minutes * 60
        },
        timeLeft() {
            return (this.timetest + TIME_LIMIT ) - this.timePassed ;
        },
        formattedTimeLeft() {
            const timeLeft = this.timeLeft;
            const hours = Math.floor(timeLeft / 3600)
            const minutes = Math.floor((timeLeft / 60)-(hours*60));
            let seconds = timeLeft % 60;
            if (seconds < 10) {
                seconds = `${seconds}`;
            }

            return `${hours}:${minutes}:${seconds}`;

        },

        timeFraction() {
            const rawTimeFraction = this.timeLeft / TIME_LIMIT;
            return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        },

        remainingPathColor() {
            const {
                alert,
                warning,
                info
            } = COLOR_CODES;

            if (this.timeLeft <= alert.threshold) {
                return alert.color;
            } else if (this.timeLeft <= warning.threshold) {
                return warning.color;
            } else {
                return info.color;
            }
        },
        circleDasharray() {
            return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
        },
    },
    watch: {
        timeLeft(newValue) {
            if (newValue === 0) {
                this.onTimesUp();
            }
        }
    },

    mounted() {
        this.startTimer();
    },
    methods: {
        timegg() {
            var now = moment().format("hh:mm:ss");
            var end = moment(this.end_time).format("hh:mm:ss");
            var nowsecounds = moment.duration(now).asSeconds();
            var endsecounds = moment.duration(end).asSeconds();
            this.timetest = endsecounds - nowsecounds
            
        },
        async onTimesUp() {
            clearInterval(this.timerInterval);
            this.changeStatusAuto(this.id)
        },
        async changeStatusAuto(pk){
            this.form.close_at = moment().format()
            await Session.updateSession(pk, this.form)

        },
        startTimer() {
            this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        },

    }
};
</script>

<style lang="scss" scoped>
.base-timer {
    position: relative;
    width: 300;
    height: 300;

    &__svg {
        transform: scaleX(-1);
    }

    &__circle {
        fill: none;
        stroke: none;
    }

    &__path-elapsed {
        stroke-width: 7px;
        stroke: white;
    }

    &__path-remaining {
        stroke-width: 7px;
        stroke-linecap: round;
        transform: rotate(90deg);
        transform-origin: center;
        transition: 1s linear all;
        fill-rule: nonzero;
        stroke: currentColor;

        &.green {
            color: rgb(65, 184, 131);
        }

        &.orange {
            color: orange;
        }

        &.red {
            color: red;
        }
    }

    &__label {
        position: absolute;
        width: 186px;
        height: 180px;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        color: rgb(148, 147, 147);
    }
}
</style>
