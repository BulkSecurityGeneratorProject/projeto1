import { BaseEntity } from './../../shared';

export class Servico implements BaseEntity {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
    ) {
    }
}
