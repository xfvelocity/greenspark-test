import { shallowMount } from "@vue/test-utils";
import Toggle from "@/components/toggle/Toggle.vue";

describe("Toggle", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Toggle);
  });

  test("is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
