<template>
  <div :class="isVertical ? 'd-flex align-items-start' : 'tabs-horizontal'">
    <div
      class="nav  nav-pills " :class="isVertical ? 'flex-column' : ''"
      id="v-pills-tab"
      role="tablist"
      :aria-orientation="isVertical ? 'vertical' : ''"
    >
      <button
        v-for="(item, index) in types"
        :key="index"
        class="nav-link"
        :class="state.active == item.id ? 'active' : ''"
        :id="`v-pills-${item.id}-tab`"
        data-bs-toggle="pill"
        :data-bs-target="`#v-pills-${item.id}`"
        type="button"
        role="tab"
        :aria-controls="`v-pills-${item.id}`"
        aria-selected="true"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="tab-content" id="v-pills-tabContent">
      <div
        class="tab-pane fade show"
        :class="state.active == item.id ? 'active' : ''"
        :id="`v-pills-${item.id}`"
        v-for="(item, index) in types"
        :key="index"
        role="tabpanel"
        :aria-labelledby="`v-pills-${item.id}-tab`"
        tabindex="0"
      >
        <ul v-for="(data, index) in item.data" :key="index">
          <li>
            <h4>{{ data.title }}</h4>
            <p v-if="data.date">{{ data.date }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {reactive} from "vue"
export default {
  props: ["types" , "isVertical"],
  setup(){
    const state = reactive({
        active : 'silkySysytems'
    })
    return {state}
  }
};
</script>
