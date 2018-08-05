import { createVM } from './util'

let $vm;
const plugin = {
	install (Vue) {
		if (!$vm) {
			$vm = createVM(Vue);
		}
	}
}