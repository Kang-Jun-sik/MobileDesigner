import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        items: [],

        mainDesigner: '',
        containerElement: '',
        componentElement: '',
        etcElement: '',

        containerControl: {
            searchContainer: 'Search Container',
            listContainer: 'List Container',
            formContainer: 'Form Container',
            infoBoxContainer: 'Info box Container'
        },
        componentControl: {
            button: 'Button',
            textBox: 'Text box',
            numTextBox: 'Numeric text box',
            maskTextBox: 'Mask text box',
            checkBox: 'Check box',
            radioButton: 'Radio Button',
            dropdownList: 'Dropdown List'
        },
        etcControl: {
            messageBox: 'Message box',
            snackBar: 'Snack Bar',
            tooltipBox: 'Tooltip',
            loadingBox: 'Loading',
            progressBar: 'Progress Bar',
            slider: 'Slider'
        }
    },
    mutations: {
        addItem(state, item) {
            state.items.push(item);
        },
        findDesigner(state, payload) {
            state.mainDesigner = payload;
        },
        findElement(state, payload) {
            let name = payload.name;
            state[name] = payload.control;
        },
        setDrake(state, element) {
            console.log(window.drake.container)
            console.log('state', state.dragulaContainer)
        }
    },
    actions: {},
    getters: {
        items: state => {
            return state.items;
        }
    }
});
