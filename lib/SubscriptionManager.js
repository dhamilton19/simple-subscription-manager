'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SubscriptionManager = function () {
	function SubscriptionManager() {
		_classCallCheck(this, SubscriptionManager);
	}

	_createClass(SubscriptionManager, null, [{
		key: 'subscribe',
		value: function subscribe(subscriber, subscription) {
			var newSubscription = {};
			if (this.subscriptions[subscription]) {
				newSubscription = _defineProperty({}, subscription, [].concat(_toConsumableArray(this.subscriptions[subscription]), [subscriber]));
			} else {
				newSubscription = _defineProperty({}, subscription, [subscriber]);
			}
			this.subscriptions = _extends({}, this.subscriptions, newSubscription);
		}
	}, {
		key: 'publish',
		value: function publish(key, data) {
			if (this.subscriptions[key]) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this.subscriptions[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var component = _step.value;

						if (component.on) component.on(_defineProperty({}, key, data));
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			} else {
				throw Error('Subscription not found.');
			}
		}
	}]);

	return SubscriptionManager;
}();

SubscriptionManager.subscriptions = {};
exports.default = SubscriptionManager;