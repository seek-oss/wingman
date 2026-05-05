import { TextEncoder, TextDecoder } from 'node:util';

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
