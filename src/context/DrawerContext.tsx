import { createContext, useContext, useReducer } from "react";

type InitialState = boolean;

interface ActionType {
  type: "TOGGLE";
}

type DrawerDispatch = React.Dispatch<ActionType>;

const DrawerContext = createContext<InitialState | null>(null);
const DrawerDispatchContext = createContext<DrawerDispatch | null>(null);

function drawerReducer(state: InitialState, action: ActionType): InitialState {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default: {
      throw Error(`Unknown action ${action.type}`);
    }
  }
}

const initialState = false;

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, dispatch] = useReducer(drawerReducer, initialState);

  return (
    <DrawerContext.Provider value={isDrawerOpen}>
      <DrawerDispatchContext.Provider value={dispatch}>
        {children}
      </DrawerDispatchContext.Provider>
    </DrawerContext.Provider>
  );
};
export default DrawerProvider;

export function useDrawerState() {
  const state = useContext(DrawerContext);

  return state;
}
export function useDrawerDispatch() {
  const dispatch = useContext(DrawerDispatchContext);

  return dispatch;
}
