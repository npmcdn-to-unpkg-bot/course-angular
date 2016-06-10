'use strict';

const ESCAPE_KEY = 27;

/**
 * Directive that cancels editing a todo if the user presses the Esc key.
 */
export function todoEscape(): ng.IDirective {
	return {
		link: ($scope: ng.IScope, element: JQuery, attributes: any): void => {
			element.bind('keydown', (event: JQueryEventObject) => {
				if (event.keyCode === ESCAPE_KEY) {
					$scope.$apply(attributes.todoEscape);
				}
			});

			$scope.$on('$destroy', () => { element.unbind('keydown'); });
		}
	};
}
