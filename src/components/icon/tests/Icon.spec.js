import { shallowMount } from "@vue/test-utils";
import Icon from "@/components/icon/Icon.vue";

describe("Icon", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Icon, {
      props: {
        src: "tooltip",
      },
    });
  });

  test("is mounted", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("getImageUrl - gets image", () => {
    expect(wrapper.vm.getImageUrl("tooltip")).toBe(
      "file:///C:/src/assets/icons/tooltip.svg",
    );
  });
});
