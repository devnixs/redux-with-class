import { convertToPlainAction } from '../middleware'

describe(`convertToPlainAction`, () => {
  beforeEach(() => {})

  it(`should dispatch with a wrapped action if the action is an instance of a classe`, () => {
    class Test {
      type = 'TEST'
    }
    const action = new Test()
    let hasBeenCalledWithWrappedAction = false
    const next = (result: any) => {
      if (result.action === action) {
        hasBeenCalledWithWrappedAction = true
      }
    }
    convertToPlainAction(null)(next)(action)
    expect(hasBeenCalledWithWrappedAction).toBe(true)
  })

  it(`should not dispatch with a wrapped action if the action is not an instance of a classe`, () => {
    const action = {
      type: 'TEST',
    }
    let hasBeenCalledWithAction = false
    const next = (result: any) => {
      if (action === action) {
        hasBeenCalledWithAction = true
      }
    }
    convertToPlainAction(null)(next)(action)
    expect(hasBeenCalledWithAction).toBe(true)
  })
  it(`should not dispatch with a wrapped action if the action does not have a type`, () => {
    class Test {}
    const action = new Test()
    let hasBeenCalledWithAction = false
    const next = (result: any) => {
      if (action === action) {
        hasBeenCalledWithAction = true
      }
    }
    convertToPlainAction(null)(next)(action)
    expect(hasBeenCalledWithAction).toBe(true)
  })
})
