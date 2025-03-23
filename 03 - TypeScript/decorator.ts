function MenuItem(itemId: string) {
	return function (value) {
		return class extends value {
			id = itemId;
		};
	};
}

@MenuItem("abc")
class Pizza {
	id: string;
}

class Hamburger {
	id: string;
}

console.log(new Pizza());
