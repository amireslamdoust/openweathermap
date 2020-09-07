// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

// https://github.com/react-hook-form/react-hook-form/issues/312
// Adding shim so it works when testing react-hook-form, or any components that uses MutationObserver
import 'mutationobserver-shim'
