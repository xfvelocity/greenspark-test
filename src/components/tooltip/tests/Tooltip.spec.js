import { shallowMount } from "@vue/test-utils";
import Tooltip from "@/components/tooltip/Tooltip.vue";

describe("Tooltip", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Tooltip);
  });

  test("is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("showTooltip - sets isVisible to true", () => {
    expect(wrapper.vm.isVisible).toBe(false);

    wrapper.vm.showTooltip();

    expect(wrapper.vm.isVisible).toBe(true);
  });

  test("hideTooltip - sets isVisible to false", () => {
    wrapper.vm.isVisible = true;

    wrapper.vm.hideTooltip();

    expect(wrapper.vm.isVisible).toBe(false);
  });
});
