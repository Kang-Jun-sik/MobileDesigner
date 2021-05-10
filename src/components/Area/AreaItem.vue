<template>
  <div :uid="uid" :id="id" class="dews-mobile-item dews-mobile-component dews-item" :class="`col-fd-${col}`" ref="dewsItem"></div>
</template>

<script>
import store from "@/store/index";
import CreateService from "@/service/CreateService";
import ChangeService from "@/service/ChangeService";
import SelectService from "@/service/SelectService";

export default {
  name: 'area-item',
  data() {
    return {
      uid: '',
      parentUid: '',
      /* Properties */
      id: '',
      col: '6',
    }
  },
  created() {
    // item 구분을 위한 guid 추가
    this.uid = CreateService.createUid('area-item');
  },
  mounted() {
    window.drake.containers.push(this.$refs.dewsItem);
  },
  methods: {
    setID(value) {
      this.id = value;
    },
    setItem(val, itemVal, item) {
      this.col = val;
      item.col = itemVal;

      const itemUid = item.uid ? item.uid : item.getAttribute('uid');
      ChangeService.sendChangeMessage('col', itemVal, itemUid);
      setTimeout(SelectService.setPosition, 10, window.selectedItem);
    },
    setCol(value) {
      const siblingElement = this.$el.parentElement.children;
      const items = Array.from(siblingElement).filter(sibling =>
          sibling !== this.$el && sibling.classList.contains('dews-item')
      )

      if (items.length === 1) {
        const item = store.state.component.items.find(item => item.uid === items[0].getAttribute('uid'));
        switch (value) {
          case "4":
            this.setItem(value, '8', item);
            break;
          case "5":
            this.setItem(value, '7', item);
            break;
          case "6":
            this.setItem(value, '6', item);
            break;
          case "7":
            this.setItem(value, '5', item);
            break;
          case "8":
            this.setItem(value, '4', item);
            break;
          default:
            ChangeService.sendChangeMessage('col', this.col, this.uid);
            break;
        }
      } else if (items.length === 2) {
        if (value === "4") {
          const [ firstItem, secondItem ] = items;
          this.setItem(value, '4', firstItem);
          this.setItem(value, '4', secondItem);
        } else {
          ChangeService.sendChangeMessage('col', "4", this.uid);
        }
      }
    },
    destroyComponent() {
      this.$destroy();
      this.$el.parentNode.removeChild(this.$el);
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@dews/dews-mobile-style/scss/variables/variables';
@import 'node_modules/@dews/dews-mobile-style/scss/mixins/_mixins';

@include dews-area-item();


//--------------------------------------
// FD 추가 영역
//--------------------------------------
.dews-item {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  min-height: 1px;
  background-clip: content-box;

  //item fd design
  padding: 12px 10px 0;
  margin-bottom: 12px;
  min-height: 140px;
  border: 1px dotted #212121;
}

.designer-tabletL {
  .dews-item {
    margin: 0 $area-item-space 12px;
    flex: 1 0 100%;
    min-width: $area-item-size-minimum-width;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  @for $i from $area-item-col-size-start through $area-item-col-size-end {
    .dews-item.col-fd-#{$i} {
      @include item-col-size($i);
    }
  }
}
</style>
