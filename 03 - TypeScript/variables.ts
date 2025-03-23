let myName: string | null = "";
myName = "vuluu";

// Arrays
let items: string[] | number[] = ["test", "ok"];

interface IAccount {
	name: string;
	balance: number;
	status?: string;
	deposit?: () => void;
}

const account: IAccount = {
	name: "VuLuu",
	balance: 10,
};

let accounts: IAccount[];

class InvestmentAccount implements IAccount {
	name;
	balance;

	constructor(public name, public balance) {}

	private withdraw() {}
}
