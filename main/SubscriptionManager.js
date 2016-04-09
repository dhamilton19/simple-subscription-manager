export default class SubscriptionManager {

	static subscriptions = {};

	static subscribe(subscriber, subscription) {
		let newSubscription = {};
		if (this.subscriptions[subscription]) {
			newSubscription = {
				[subscription]: [
					...this.subscriptions[subscription],
					subscriber
				]
			};
		}
		else {
			newSubscription = {
				[subscription]: [subscriber]
			};
		}
		this.subscriptions = {
			...this.subscriptions,
			...newSubscription
		};
	}

	static publish(key, data) {
		if (this.subscriptions[key]) {
			for (let component of this.subscriptions[key]) {
				if (component.on) component.on({[key]: data});
			}
		}
		else {
			throw Error('Subscription not found.');
		}
	}

}
