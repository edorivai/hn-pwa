declare module 'instadate' {
	export function differenceInMinutes(from: Date, to: Date): number;
	export function isAfter(date1: Date, date2: Date): boolean;
	export function isBefore(date1: Date, date2: Date): boolean;
}
