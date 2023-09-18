
import {DirectiveBinding} from 'vue';

type ClickableElement = HTMLDivElement & {
  __clickOutside?: (event: Event) => void;
};

export default {
  mounted(el: ClickableElement, binding: DirectiveBinding) {
    el.__clickOutside = (event: Event) => {
      const { target } = event;

      if (!(target instanceof Element)) {
        return;
      }

      if (!(el == target || el.contains(target))) {
        binding.value(event);
      }
    }
    document.body.addEventListener('click', el.__clickOutside);
  },
  onUnmounted(el: ClickableElement): void {
    if (el?.__clickOutside) {
      document.body.removeEventListener('click', el.__clickOutside);
    }
  }
};
