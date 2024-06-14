const { ESLint } = require('eslint')
const config = require('./index.js')

const WARNING_REACT_VERSION_WAS_SET_TO_DETECT =
  'Warning: React version was set to "detect" in eslint-plugin-react settings, but the "react" package is not installed. Assuming latest React version for linting.'
const TINY_VALID_JS_CODE = ''

const error = jest.spyOn(console, 'error').mockImplementation(() => {})

afterAll(() => {
  error.mockRestore()
})

describe('Validate ESLint config', () => {
  const eslint = new ESLint({ overrideConfig: config })

  it.skip(`all top-level properties are correct`, async () => {
    const [result] = await eslint.lintText(TINY_VALID_JS_CODE)
    expect(result.messages.length).toBe(0)
  })

  it.skip(`no react package is installed warning`, async () => {
    await eslint.lintText(TINY_VALID_JS_CODE)
    expect(error).toHaveBeenCalledWith(WARNING_REACT_VERSION_WAS_SET_TO_DETECT)
  })

  it.skip(`no deprecated rules are used`, async () => {
    const [result] = await eslint.lintText(TINY_VALID_JS_CODE)
    expect(result.usedDeprecatedRules.length).toBe(0)
  })
})
