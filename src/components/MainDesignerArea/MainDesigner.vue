<template>
  <div :uid="uid" :class="designerLayout" class="main-designer dews-mobile-component">
    <div class="main-designer-bg" ref="mainDesigner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GlobalService from "@/service/GlobalService";
import SelectService from "@/service/SelectService";
import CreateService from "@/service/CreateService";

export default {
  name: 'main-designer',
  data() {
    return {
      designerElement: '',
      id: '',
      uid: ''
    }
  },
  created() {
    this.uid = CreateService.createUid('main-designer');
  },
  mounted() {
    this.$store.commit('setDesigner', this.$refs.mainDesigner);
    GlobalService.keyBinding();
    SelectService.selectControlEvent(); //메인 디자이너에 컨트롤 선택 이벤트 추가
  },
  computed: {
    ...mapGetters({
      designerLayout: "designerSize"
    })
  },
}
</script>

<style lang="scss" scoped>
  .main-designer {
    position: relative;
    padding: 12px 5px 5px 9px;
    background-color: #efeff4;
    overflow-y: scroll;
  }

  .designer-smartPhone {
    height: 626px;
    //margin: 0 24px 0 21px;
    margin: 0 26px 0 24px;
  }

  .designer-tabletM {
    height: 892px;
    //margin: 0 23px 0 20px;
    margin: 0 33px 0 20px;
  }

  .designer-tabletL {
    height: 629px;
    margin: 0 22px 0 21px;
  }

  .designer-style {
    .main-designer {
      overflow: visible;
      padding: 0;
    }
    .main-designer-bg {
      overflow-y: scroll;
      height: 100%;
      padding: 12px 10px 5px 10px;
    }

    .designer-smartPhone {
      position: relative;
      height: calc(100vh - 76px - 99px - 20px);
      margin: 0 26px 0 24px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -21px;
        display: block;
        width: 21px;
        height: 100%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFBAMAAABY77o+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAOjo6Ozs7FhYWExMTAAAAFRUVlQWamAAAAAd0Uk5TAP3///8B/2KIy8MAAAAYSURBVHicY2BUUnaBAAcGJiR2kJIaITYAcboM6CLHhlMAAAAASUVORK5CYII=);

        background-repeat: repeat-y;
        background-position: 0 0;

        //background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFBAMAAABY77o+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAOjo6Ozs7FhYWExMTAAAAFRUVlQWamAAAAAd0Uk5TAP3///8B/2KIy8MAAAAYSURBVHicY2BUUnaBAAcGJiR2kJIaITYAcboM6CLHhlMAAAAASUVORK5CYII=), url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAADKCAMAAAB5VCtjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAANVQTFRFAAAAAAAAOzs7FRUVExMTUlJSSUlJQkJCQUFBQkJCVVVVcXFxcnJyenp6oaGhoqKijo6OvLy8vLy8vLy8vLy8vLy8vLy8ioqKtra2t7e3XV1de3t7fX19Nzc3Pz8/RUVFQEBASEhIQUFBOTk5LCwsLi4uNTU1RkZGR0dHSEhIX19fYGBgWlpaeHh4eHh4bW1tkZGRkpKSgICAqqqqq6urvLy8vLy8vLy8vLy8d3d3np6en5+fYGBgf39/gYGBY2NjMTExR0dHIiIiISEhKioqR0dHQEBAHWsxtQAAAEd0Uk5TAAH///+ItsT//v7//f///P///fz59vT///P///Xz//ggpLnM//////7///3///7///3///z6+Pf1///0///09//4+P/7pbq+HksQAAAA4ElEQVR4nO3W1w6CMBQGYFBU3Hsv3HtvxT3e/5H01uQ/F40lhdhefjlpoYTzH0VRVNdnubXvpageL3Sf7oceCIaghyNR6LF4wmJPMjqv/UW9l9X1vO6Tqk8xeprwDPRsLg+9UCxBL1eq0I1aHTr1H0mX/otTfbjRbEFvd7rQe/0B9OFoDH0ynUGfL5Y2629OOdfqPBKVF6L8376XqLmF9XlWjE7l+5rwDeHUPLAlHM8Ju/0Bunk84b5qnqFf9Cv02/0B3Xi+oNstj5zuMk957y/7M996mafOOlfmqeacPH0DxAdjYt77UFEAAAAASUVORK5CYII=);
        //background-size: 21px 5px, 23px 202px;
        //background-repeat: repeat-y, no-repeat;
        //background-position: 0 0, 200px 20px;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -25px;
        display: block;
        width: 25px;
        height: 100%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAFBAMAAABC01qwAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFExMTGBgYOzs7Ozs7AAAAFhYWOjo6Ozs7FRUVf1PPAAAAAAl0Uk5T////6gD/8fj/ou149gAAACJJREFUeJxjYIAARiUlZRcHKIeBVUlJDYWnjuBxKCkpofMAkFAEuGWTo8QAAAAASUVORK5CYII=);
        background-repeat: repeat-y;
      }
    }
    .designer-tabletM {
      position: relative;
      height: calc(100vh - 76px - 99px - 20px);
      margin: 0 33px 0 20px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -21px;
        display: block;
        width: 21px;
        height: 100%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFBAMAAABY77o+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAOjo6Ozs7FhYWExMTAAAAFRUVlQWamAAAAAd0Uk5TAP3///8B/2KIy8MAAAAYSURBVHicY2BUUnaBAAcGJiR2kJIaITYAcboM6CLHhlMAAAAASUVORK5CYII=);

        background-repeat: repeat-y;
        background-position: 0 0;

        //background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFBAMAAABY77o+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAOjo6Ozs7FhYWExMTAAAAFRUVlQWamAAAAAd0Uk5TAP3///8B/2KIy8MAAAAYSURBVHicY2BUUnaBAAcGJiR2kJIaITYAcboM6CLHhlMAAAAASUVORK5CYII=), url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAADKCAMAAAB5VCtjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAANVQTFRFAAAAAAAAOzs7FRUVExMTUlJSSUlJQkJCQUFBQkJCVVVVcXFxcnJyenp6oaGhoqKijo6OvLy8vLy8vLy8vLy8vLy8vLy8ioqKtra2t7e3XV1de3t7fX19Nzc3Pz8/RUVFQEBASEhIQUFBOTk5LCwsLi4uNTU1RkZGR0dHSEhIX19fYGBgWlpaeHh4eHh4bW1tkZGRkpKSgICAqqqqq6urvLy8vLy8vLy8vLy8d3d3np6en5+fYGBgf39/gYGBY2NjMTExR0dHIiIiISEhKioqR0dHQEBAHWsxtQAAAEd0Uk5TAAH///+ItsT//v7//f///P///fz59vT///P///Xz//ggpLnM//////7///3///7///3///z6+Pf1///0///09//4+P/7pbq+HksQAAAA4ElEQVR4nO3W1w6CMBQGYFBU3Hsv3HtvxT3e/5H01uQ/F40lhdhefjlpoYTzH0VRVNdnubXvpageL3Sf7oceCIaghyNR6LF4wmJPMjqv/UW9l9X1vO6Tqk8xeprwDPRsLg+9UCxBL1eq0I1aHTr1H0mX/otTfbjRbEFvd7rQe/0B9OFoDH0ynUGfL5Y2629OOdfqPBKVF6L8376XqLmF9XlWjE7l+5rwDeHUPLAlHM8Ju/0Bunk84b5qnqFf9Cv02/0B3Xi+oNstj5zuMk957y/7M996mafOOlfmqeacPH0DxAdjYt77UFEAAAAASUVORK5CYII=);
        //background-size: 21px 5px, 23px 202px;
        //background-repeat: repeat-y, no-repeat;
        //background-position: 0 0, 200px 20px;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -20px;
        display: block;
        width: 20px;
        height: 100%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAFBAMAAABC01qwAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFExMTGBgYOzs7Ozs7AAAAFhYWOjo6Ozs7FRUVf1PPAAAAAAl0Uk5T////6gD/8fj/ou149gAAACJJREFUeJxjYIAARiUlZRcHKIeBVUlJDYWnjuBxKCkpofMAkFAEuGWTo8QAAAAASUVORK5CYII=);
        background-repeat: repeat-y;
      }
    }
    .designer-tabletL {
      position: relative;
      height: calc(100vh - 76px - 99px - 20px);
      margin: 0 22px 0 21px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -21px;
        display: block;
        width: 21px;
        height: 100%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFBAMAAABY77o+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAOjo6Ozs7FhYWExMTAAAAFRUVlQWamAAAAAd0Uk5TAP3///8B/2KIy8MAAAAYSURBVHicY2BUUnaBAAcGJiR2kJIaITYAcboM6CLHhlMAAAAASUVORK5CYII=);

        background-repeat: repeat-y;
        background-position: 0 0;

        //background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAFBAMAAABY77o+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABVQTFRFAAAAOjo6Ozs7FhYWExMTAAAAFRUVlQWamAAAAAd0Uk5TAP3///8B/2KIy8MAAAAYSURBVHicY2BUUnaBAAcGJiR2kJIaITYAcboM6CLHhlMAAAAASUVORK5CYII=), url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAADKCAMAAAB5VCtjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAANVQTFRFAAAAAAAAOzs7FRUVExMTUlJSSUlJQkJCQUFBQkJCVVVVcXFxcnJyenp6oaGhoqKijo6OvLy8vLy8vLy8vLy8vLy8vLy8ioqKtra2t7e3XV1de3t7fX19Nzc3Pz8/RUVFQEBASEhIQUFBOTk5LCwsLi4uNTU1RkZGR0dHSEhIX19fYGBgWlpaeHh4eHh4bW1tkZGRkpKSgICAqqqqq6urvLy8vLy8vLy8vLy8d3d3np6en5+fYGBgf39/gYGBY2NjMTExR0dHIiIiISEhKioqR0dHQEBAHWsxtQAAAEd0Uk5TAAH///+ItsT//v7//f///P///fz59vT///P///Xz//ggpLnM//////7///3///7///3///z6+Pf1///0///09//4+P/7pbq+HksQAAAA4ElEQVR4nO3W1w6CMBQGYFBU3Hsv3HtvxT3e/5H01uQ/F40lhdhefjlpoYTzH0VRVNdnubXvpageL3Sf7oceCIaghyNR6LF4wmJPMjqv/UW9l9X1vO6Tqk8xeprwDPRsLg+9UCxBL1eq0I1aHTr1H0mX/otTfbjRbEFvd7rQe/0B9OFoDH0ynUGfL5Y2629OOdfqPBKVF6L8376XqLmF9XlWjE7l+5rwDeHUPLAlHM8Ju/0Bunk84b5qnqFf9Cv02/0B3Xi+oNstj5zuMk957y/7M996mafOOlfmqeacPH0DxAdjYt77UFEAAAAASUVORK5CYII=);
        //background-size: 21px 5px, 23px 202px;
        //background-repeat: repeat-y, no-repeat;
        //background-position: 0 0, 200px 20px;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -19px;
        display: block;
        width: 20px;
        height: 100%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAFBAMAAABC01qwAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABtQTFRFExMTGBgYOzs7Ozs7AAAAFhYWOjo6Ozs7FRUVf1PPAAAAAAl0Uk5T////6gD/8fj/ou149gAAACJJREFUeJxjYIAARiUlZRcHKIeBVUlJDYWnjuBxKCkpofMAkFAEuGWTo8QAAAAASUVORK5CYII=);
        background-repeat: repeat-y;
      }
    }
  }
</style>
