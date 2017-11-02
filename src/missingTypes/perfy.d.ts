declare module 'perfy' {
	export function start(name: string, destroy?: boolean): void;
	export function end(name: string): PerfyResult;
	export function names(): string[];
	export function exists(name: string): boolean;
	export function result(name: string): PerfyResult;
	export function destroy(name: string): void;
	export function destroyAll(): void;
	export interface PerfyResult {
		name: string;
		summary: string;
		seconds: number;
		nanoseconds: number;
		milliseconds: number;
		time: number;
		startTime: number;
		endTime: number;
	}
}
