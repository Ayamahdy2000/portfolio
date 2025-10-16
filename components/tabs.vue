<template>
  <div :class="isVertical ? 'd-flex align-items-start' : 'tabs-horizontal'">
    <!-- Tabs -->
    <div
      class="nav nav-pills"
      :class="{ 'flex-column': isVertical }"
      id="v-pills-tab"
      role="tablist"
      :aria-orientation="isVertical ? 'vertical' : 'horizontal'"
    >
      <button
        v-for="(item, index) in types"
        :key="index"
        class="nav-link"
        :class="{ active: activeTab === item.id }"
        :id="`v-pills-${item.id}-tab`"
        data-bs-toggle="pill"
        :data-bs-target="`#v-pills-${item.id}`"
        type="button"
        role="tab"
        :aria-controls="`v-pills-${item.id}`"
        :aria-selected="activeTab === item.id"
        @click="activeTab = item.id"
      >
        {{ item.title }}
      </button>
    </div>

    <!-- Content -->
    <div class="tab-content" id="v-pills-tabContent">
      <div
        v-for="(item, index) in types"
        :key="index"
        class="tab-pane fade"
        :class="{ 'show active': activeTab === item.id }"
        :id="`v-pills-${item.id}`"
        role="tabpanel"
        :aria-labelledby="`v-pills-${item.id}-tab`"
      >
        <ul>
          <li v-for="(data, i) in item.data" :key="i">
            <h4>{{ data.title }}</h4>
            <p v-if="data.date">{{ data.date }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    types: {
      type: Array,
      required: true,
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const activeTab = ref(null);

    onMounted(() => {
      if (props.types.length > 0) {
        activeTab.value = props.types[0].id;
      }
    });

    return {
      activeTab,
    };
  },
};
</script>

