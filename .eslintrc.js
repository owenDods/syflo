module.exports = {
	"parser": "babel-eslint",
	"extends": [ "eslint:recommended", "airbnb" ],
	"plugins": [
		"react"
	],
	"rules": {
		"react/jsx-indent": [ 2, "tab" ],
		"react/jsx-indent-props": [ 2, "tab" ],
		"comma-dangle": [ 2, "never" ],
		"padded-blocks": [ 2, "always" ],
		"indent": [ 2, "tab", { "SwitchCase": 1 } ],
		"array-bracket-spacing": [ 2, "always" ],
		"no-tabs": "off",
		"react/jsx-filename-extension": [ 1, { "extensions": [".js", ".jsx"] } ],
		"react/require-default-props": "off",
		"object-curly-newline": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/label-has-for": "off",
		"no-plusplus": "off"
	},
	"globals": {
		"document": true
	}
};
