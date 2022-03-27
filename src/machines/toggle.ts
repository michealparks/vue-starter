import { createMachine } from 'xstate'

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  schema: {
    context: {},
    events: {} as { type: 'TOGGLE' },
  },
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
})

export { toggleMachine }
