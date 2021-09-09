export class Option {
    optionId: number;
    questionId: number;
    name: string;
    isAnswer: string;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.optionId = data.optionId;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
}
