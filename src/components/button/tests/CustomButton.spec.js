import { shallowMount } from "@vue/test-utils";
import CustomButton from "@/components/button/CustomButton.vue";

describe("CustomButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CustomButton);
  });

  test("is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
