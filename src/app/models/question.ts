import { Option } from './option';

export class Question {
    questionId: number;
    name: string;
    option: Option[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this.questionId = data.questionId;
        this.name = data.name;
        this.option = [];
    }
}
