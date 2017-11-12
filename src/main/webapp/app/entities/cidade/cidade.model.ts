import { BaseEntity } from './../../shared';

export const enum Estado {
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
}

export class Cidade implements BaseEntity {
    constructor(
        public id?: number,
        public nome?: string,
        public estado?: Estado,
    ) {
    }
}
