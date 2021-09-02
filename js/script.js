
// Берем счетчик который мы писали на и добавляем к нему возможность
// Подсчитывать сколько раз были вызваны функции (increase, decrease, get)
// Добавить метод getStatistic который вернет на объект с данными которые мы подсчитывали в пункте выше
// Добавить метод который будет обнулять наш счетчик


const callbacks = {
		incCb: function (arg) {
			let a = 'increase callback ' + arg;
			console.log(a);
			return a;
		},


		decCb: function (arg) {
			let a =  'decrease callback ' + arg;
			console.log(a);
			return a;
		},


		getCb: function (arg) {
			let a =  'get callback ' + arg;
			console.log(a);
			return a;
		}
	}
	function counter(num = 0, obj) {
		let count = num;
		let	increaseCount = 0;
		let	decreseCount = 0;
		let	getCount = 0;



		function increse(num = 1) {
			++increaseCount;
			return obj.incCb(count +=num);
		}


		function decrese(num = 1) {
			++decreseCount;
			return obj.decCb(count -= num);
		}


		function get() {
			++getCount;
			return obj.getCb(count);
		}
		function getStatistic() {
			return console.log({
				inc: increaseCount,
				dec: decreseCount,
				get: getCount,
			}) ;
		}
		function refreshCount() {
			return count = 0
		}


		return {
			increse,
			decrese, 
			get,
			getStatistic,
			refreshCount,
		}


	}


	let newCounter = counter(10, callbacks);


	newCounter.increse();
	newCounter.increse();
	newCounter.increse();
	newCounter.decrese();
	newCounter.decrese();
	newCounter.getStatistic();
	newCounter.get();
	newCounter.getStatistic();
	newCounter.refreshCount();
	newCounter.get();	
	newCounter.increse();
	newCounter.increse();
	newCounter.increse();
	newCounter.decrese();
	newCounter.getStatistic();
	newCounter.decrese();
	newCounter.get();

	
