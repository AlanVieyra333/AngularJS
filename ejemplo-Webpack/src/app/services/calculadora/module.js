import 'angular';
import CalculadoraService from './service.js';

export default angular.module('calculadoraModuleService',[])
	.service('calculadoraService', CalculadoraService)
	.name;