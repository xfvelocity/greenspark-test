import { shallowMount } from "@vue/test-utils";
import Checkbox from "@/components/checkbox/Checkbox.vue";

describe("Checkbox", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Checkbox);
  });

  test("is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
