<template>
  <div class="dews-mobile-layer layer-drawer dews-mobile-layout" :class="drawerSize">
    <div class="overlay"></div>
    <div class="layer layer-bottom">
      <div class="layer-moving-button">
        <span v-if="scrollEnabled" class="moving-button"></span>
        <span v-else class="fixed-button"></span>
      </div>
      <div class="layer-content">
        <div class="drawer-codepicker">
          <div class="titlebar">
            <div class="title">{{ helpTitle }}</div>
            <button class="confirm-button">적용</button>
            <button class="next-icon-button"><span>다음</span></button>
          </div>

          <div class="control">
            <div class="layer-code-filter active" :class="{filterActive: filterActive ? 'active' : ''}">
              <div class="code-filter">
                <div class="code-filter-search">
                  <button class="filter-button" :class="{filterDisabled: filterDisabled ? 'filterDisabled' : ''}" @click="clickFilter">
                    <span>filter</span>
                  </button>
                  <span class="code-filter-input">
                <input type="text">
                <button class="clear-button"><span>초기화</span></button>
                <button class="search-button"><span>검색</span></button>
              </span>
                </div>
                <div class="code-filter-field">
                  <codepicker-search ref="codepickerSearch"></codepicker-search>
                </div>
              </div>
            </div>

            <div class="dews-cardlist codepicker">
              <div class="cardlist-wrap" :dataUid="dataUid">
                <dews-cardlist ref="cardlist"></dews-cardlist>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";
import DewsCardlist from "@/components/Controls/cardlist/DewsCardList";
import CodepickerSearch from "@/components/Controls/codepicker/CodePickerSearch";

export default {
  name: 'drawer-layout',
  components: {CodepickerSearch, DewsCardlist},
  props: ['dataUid'],
  data() {
    return {
      uid: '',
      title: '',
      active: false,
      height: '',
      scrollEnabled: false,
      drawer: 'bottom',
      helpTitle: 'helpTitle',
      filterActive: false,
      filterDisabled: false,
    }
  },
  created() {
    this.uid = CreateService.createUid('drawer-layout');
  },
  mounted() {},
  methods: {
    clickHandler() {},
    clickFilter() {}
  },
  computed: {
    drawerSize() {
      return store.getters.getDrawerSize;
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';
@include layer-drawer();

.layer-drawer  {
  display: none;

  &.open {
    display: block;
  }
  .layer-bottom {
    position: absolute;
    transform: translate3d(0px, -76px, 0px);

  }

  &.drawer-tabletL {
    .layer-bottom {
      height: 600px;
    }
  }

  &.drawer-tabletM {
    .layer-bottom {
      height: 800px;
    }
  }

  &.drawer-smartPhone {
    .layer-bottom {
      left: 24px;
      width: 430px;
      height: 560px;
      margin-left: 0;
    }
  }
}

.designer-style {
  .layer-drawer  {
    position: sticky;
    bottom: 0;
    .layer-bottom {
      transform: translate3d(0px, -56px, 0px);

    }

    &.drawer-tabletL {
      .layer-bottom {
        height: 600px;
      }
    }

    &.drawer-tabletM {
      .layer-bottom {
        height: 690px;
      }
    }

    &.drawer-smartPhone {
      .layer-bottom {
        left: 0;
        width: 410px;
        height: 500px;
      }
    }
  }
}
</style>
