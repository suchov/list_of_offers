import checkPropTypes from "check-prop-types";
/**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Valueof data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, comformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    comformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
