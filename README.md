# Redux with class :sunglasses:

This small library will help typescript users use all the potential of typescript while dispatching actions.

Now those actions will be instance of classes, instead of being plain objects.

instead of
```typescript
export default function(state: IState = initialState, action: any): IProfileState {
    switch (action.type) {
        case 'SOME_ACTION':
            // Compiler has no idea what action is.
            break;
    }
    return state;
}

export function doSomeAction() {
    return {
        type: 'SOME_ACTION',
        payload: 'foo',
    };
}
```

you can write 

```typescript
import { ActionWrapper } from 'redux-with-class';
export default function(state: IState = initialState, wrapper: ActionWrapper): IProfileState {
    const action = wrapper.action;
    if (action instanceof SomeAction) {
        // Now compiler knows what is wrapper.action.
        const foo = action.payload;
        // the compiler knows foo is a string.
    }
    return state;
}

export function doSomeAction() {
    return new SomeAction('foo');
}

class SomeAction {
    constructor(public payload: string) {}
    type = 'SOME_ACTION';
}
```

This will ensure everything is statically typed.

## Installation

`npm install --save redux-with-class`

And then, in your store config:

```typescript

import { convertToPlainAction } from 'redux-with-class';

const store = createStore(rootReducer, undefined, applyMiddleware(/* other middlewares here */ convertToPlainAction));
```
