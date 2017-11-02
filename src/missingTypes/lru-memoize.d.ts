declare module 'lru-memoize' {
	interface memoize {
		<T extends Function>(func: T): T;
	}
	export default function(limit?: number, equals?: Function, deepObjects?: boolean): memoize;
}
