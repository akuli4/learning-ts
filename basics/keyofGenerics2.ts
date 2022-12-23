interface BaseEvent {
	time: string;
	userId: string;
}

// & is like a plus sign in math

interface EventMap {
	addToCart: BaseEvent & { quantity: number; productId: string };
	checkout: BaseEvent;
}

function sendEvent<N extends keyof EventMap>(
	name: N,
	data: EventMap[N]
): BaseEvent & { status: "OK" | "FAILED"; action: N } {
	return {
		action: name,
		time: data.time,
		userId: data.userId,
		status: Math.random() > 0.5 ? "OK" : "FAILED",
	};
}

console.log(
	sendEvent("addToCart", {
		quantity: 2,
		time: "2",
		userId: "1",
		productId: "2",
	})
);
