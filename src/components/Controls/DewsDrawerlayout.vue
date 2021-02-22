<template>
  <div class="layer-drawer open" :class="drawerSize">
    <div class="overlay"></div>
    <div class="layer layer-bottom" :style="style">
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
                  <ul class="form-field">
                    <codepicker-search>
                      <li>
                        <dews-dropdownlist title="이름"></dews-dropdownlist>
                      </li>
                      <li>
                        <dews-dropdownlist title="나이"></dews-dropdownlist>
                      </li>
                      <li>
                        <dews-dropdownlist title="주소"></dews-dropdownlist>
                      </li>
                    </codepicker-search>
                  </ul>
                </div>
              </div>
            </div>

            <div class="dews-cardlist codepicker">
              <div class="cardlist-wrap">
                <dews-cardlist></dews-cardlist>
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
import CodepickerSearch from "@/components/Controls/codepicker/CodePickerSearch";
import DewsCardlist from "@/components/Controls/cardlist/DewsCardList";
import DewsDropdownlist from "@/components/Controls/dropdownlist/DewsDropdownlist";

export default {
  name: 'drawer-layout',
  components: {CodepickerSearch, DewsCardlist, DewsDropdownlist},
  data() {
    return {
      title: '',
      active: false,
      height: '',
      scrollEnabled: false,
      drawer: 'bottom',
      style: {
        // height: '0px'
      },
      helpTitle: 'helpTitle',
      filterActive: false,
      filterDisabled: false,
    }
  },
  created() {},
  methods: {
    clickHandler() {

    },
    clickFilter() {

    }
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

//--------------------------------------
// FD 추가 영역
//--------------------------------------
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
