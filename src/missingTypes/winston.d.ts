// We want winston 3, but @types/winston doesn't exist for version 3
declare module 'winston' {
	interface WinstonLogger {
		info: (label: string, info: any) => void;
	}

	interface CreateLoggerArgs {
		level: string;
		transports: BaseTransport[];
	}
	export function createLogger(createArgs: CreateLoggerArgs): WinstonLogger;

	class BaseTransport {}

	namespace transports {
		class Console extends BaseTransport {}
	}
}
