import { shallowMount } from "@vue/test-utils";
import Widget from "@/components/widget/Widget.vue";

describe("Widget", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Widget);
  });

  test("is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });

  describe("isLightBackround - check if the background is light", () => {
    test("white - is a light background", async () => {
      await wrapper.setProps({ widget: { selectedColor: "white" } });

      expect(wrapper.vm.isLightBackround).toBe(true);
    });

    test("green - is NOT a light background", async () => {
      await wrapper.setProps({ widget: { selectedColor: "green" } });

      expect(wrapper.vm.isLightBackround).toBe(false);
    });
  });
});
