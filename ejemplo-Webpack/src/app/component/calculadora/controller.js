export default function calculadoraController(calculadoraService){
	var vm = this;
	var valAnterior = 0;
	var operator = 0;
	vm.result = 0;

	var salvar = function(){
		valAnterior = vm.result;
		vm.result = 0;
	};

	vm.add = function(){
		salvar();
		operator = 1;
	};
	vm.sub = function(){
		salvar();
		operator = 2;
	};
	vm.mul = function(){
		salvar();
		operator = 3;
	};
	vm.div = function(){
		salvar();
		operator = 4;
	};

	vm.calculate = function(){
		switch(operator){
			case 1:
				vm.result = calculadoraService.sum(valAnterior, vm.result);
				operator = 0;
				break;
			case 2:
				vm.result = valAnterior - vm.result;
				operator =0;
				break;
			case 3:
				vm.result = valAnterior * vm.result;
				operator=0;
				break;
			case 4:
				vm.result = valAnterior / vm.result;
				operator=0;
				break;
			default:
				break;
		}
	};
}