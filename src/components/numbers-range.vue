<template>
  <form class="numbers-range">
    <div class="form-group">
      <label>Заработная плата за час:</label>
    </div>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" v-model.number="minValue" />
      </div>
      <div class="col">
        <input type="text" class="form-control" v-model.number="maxValue" />
      </div>
    </div>
    <div class="form-group last-group">
      <vue-slider
        :max="getMaxRangeValue"
        :min="getMinRangeValue"
        :dotSize="getDotSize"
        :interval="getInterval"
        :tooltip="getTooltip"
        v-model="sliderValue"
      ></vue-slider>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  components: {
    VueSlider
  },
  computed: {
    ...mapGetters({
      getMinValue: "minValue",
      getMaxValue: "maxValue",
      getMaxRangeValue: "maxRangeValue",
      getMinRangeValue: "minRangeValue",
      getInterval: "interval",
      getTooltip: "tooltip",
      getDotSize: "dotSize"
    }),
    minValue: {
      get() {
        return `от ${this.getMinValue} Р`;
      },
      set(value) {
        this.$store.commit("setMinValue", value);
      }
    },
    maxValue: {
      get() {
        return `до ${this.getMaxValue} Р`;
      },
      set(value) {
        this.$store.commit("setMaxValue", value);
      }
    },
    sliderValue: {
      get() {
        return [this.getMinValue, this.getMaxValue];
      },
      set(value) {
        this.$store.commit("setMinValue", value[0]);
        this.$store.commit("setMaxValue", value[1]);
      }
    }
  }
};
</script>

<style lang="scss">
@import "../_variables.scss";

.numbers-range {
  background: white;
  padding: 1rem;
  max-width: 350px;
  display: flex;
  flex-direction: column;

  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 1rem;
  }

  .row {
    flex-direction: row;
    display: flex;
    input {
      color: $input-color;
      font-size: $font-size-base;
      font-weight: $btn-font-weight;
      color: #2e3033;
      font-size: 1rem;
      font-weight: 600;
      width: 50%;
      padding: 0.6rem 0.9rem;
    }
  }

  .last-group {
    margin-top: 1rem;
    display: block;
  }
}

.vue-slider-process,
.vue-slider-dot-handle {
  background-color: $primary;
  box-shadow: $input-box-shadow;
}
</style>
