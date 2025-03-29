/** @type {import('stylelint').Config} */

export default {
  extends: [
    "stylelint-prettier/recommended",
    "stylelint-config-recommended-vue",
    "stylelint-config-clean-order",
  ],
  rules: {
    "at-rule-no-unknown": null,
    "at-rule-no-deprecated": null,
    "order/properties-alphabetical-order": null,
  },
};
