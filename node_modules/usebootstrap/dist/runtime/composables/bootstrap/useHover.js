import {
  useEventEmitter,
  EventEmitProps
} from "../utils/useEventEmitter.js";
import { useIDRef } from "../../composables/attributes/useID.js";
import { isPropUndefined, toArray } from "../../composables/utils/useProps.js";
import { computed } from "#imports";
export const HoverProps = {
  toggle: {
    type: String
  },
  hover: {
    type: Boolean
  },
  // active: {
  //  type: Boolean,
  // },
  ...EventEmitProps
};
export function useHover(props, elementRef) {
  if (isPropUndefined(props.hover)) {
    return {};
  }
  const toggles = toArray(props.toggle);
  const eid = useIDRef(props, elementRef);
  const showEmitters = toggles.map((toggle) => {
    return useEventEmitter(props, "show", toggle || "", elementRef);
  });
  const showEmitter = () => showEmitters.forEach((emitter) => {
    return emitter();
  });
  const hideEmitters = toggles.map((toggle) => {
    return useEventEmitter(props, "hide", toggle || "", elementRef);
  });
  const hideEmitter = () => hideEmitters.forEach((emitter) => {
    return emitter();
  });
  const onMouseover = async () => {
    await showEmitter();
  };
  const onMouseleave = async () => {
  };
  return {
    class: computed(() => {
      return {
        // 'dropdown-toggle': toggles.includes('dropdown'),
        // 'dropdown-toggle-split': props.split,
      };
    }),
    event: {
      onMouseover,
      onMouseleave
    }
  };
}
