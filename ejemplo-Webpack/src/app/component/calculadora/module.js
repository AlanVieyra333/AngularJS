import 'angular';
import {calculadoraComponent} from './component.js';
import '../../services/calculadora/module.js';

export default angular
    .module('calculadora',['calculadoraModuleService'])
    .component('calculator', calculadoraComponent)
    .name;